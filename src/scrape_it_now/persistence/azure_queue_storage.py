import asyncio
from base64 import b64decode, b64encode
from binascii import Error as BinasciiError
from collections.abc import AsyncGenerator
from contextlib import suppress
from typing import Any

from azure.core.exceptions import (
    ResourceExistsError,
    ResourceNotFoundError,
    ServiceRequestError,
)
from azure.storage.queue.aio import QueueClient, QueueServiceClient
from pydantic import BaseModel
from tenacity import (
    retry,
    retry_if_exception_type,
    stop_after_attempt,
    wait_random_exponential,
)

from scrape_it_now.helpers.http import azure_transport
from scrape_it_now.helpers.identity import credential
from scrape_it_now.helpers.logging import logger
from scrape_it_now.models.message import Message
from scrape_it_now.persistence.iqueue import IQueue, MessageNotFoundError


class Config(BaseModel):
    access_key: str | None
    account_name: str
    endpoint_suffix: str
    name: str


class AzureQueueStorage(IQueue):
    _client: QueueClient
    _config: Config
    _service: QueueServiceClient

    def __init__(
        self,
        config: Config,
    ) -> None:
        logger.debug('Azure Queue Storage "%s" is configured', config.name)
        self._config = config

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def send_message(
        self,
        message: str,
    ) -> None:
        await self._client.send_message(self._escape(message))

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def receive_messages(
        self,
        max_messages: int,
        visibility_timeout: int,
    ) -> AsyncGenerator[Message, None]:
        logger.debug('Processing new messages from "%s"', self._config.name)

        # Fetch all visible messages
        messages = self._client.receive_messages(
            max_messages=max_messages,
            visibility_timeout=visibility_timeout,
        )
        # Consuming
        async for message in messages:
            content = self._unescape(message.content)
            logger.debug('Received "%s"', content)
            # Convert to Message
            yield Message(
                content=content,
                delete_token=message.pop_receipt,
                dequeue_count=message.dequeue_count,
                message_id=message.id,
            )

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def delete_message(
        self,
        message: Message,
    ) -> None:
        try:
            await self._client.delete_message(
                message=message.message_id,
                pop_receipt=message.delete_token,
            )
        except ResourceNotFoundError as e:
            raise MessageNotFoundError(
                f'Message "{message.message_id}" not found'
            ) from e

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def create_queue(
        self,
    ) -> None:
        await self._wait_for_creation()
        await self._wait_for_ready()

    async def _wait_for_ready(self) -> None:
        """
        Wait for the queue to be ready.

        Loop indefinitely until the queue is respond to send/pull operations. API is not consistent, so we need to check if the resource is ready to be used.
        """
        while True:
            # Try using it
            try:
                # Send and clean a test message
                await self.send_message("ping")
                async for message in self.receive_messages(
                    max_messages=1, visibility_timeout=1
                ):
                    await self.delete_message(message)
                # If no exception, the queue is ready
                logger.debug('Queue Storage "%s" is ready', self._config.name)
                break
            # If exception, the queue is not ready yet
            except Exception:
                logger.debug("Queue not ready yet, retrying", exc_info=True)
                await asyncio.sleep(2)

    async def _wait_for_creation(self) -> None:
        """
        Wait for the queue to be created.

        Loop indefinitely until the queue is created. API is not consistent, so we need to check if the resource is created.
        """
        # Start creation
        with suppress(ResourceExistsError):
            await self._client.create_queue()

        # Wait for it to be created, API is eventually consistent
        while True:
            with suppress(ResourceNotFoundError):
                await self._client.get_queue_properties()
                logger.debug('Created Queue Storage "%s"', self._config.name)
                # Created
                break
            await asyncio.sleep(2)

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def delete_queue(
        self,
    ) -> None:
        # Delete the queue
        # Catch race condition to preserve idempotency
        with suppress(ResourceNotFoundError):
            # Delete
            await self._client.delete_queue()
            # Wait for it to be deleted, API is eventually consistent
            while True:
                with suppress(ResourceNotFoundError):
                    await self._client.get_queue_properties()
                    await asyncio.sleep(2)
                    continue
                # Deleted
                break
            logger.info('Deleted Queue Storage "%s"', self._config.name)

    def _escape(self, value: str) -> str:
        """
        Escape value to base64 encoding.
        """
        return b64encode(value.encode(self.encoding)).decode(self.encoding)

    def _unescape(self, value: str) -> str:
        """
        Unescape value from base64 encoding.

        If the value is not base64 encoded, return the original value as string. This will handle retro-compatibility with old messages.
        """
        try:
            return b64decode(value.encode(self.encoding)).decode(self.encoding)
        except (UnicodeDecodeError, BinasciiError):
            return value

    async def __aenter__(self) -> "AzureQueueStorage":
        # Create the client
        self._service = QueueServiceClient(
            # Deployment
            account_url=f"https://{self._config.account_name}.queue.{self._config.endpoint_suffix}",
            # Performance
            transport=await azure_transport(),
            # Authentication
            credential=self._config.access_key or await credential(),
        )
        self._client = self._service.get_queue_client(
            # Deployment
            queue=self._config.name,
            # Performance
            transport=await azure_transport(),
        )

        # Create if it does not exist
        await self.create_queue()

        # Return instance
        return self

    async def __aexit__(self, *exc: Any) -> None:
        await self._service.close()
