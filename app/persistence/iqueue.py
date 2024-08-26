from abc import abstractmethod
from collections.abc import AsyncGenerator
from enum import Enum, unique
from typing import Any

from app.models.message import Message


class MessageNotFoundError(Exception):
    pass


@unique
class Provider(str, Enum):
    AZURE_QUEUE_STORAGE = "azure_queue_storage"
    LOCAL_DISK = "local_disk"


class IQueue:
    encoding = "utf-8"

    @abstractmethod
    async def send_message(
        self,
        message: str,
    ) -> None:
        """
        Send a message to the queue.
        """
        pass

    @abstractmethod
    def receive_messages(
        self,
        max_messages: int,
        visibility_timeout: int,
    ) -> AsyncGenerator[Message, None]:
        """
        Receive messages from the queue.
        """
        pass

    @abstractmethod
    async def delete_message(
        self,
        message: Message,
    ) -> None:
        """
        Delete a message from the queue.
        """
        pass

    @abstractmethod
    async def delete_queue(
        self,
    ) -> None:
        """
        Delete the queue.

        Warning: This operation is irreversible, all data will be lost.
        """
        pass

    @abstractmethod
    async def __aenter__(self) -> "IQueue":
        pass

    @abstractmethod
    async def __aexit__(self, *exc: Any) -> None:
        pass
