import asyncio, random, string
from os import environ as env
from uuid import uuid4

import pytest

from app.helpers.logging import logger
from app.helpers.persistence import blob_client
from app.persistence.iblob import (
    BlobAlreadyExistsError,
    BlobNotFoundError,
    LeaseAlreadyExistsError,
    LeaseNotFoundError,
    Provider as BlobProvider,
)


@pytest.mark.parametrize(
    "provider",
    [
        BlobProvider.AZURE_BLOB_STORAGE,
        BlobProvider.LOCAL_DISK,
    ],
    ids=lambda x: x.value,
)
@pytest.mark.asyncio(scope="session")
@pytest.mark.repeat(10)  # Catch multi-threading and concurrency issues
async def test_acid(provider: BlobProvider) -> None:
    # Init values
    blob_content = _random_content()
    blob_name = _random_name()
    container_name = _random_name()

    # Debug
    logger.info("Container name: %s", container_name)
    logger.info("Blob name: %s", blob_name)

    # Init client
    async with blob_client(
        azure_storage_connection_string=env["AZURE_STORAGE_CONNECTION_STRING"],
        container=container_name,
        path="scraping-test",
        provider=provider,
    ) as client:
        try:
            test_content_bytes = blob_content.encode(client.encoding)

            # Check not exists
            try:
                await client.download_blob(blob_name)
                raise AssertionError("Blob should not exist")
            except BlobNotFoundError:
                pass

            # Upload test content
            await client.upload_blob(
                blob=blob_name,
                data=test_content_bytes,
                length=len(test_content_bytes),
                overwrite=False,
            )

            # Check uploaded and downloaded content are the same
            try:
                # Get blob content
                download_content = await client.download_blob(blob_name)
                # Debug
                logger.info("Downloaded content: %s", download_content)
                assert download_content == blob_content, "Content mismatch"
            except BlobNotFoundError as e:
                raise AssertionError("Blob should exist") from e

            # Check raise error on overwrite
            try:
                await client.upload_blob(
                    blob=blob_name,
                    data=test_content_bytes,
                    length=len(test_content_bytes),
                    overwrite=False,
                )
                raise AssertionError("Should raise error with overwrite disabled")
            except BlobAlreadyExistsError:
                pass

            # Check overwrite
            await client.upload_blob(
                blob=blob_name,
                data=test_content_bytes,
                length=len(test_content_bytes),
                overwrite=True,
            )

        finally:
            # Clean up
            await client.delete_container()


@pytest.mark.parametrize(
    "provider",
    [
        BlobProvider.AZURE_BLOB_STORAGE,
        BlobProvider.LOCAL_DISK,
    ],
    ids=lambda x: x.value,
)
@pytest.mark.asyncio(scope="session")
@pytest.mark.repeat(10)  # Catch multi-threading and concurrency issues
async def test_lease(provider: BlobProvider) -> None:
    # Init values
    blob_name = _random_name()
    container_name = _random_name()
    first_content = _random_content()

    # Debug
    logger.info("Blob name: %s", blob_name)
    logger.info("Container name: %s", container_name)

    # Init client
    async with blob_client(
        azure_storage_connection_string=env["AZURE_STORAGE_CONNECTION_STRING"],
        container=container_name,
        path="scraping-test",
        provider=provider,
    ) as client:
        try:
            # Write empty blob
            await client.upload_blob(
                blob=blob_name,
                data=b"",
                length=0,
                overwrite=False,
            )

            # Check raise with wrong lease ID without lease
            with pytest.raises(LeaseNotFoundError):
                await client.upload_blob(
                    blob=blob_name,
                    data=first_content.encode(client.encoding),
                    lease_id=str(uuid4()),  # Wrong lease ID
                    length=len(first_content),
                    overwrite=True,
                )
                raise AssertionError(
                    "Should raise error with wrong lease ID without lease"
                )

            # Start lease
            async with client.lease_blob(
                blob=blob_name,
                lease_duration=15,  # 15 secs
            ) as lease_id:

                # Check raise error on double lease with the first non expired
                with pytest.raises(LeaseAlreadyExistsError):
                    async with client.lease_blob(
                        blob=blob_name,
                        lease_duration=15,  # 15 secs
                    ) as lease_id:
                        raise AssertionError(
                            "Should raise error on double lease with the first non expired"
                        )

                second_content_bytes = _random_content().encode(client.encoding)

                # Check raise error without lease ID
                with pytest.raises(LeaseAlreadyExistsError):
                    await client.upload_blob(
                        blob=blob_name,
                        data=second_content_bytes,
                        length=len(second_content_bytes),
                        overwrite=True,
                    )
                    raise AssertionError("Should raise error without lease ID")

                # Check raise error with wrong lease ID
                with pytest.raises(LeaseAlreadyExistsError):
                    await client.upload_blob(
                        blob=blob_name,
                        data=second_content_bytes,
                        lease_id=str(uuid4()),  # Wrong lease ID
                        length=len(second_content_bytes),
                        overwrite=True,
                    )
                    raise AssertionError("Should raise error with wrong lease ID")

                # Check upload with correct lease ID
                await client.upload_blob(
                    blob=blob_name,
                    data=second_content_bytes,
                    lease_id=lease_id,
                    length=len(second_content_bytes),
                    overwrite=True,
                )

            third_content_bytes = _random_content().encode(client.encoding)

            # Check raise error with wrong lease ID without lease
            with pytest.raises(LeaseNotFoundError):
                await client.upload_blob(
                    blob=blob_name,
                    data=third_content_bytes,
                    lease_id=str(uuid4()),  # Wrong lease ID
                    length=len(third_content_bytes),
                    overwrite=True,
                )
                raise AssertionError(
                    "Should raise error with wrong lease ID without lease"
                )

            # Check overwrite without lease ID
            await client.upload_blob(
                blob=blob_name,
                data=third_content_bytes,
                length=len(third_content_bytes),
                overwrite=True,
            )

            # Check open a new lease
            async with client.lease_blob(
                blob=blob_name,
                lease_duration=15,  # 15 secs
            ) as lease_id:
                fourth_content_bytes = _random_content().encode(client.encoding)

                # Check overwrite with correct lease ID
                await client.upload_blob(
                    blob=blob_name,
                    data=fourth_content_bytes,
                    lease_id=lease_id,
                    length=len(fourth_content_bytes),
                    overwrite=True,
                )

        finally:
            # Clean up
            await client.delete_container()


@pytest.mark.parametrize(
    "provider",
    [
        BlobProvider.AZURE_BLOB_STORAGE,
        BlobProvider.LOCAL_DISK,
    ],
    ids=lambda x: x.value,
)
@pytest.mark.asyncio(scope="session")
@pytest.mark.repeat(5)  # Catch multi-threading and concurrency issues
async def test_upload_many(provider: BlobProvider) -> None:
    # Init values
    container_name = _random_name()

    # Build blobs
    blobs: list[tuple[str, str]] = []
    for _ in range(100):
        blob_name = _random_name()
        blob_content = _random_content()
        blobs.append((blob_name, blob_content))

    # Debug
    logger.info("Container name: %s", container_name)

    # Init client
    async with blob_client(
        azure_storage_connection_string=env["AZURE_STORAGE_CONNECTION_STRING"],
        container=container_name,
        path="scraping-test",
        provider=provider,
    ) as client:
        try:
            # Upload blobs
            tasks = [
                client.upload_blob(
                    blob=name,
                    data=content.encode(client.encoding),
                    length=len(content.encode(client.encoding)),
                    overwrite=False,
                )
                for name, content in blobs
            ]
            await asyncio.gather(*tasks)

            # Check blobs content
            async def _validate(
                name: str,
                original_content: str,
            ) -> None:
                download_content = await client.download_blob(name)
                assert download_content == original_content, "Content mismatch"

            tasks = [_validate(name, content) for name, content in blobs]
            await asyncio.gather(*tasks)

        finally:
            # Clean up
            await client.delete_container()


def _random_name() -> str:
    return "".join(
        random.choice(string.ascii_lowercase + string.digits) for _ in range(32)
    )


def _random_content() -> str:
    return "".join(
        random.choice(string.printable) for _ in range(random.randint(1, 512))
    )
