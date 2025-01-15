import asyncio
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager
from datetime import UTC, datetime, timedelta
from typing import Any

from aiobotocore.client import BaseClient as AioBaseClient
from aiobotocore.session import (
    ClientCreatorContext as AioClientContext,
    get_session as get_aio_session,
)
from aiofiles.os import path
from botocore.exceptions import (
    ClientError,
    ConnectionClosedError,
    EndpointConnectionError,
)
from botocore.session import get_session
from pydantic import BaseModel
from tenacity import (
    retry,
    retry_if_exception_type,
    stop_after_attempt,
    wait_random_exponential,
)

from scrape_it_now.helpers.logging import logger
from scrape_it_now.models.lease import LeaseModel
from scrape_it_now.persistence.iblob import (
    BlobAlreadyExistsError,
    BlobNotFoundError,
    IBlob,
    LeaseAlreadyExistsError,
    LeaseNotFoundError,
)


class Config(BaseModel):
    access_key_id: str
    endpoint: str
    name: str
    secret_access_key: str | None


class AwsS3(IBlob):
    _aio_session = get_aio_session()
    _client: AioBaseClient
    _config: Config
    _service: AioClientContext

    def __init__(
        self,
        config: Config,
    ) -> None:
        logger.debug('AWS S3 "%s" is configured', config.name)
        self._config = config

    @asynccontextmanager
    async def lease_blob(
        self,
        blob: str,
        lease_duration: int,
    ) -> AsyncGenerator[str, None]:
        # Skip if the blob doesn't exist
        if not await self._exists(blob):
            raise BlobNotFoundError(f'Blob "{blob}" not found')

        lease_path = self._lease_path(blob)

        # Ensure only one worker is updating the lease
        async with self._file_lock(lease_path):
            # Skip if the lease file already exists and is not expired
            if await self._exists(lease_path):
                try:
                    previous = LeaseModel.model_validate_json(
                        await self.download_blob(lease_path)
                    )
                    if previous.until > datetime.now(UTC):
                        raise LeaseAlreadyExistsError(
                            f'Lease for blob "{blob}" already exists'
                        )
                # Race condition, file has been removed by another worker, retry
                except BlobNotFoundError:
                    # Wait for a bit
                    await asyncio.sleep(0.1)
                    # Retry
                    async with self.lease_blob(
                        blob=blob,
                        lease_duration=lease_duration,
                    ) as lease_id:
                        yield lease_id
                    return

            # Create the lease file
            lease = LeaseModel(
                until=datetime.now(UTC) + timedelta(seconds=lease_duration)
            )
            lease_bytes = lease.model_dump_json().encode(self.encoding)
            await self.upload_blob(
                blob=lease_path,
                data=lease_bytes,
                length=len(lease_bytes),
                overwrite=True,
            )

        try:
            # Return the lease ID
            yield lease.lease_id

        finally:
            # Remove the lease file
            await self._remove(lease_path)

    @retry(
        retry=retry_if_exception_type(
            (EndpointConnectionError, ConnectionClosedError)
        ),  # Handle network-related errors
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
        # Skip if the blob exists and overwrite is not set
        if await self._exists(blob) and not overwrite:
            raise BlobAlreadyExistsError(f'Blob "{blob}" already exists')

        lease_path = self._lease_path(blob)

        # If the blob is not locked
        if not await self._exists(lease_path):
            if lease_id:
                raise LeaseNotFoundError(f'Lease for blob "{blob}" not found')

        # If the blob is locked
        else:
            # Confirm the lease ID
            try:
                lease = LeaseModel.model_validate_json(
                    await self.download_blob(lease_path)
                )
            # Race condition, file has been removed by another worker, retry
            except BlobNotFoundError:
                # Wait for a bit
                await asyncio.sleep(0.1)
                # Retry
                return await self.upload_blob(
                    blob=blob,
                    data=data,
                    lease_id=lease_id,
                    length=length,
                    overwrite=overwrite,
                )

            # Lease is expired
            if lease.until <= datetime.now(UTC):
                # Remove the lease file
                await self._remove(lease_path)

            # Lease is not expired
            elif lease.until > datetime.now(UTC):
                # Check if the lease ID is provided
                if not lease_id:
                    raise LeaseAlreadyExistsError(
                        "Lease ID is required to overwrite a blob with an existing lease"
                    )
                # Check the lease ID
                elif lease.lease_id != lease_id:
                    raise LeaseAlreadyExistsError(
                        "Provided lease ID does not match the existing"
                    )

        await self._client.put_object(
            Body=data,
            Bucket=self._config.name,
            ContentLength=length,
            Key=blob,
        )

    @retry(
        retry=retry_if_exception_type(
            (EndpointConnectionError, ConnectionClosedError)
        ),  # Handle network-related errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def download_blob(
        self,
        blob: str,
    ) -> str:
        try:
            response = await self._client.get_object(
                Bucket=self._config.name,
                Key=blob,
            )
            async with response["Body"] as stream:
                return (await stream.read()).decode(self.encoding)
        except ClientError as e:
            if e.response["Error"]["Code"] == "NoSuchKey":
                raise BlobNotFoundError(f'Blob "{blob}" not found') from e
            raise

    @retry(
        retry=retry_if_exception_type(
            (EndpointConnectionError, ConnectionClosedError)
        ),  # Handle network-related errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def list_blobs(
        self,
        starts_with: str | None = None,
    ) -> AsyncGenerator[tuple[str, int], None]:
        paginator = self._client.get_paginator("list_objects")
        async for result in paginator.paginate(
            Bucket=self._config.name,
            Prefix=starts_with or "",
        ):  # type: ignore
            for content in result.get("Contents", []):
                yield content["Key"], content["Size"]

    @retry(
        retry=retry_if_exception_type(
            (EndpointConnectionError, ConnectionClosedError)
        ),  # Handle network-related errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def delete_container(
        self,
    ) -> None:
        # First, delete all its content
        async for blob, _ in self.list_blobs():
            await self._remove(blob)
        # Then, delete the container
        await self._client.delete_bucket(Bucket=self._config.name)

    async def _remove(self, blob: str) -> None:
        """
        Remove a blob from the storage.

        If the blob does not exist, it is a no-op.
        """
        try:
            await self._client.delete_object(
                Bucket=self._config.name,
                Key=blob,
            )
        except ClientError as e:
            if e.response["Error"]["Code"] != "NoSuchKey":
                raise

    @asynccontextmanager
    async def _file_lock(
        self,
        blob: str,
    ) -> AsyncGenerator[None, None]:
        """
        Lock a blob for exclusive access.

        Algorithm is copied from `file_lock` in `resources.py` helper.
        """
        full_path = await path.abspath(blob)
        lock_file = f"{full_path}.lock"
        timeout = 60

        # Wait until the lock file is removed
        while await self._exists(lock_file):
            # Wait a bit to now overwhelm the web service
            await asyncio.sleep(0.1)

            try:
                # Check if the lock file has been there for too long
                if (datetime.now(UTC) - await self._getmtime(lock_file)) > timedelta(
                    seconds=timeout
                ):
                    # Run anyway, the initial worker may have crashed, and the other workers are waiting but *would* have to wait again because of the lock file timestamp update
                    break
            except BlobNotFoundError:
                # The lock file was removed, continue
                break

        # Create the empty lock file
        await self.upload_blob(
            blob=lock_file,
            data=b"",
            length=0,
            overwrite=True,
        )

        try:
            yield

        finally:
            # Remove the lock file
            await self._remove(lock_file)

    async def _getmtime(self, blob: str) -> datetime:
        """
        Get the last modified time of a blob.
        """
        try:
            response = await self._client.head_object(
                Bucket=self._config.name,
                Key=blob,
            )
            return response["LastModified"]
        except ClientError as e:
            if e.response["Error"]["Code"] == "404":
                raise BlobNotFoundError(f'Blob "{blob}" not found') from e
            raise

    async def _exists(self, blob: str) -> bool:
        """
        Test if a blob exists in the storage.
        """
        try:
            await self._client.head_object(
                Bucket=self._config.name,
                Key=blob,
            )
            return True
        except ClientError as e:
            if e.response["Error"]["Code"] == "404":
                return False
            raise

    def _lease_path(self, blob: str) -> str:
        """
        Get the path to the lease file.
        """
        return f"{blob}.lease"

    async def __aenter__(self) -> "AwsS3":
        client_kwargs = {
            "aws_access_key_id": self._config.access_key_id,
            "aws_secret_access_key": self._config.secret_access_key,
            "endpoint_url": self._config.endpoint,
            "service_name": "s3",
        }
        self._service = self._aio_session.create_client(**client_kwargs)
        self._client = await self._service.__aenter__()
        # Create if it does not exist
        try:
            get_session().create_client(**client_kwargs).create_bucket(
                Bucket=self._config.name
            )
            logger.debug('Created S3 bucket "%s"', self._config.name)
        except ClientError as e:
            if e.response["Error"]["Code"] != "BucketAlreadyOwnedByYou":
                raise
        return self

    async def __aexit__(self, *exc: Any) -> None:
        await self._service.__aexit__(*exc)
