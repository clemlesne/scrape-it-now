from contextlib import asynccontextmanager
from typing import Any, AsyncGenerator
from uuid import uuid4

from azure.core.exceptions import (
    ResourceExistsError,
    ResourceNotFoundError,
    ServiceRequestError,
)
from azure.storage.blob.aio import BlobServiceClient, ContainerClient
from pydantic import BaseModel
from tenacity import (
    retry,
    retry_if_exception_type,
    stop_after_attempt,
    wait_random_exponential,
)

from app.helpers.logging import logger
from app.persistence.iblob import (
    BlobAlreadyExistsError,
    BlobNotFoundError,
    IBlob,
    LeaseAlreadyExistsError,
)


class Config(BaseModel):
    connection_string: str
    name: str


class AzureBlobStorage(IBlob):
    _client: ContainerClient
    _config: Config
    _service: BlobServiceClient

    def __init__(
        self,
        config: Config,
    ) -> None:
        logger.info('Azure Blob Storage "%s" is configured', config.name)
        self._config = config

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    @asynccontextmanager
    async def lease(
        self,
        blob: str,
        lease_duration: int,
    ) -> AsyncGenerator[str, None]:
        try:
            # Create the lease
            async with await self._client.get_blob_client(blob).acquire_lease(
                lease_duration=lease_duration,
                lease_id=str(uuid4()),
            ) as lease:
                # Return the lease ID
                yield lease.id
        except ResourceExistsError as e:
            raise LeaseAlreadyExistsError(
                f'Lease for blob "{blob}" already exists'
            ) from e
        except ResourceNotFoundError as e:
            raise BlobNotFoundError(f'Blob "{blob}" not found') from e

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def upload_blob(
        self,
        blob: str,
        data: bytes,
        length: int,
        overwrite: bool,
        lease_id: str | None = None,
    ) -> None:
        try:
            await self._client.upload_blob(
                data=data,
                lease=lease_id,
                length=length,
                name=blob,
                overwrite=overwrite,
            )
        except ResourceExistsError as e:
            raise BlobAlreadyExistsError(f'Blob "{blob}" already exists') from e

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def download_blob(
        self,
        blob: str,
    ) -> str:
        try:
            f = await self._client.download_blob(
                blob=blob,
                encoding=self.encoding,
            )
            return await f.readall()
        except ResourceNotFoundError as e:
            raise BlobNotFoundError(f'Blob "{blob}" not found') from e

    async def __aenter__(self) -> "AzureBlobStorage":
        self._service = BlobServiceClient.from_connection_string(
            self._config.connection_string
        )
        self._client = self._service.get_container_client(self._config.name)
        # Create if it does not exist
        try:
            await self._client.create_container()
            logger.info('Created Blob Storage "%s"', self._config.name)
        except ResourceExistsError:
            pass
        return self

    async def __aexit__(self, *exc: Any) -> None:
        await self._service.close()
