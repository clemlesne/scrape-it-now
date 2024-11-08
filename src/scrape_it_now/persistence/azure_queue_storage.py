from base64 import b64decode, b64encode
from binascii import Error as BinasciiError
from collections.abc import AsyncGenerator
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
                visibility_timeout=message.next_visible_on,
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
    ) -> bool:
        try:
            await self._client.create_queue()
            logger.debug('Created Queue Storage "%s"', self._config.name)
            return True
        except ResourceExistsError:
            pass
        return False

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def delete_queue(
        self,
    ) -> None:
        await self._client.delete_queue()
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
        return self

    async def __aexit__(self, *exc: Any) -> None:
        await self._service.close()
