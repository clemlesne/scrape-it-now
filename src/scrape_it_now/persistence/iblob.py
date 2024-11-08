from abc import abstractmethod
from collections.abc import AsyncGenerator
from contextlib import AbstractAsyncContextManager
from enum import Enum, unique
from typing import Any


class BlobNotFoundError(Exception):
    pass


class BlobAlreadyExistsError(Exception):
    pass


class LeaseNotFoundError(Exception):
    pass


class LeaseAlreadyExistsError(Exception):
    pass


@unique
class Provider(str, Enum):
    AZURE_BLOB_STORAGE = "azure_blob_storage"
    LOCAL_DISK = "local_disk"


class IBlob:
    encoding = "utf-8"

    @abstractmethod
    def lease_blob(
        self,
        blob: str,
        lease_duration: int,
    ) -> AbstractAsyncContextManager[str]:
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
    def list_blobs(
        self,
        starts_with: str | None = None,
    ) -> AsyncGenerator[tuple[str, int], None]:
        pass

    @abstractmethod
    async def delete_container(
        self,
    ) -> None:
        pass

    @abstractmethod
    async def __aenter__(self) -> "IBlob":
        pass

    @abstractmethod
    async def __aexit__(self, *exc: Any) -> None:
        pass
