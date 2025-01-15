from base64 import b64decode, b64encode
from collections.abc import AsyncGenerator
from typing import Any

from aiobotocore.client import BaseClient as AioBaseClient
from aiobotocore.session import (
    ClientCreatorContext as AioClientContext,
    get_session as get_aio_session,
)
from botocore.exceptions import ClientError
from pydantic import BaseModel

from scrape_it_now.helpers.logging import logger
from scrape_it_now.models.message import Message
from scrape_it_now.persistence.iqueue import IQueue, MessageNotFoundError


class Config(BaseModel):
    access_key_id: str
    endpoint: str
    name: str
    region: str
    secret_access_key: str | None

    @property
    def queue_url(self) -> str:
        return f"{self.endpoint}/{self.name}"


class AwsSqs(IQueue):
    _aio_session = get_aio_session()
    _client: AioBaseClient
    _config: Config
    _service: AioClientContext

    def __init__(
        self,
        config: Config,
    ) -> None:
        logger.debug('Azure SQS queue "%s" is configured', config.name)
        self._config = config

    async def send_message(
        self,
        message: str,
    ) -> None:
        await self._client.send_message(
            QueueUrl=self._config.queue_url,
            MessageBody=self._escape(message),
        )

    async def receive_messages(
        self,
        max_messages: int,
        visibility_timeout: int,
    ) -> AsyncGenerator[Message, None]:
        logger.debug('Processing new messages from "%s"', self._config.name)

        # Fetch messages in batches of 10, this is the maximum allowed by SQS
        max_per_batch = 10
        total_pulled = 0

        # Iterate over batches
        while total_pulled < max_messages:
            pulled_now = min(max_messages - total_pulled, max_per_batch)
            # Fetch all visible messages
            messages = await self._client.receive_message(
                AttributeNames=["ApproximateReceiveCount"],
                MaxNumberOfMessages=pulled_now,
                QueueUrl=self._config.queue_url,
                VisibilityTimeout=visibility_timeout,
            )
            # Consuming
            for message in messages.get("Messages", []):
                content = self._unescape(message["Body"])
                logger.debug('Received "%s"', content)
                # Convert to Message
                yield Message(
                    content=content,
                    delete_token=message["ReceiptHandle"],
                    dequeue_count=message["Attributes"]["ApproximateReceiveCount"],
                    message_id=message["MessageId"],
                )
            # Update counter
            total_pulled += pulled_now

    async def delete_message(
        self,
        message: Message,
    ) -> None:
        try:
            await self._client.delete_message(
                QueueUrl=self._config.queue_url,
                ReceiptHandle=message.delete_token,
            )
        except ClientError as e:
            if e.response["Error"]["Code"] == "ReceiptHandleIsInvalid":
                raise MessageNotFoundError(
                    f'Message "{message.message_id}" not found'
                ) from e

    async def create_queue(
        self,
    ) -> bool:
        try:
            await self._client.create_queue(QueueName=self._config.name)
            logger.debug('Created SQS queue "%s"', self._config.name)
            return True
        except ClientError as e:
            if e.response["Error"]["Code"] == "QueueAlreadyExists":
                logger.debug('SQS queue "%s" already exists', self._config.name)
                return False
            raise

    async def delete_queue(
        self,
    ) -> None:
        await self._client.delete_queue(QueueUrl=self._config.queue_url)
        logger.info('Deleted SQS queue "%s"', self._config.name)

    def _escape(self, value: str) -> str:
        """
        Escape value to base64 encoding.
        """
        return b64encode(value.encode(self.encoding)).decode(self.encoding)

    def _unescape(self, value: str) -> str:
        """
        Unescape value from base64 encoding.
        """
        return b64decode(value.encode(self.encoding)).decode(self.encoding)

    async def __aenter__(self) -> "AwsSqs":
        self._service = self._aio_session.create_client(
            aws_access_key_id=self._config.access_key_id,
            aws_secret_access_key=self._config.secret_access_key,
            endpoint_url=self._config.endpoint,
            region_name=self._config.region,
            service_name="sqs",
        )
        self._client = await self._service.__aenter__()
        # Create if it does not exist
        await self.create_queue()
        return self

    async def __aexit__(self, *exc: Any) -> None:
        await self._service.__aexit__(*exc)
