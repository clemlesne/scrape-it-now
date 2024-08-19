from abc import abstractmethod
from typing import Any, AsyncGenerator

from app.models.message import Message


class MessageNotFoundError(Exception):
    pass


class IQueue:
    @abstractmethod
    async def send_message(
        self,
        message: str,
    ) -> None:
        pass

    @abstractmethod
    def receive_messages(
        self,
        max_messages: int,
        visibility_timeout: int,
    ) -> AsyncGenerator[Message, None]:
        pass

    @abstractmethod
    async def delete_message(
        self,
        message: Message,
    ) -> None:
        pass

    @abstractmethod
    async def __aenter__(self) -> "IQueue":
        pass

    @abstractmethod
    async def __aexit__(self, *exc: Any) -> None:
        pass
