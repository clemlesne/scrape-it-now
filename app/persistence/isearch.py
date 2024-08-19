from abc import abstractmethod
from typing import Any


class DocumentNotFoundError(Exception):
    pass


class ISearch:
    @abstractmethod
    async def get_document(
        self,
        key: str,
        selected_fields: set[str] | None = None,
    ) -> dict:
        pass

    @abstractmethod
    async def merge_or_upload_documents(
        self,
        documents: list[dict],
    ) -> None:
        pass

    @abstractmethod
    async def __aenter__(self) -> "ISearch":
        pass

    @abstractmethod
    async def __aexit__(self, *exc: Any) -> None:
        pass
