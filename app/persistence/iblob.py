from abc import abstractmethod
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
        """
        Lease a blob for a given duration.

        The lease ID will be returned, it must be used to upload, download or delete the blob. After the lease expires, the blob will be unlocked and any use of the lease ID will raise an error.
        """
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
        """
        Upload a blob to the container.
        """
        pass

    @abstractmethod
    async def download_blob(
        self,
        blob: str,
    ) -> str:
        """
        Download a blob from the container.
        """
        pass

    @abstractmethod
    async def delete_container(
        self,
    ) -> None:
        """
        Delete the container.
        """
        pass

    @abstractmethod
    async def __aenter__(self) -> "IBlob":
        pass

    @abstractmethod
    async def __aexit__(self, *exc: Any) -> None:
        pass
