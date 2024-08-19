from abc import abstractmethod
from typing import Any, AsyncContextManager


class BlobNotFoundError(Exception):
    pass


class LeaseAlreadyExistsError(Exception):
    pass


class IBlob:
    encoding = "utf-8"

    @abstractmethod
    def lease(
        self,
        blob: str,
        lease_duration: int,
    ) -> AsyncContextManager[str]:
        pass

    @abstractmethod
    async def upload_blob(
        self,
        blob: str,
        data: bytes,
        length: int,
        overwrite: bool,
        lease_id: str | None = None,
    ) -> None:
        pass

    @abstractmethod
    async def download_blob(
        self,
        blob: str,
    ) -> str:
        pass

    @abstractmethod
    async def __aenter__(self) -> "IBlob":
        pass

    @abstractmethod
    async def __aexit__(self, *exc: Any) -> None:
        pass
