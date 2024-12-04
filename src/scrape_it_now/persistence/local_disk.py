import asyncio
import random
import string
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager
from datetime import UTC, datetime, timedelta
from json import JSONDecodeError, loads
from os import walk
from os.path import dirname, join
from typing import Any
from uuid import uuid4

import aiosqlite
from aiofiles import open  # noqa: A004
from aiofiles.os import makedirs, path, remove, rmdir
from pydantic import BaseModel, Field

from scrape_it_now.helpers.logging import logger
from scrape_it_now.helpers.resources import file_lock, local_disk_cache_path
from scrape_it_now.models.message import Message
from scrape_it_now.persistence.iblob import (
    BlobAlreadyExistsError,
    BlobNotFoundError,
    IBlob,
    LeaseAlreadyExistsError,
    LeaseNotFoundError,
)
from scrape_it_now.persistence.iqueue import IQueue, MessageNotFoundError

BLOB_DEFAULT_PATH = "scraping-results"


class BlobConfig(BaseModel):
    name: str
    path: str

    async def working_path(self) -> str:
        return await path.abspath(join(self.path, self.name))


class LeaseModel(BaseModel):
    lease_id: str = Field(default_factory=lambda: str(uuid4()))
    until: datetime


class LocalDiskBlob(IBlob):
    _config: BlobConfig

    def __init__(
        self,
        config: BlobConfig,
    ) -> None:
        logger.debug('Local Disk Blob "%s" is configured', config.name)
        logger.warning(
            "Local disk Blob is configured, it is not recommended for production. Prefer a redundant / high availability service (not like a computer / VM)."
        )
        self._config = config

    @asynccontextmanager
    async def lease_blob(
        self,
        blob: str,
        lease_duration: int,
    ) -> AsyncGenerator[str, None]:
        # Skip if the blob doesn't exist
        working_path = await self._config.working_path()
        if not await path.exists(join(working_path, blob)):
            raise BlobNotFoundError(f'Blob "{blob}" not found')

        lease_file = await self._lease_path(blob)

        # Ensure only one worker is updating the lease
        async with file_lock(lease_file):
            # Skip if the lease file already exists and is not expired
            if await path.exists(lease_file):
                try:
                    async with open(
                        file=lease_file,
                        mode="rb",
                    ) as f:
                        previous = LeaseModel.model_validate(
                            loads((await f.read()).decode(self.encoding))
                        )
                    if previous.until > datetime.now(UTC):
                        raise LeaseAlreadyExistsError(
                            f'Lease for blob "{blob}" already exists'
                        )
                except (
                    FileNotFoundError,
                    JSONDecodeError,
                ):  # Race condition, file has been removed by another worker, retry
                    # Wait for a bit
                    await asyncio.sleep(0.1)
                    # Retry
                    async with self.lease_blob(
                        blob=blob,
                        lease_duration=lease_duration,
                    ) as retry_id:
                        yield retry_id
                    return

            # Create the lease file
            lease = LeaseModel(
                until=datetime.now(UTC) + timedelta(seconds=lease_duration)
            )
            async with open(
                file=lease_file,
                mode="wb",
            ) as f:
                await f.write(lease.model_dump_json().encode(self.encoding))

        try:
            # Return the lease ID
            yield lease.lease_id

        finally:
            try:
                # Remove the lease file
                await remove(lease_file)
            except FileNotFoundError:
                pass

    async def upload_blob(
        self,
        blob: str,
        data: bytes,
        length: int,
        overwrite: bool,
        lease_id: str | None = None,
    ) -> None:
        working_path = await self._config.working_path()
        blob_path = join(working_path, blob)

        # Skip if the blob exists and overwrite is not set
        if await path.exists(blob_path) and not overwrite:
            raise BlobAlreadyExistsError(f'Blob "{blob}" already exists')

        lease_file = await self._lease_path(blob)

        # If the blob is not locked
        if not await path.exists(lease_file):
            if lease_id:  # But the lease ID is provided
                raise LeaseNotFoundError(f'Lease for blob "{blob}" not found')

        else:  # If the blob is locked
            try:
                # Confirm the lease ID
                async with open(
                    file=lease_file,
                    mode="rb",
                ) as f:
                    lease = LeaseModel.model_validate(
                        loads((await f.read()).decode(self.encoding))
                    )
            except (
                FileNotFoundError
            ):  # Race condition, file has been removed by another worker, retry
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
                try:
                    # Remove the lease file
                    await remove(lease_file)
                except FileNotFoundError:
                    pass

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

        # Create the directory if it doesn't exist
        await makedirs(dirname(blob_path), exist_ok=True)

        # Write the data to the file
        async with open(
            file=blob_path,
            mode="wb",
        ) as f:
            await f.write(data)

    async def download_blob(
        self,
        blob: str,
    ) -> str:
        working_path = await self._config.working_path()
        blob_path = join(working_path, blob)

        # Skip if the blob doesn't exist
        if not await path.exists(blob_path):
            raise BlobNotFoundError(f'Blob "{blob}" not found')

        # Read the data from the file
        async with open(
            file=blob_path,
            mode="rb",
        ) as f:
            return (await f.read()).decode(self.encoding)

    async def list_blobs(
        self,
        starts_with: str | None = None,
    ) -> AsyncGenerator[tuple[str, int], None]:
        working_path = await self._config.working_path()

        # List all files in the working path
        for _, _, file_names in walk(top=working_path):
            for file_name in file_names:
                if starts_with is None or file_name.startswith(starts_with):
                    yield (file_name, 0)

    async def delete_container(
        self,
    ) -> None:
        working_path = await self._config.working_path()

        # Delete iteratively all files in the working path
        for root_name, dir_names, file_names in walk(
            top=working_path,
            topdown=False,
        ):
            for file_name in file_names:
                await remove(join(root_name, file_name))
            for dir_name in dir_names:
                await rmdir(join(root_name, dir_name))
        logger.info('Deleted Local Disk Blob "%s"', self._config.name)

    async def _lease_path(self, blob: str) -> str:
        working_path = await self._config.working_path()
        return await path.abspath(join(working_path, f"{blob}.lease"))

    async def __aenter__(self) -> "LocalDiskBlob":
        return self

    async def __aexit__(self, *exc: Any) -> None:
        pass


class QueueConfig(BaseModel):
    name: str
    table: str = "queue"
    timeout: int = 30

    async def db_path(self) -> str:
        return await path.abspath(
            join(await local_disk_cache_path(), "queues", f"{self.name}.db")
        )


class LocalDiskQueue(IQueue):
    _config: QueueConfig

    def __init__(
        self,
        config: QueueConfig,
    ) -> None:
        logger.debug('Local Disk Queue "%s" is configured', config.name)
        logger.warning(
            "Local Disk Queue is configured, it is not recommended for production. Prefer a redundant / high availability service (not like a computer / VM)."
        )
        self._config = config

    async def send_message(
        self,
        message: str,
    ) -> None:
        async with self._use_connection() as connection:
            # Insert message into the table
            await connection.execute(
                f"""
                INSERT INTO {self._config.table} (message)
                VALUES (?)
                """,
                (message,),
            )
            await connection.commit()

    async def receive_messages(
        self,
        max_messages: int,
        visibility_timeout: int,
    ) -> AsyncGenerator[Message, None]:
        # Load messages
        messages: list[Message] = []

        logger.debug('Processing new messages from "%s"', self._config.name)

        # Fetch all visible messages
        async with (
            self._use_connection() as connection,
            connection.execute(
                f"""
                SELECT id, message, visibility_timeout, dequeue_count
                FROM {self._config.table}
                WHERE visibility_timeout < ?
                LIMIT ?
                """,
                (
                    datetime.now(UTC).isoformat(),
                    max_messages,
                ),
            ) as cursor,
        ):
            async for row in cursor:
                delete_token = "".join(
                    random.choices(string.ascii_lowercase + string.digits, k=12)
                )
                # Convert to Message
                messages.append(
                    Message(
                        content=row[1],
                        delete_token=delete_token,
                        message_id=str(row[0]),
                        visibility_timeout=row[2],
                        dequeue_count=row[3],
                    )
                )

        # Yield messages
        for message in messages:
            # Confirm message has not been picked by another worker
            async with (
                self._use_connection() as connection,
                connection.execute(
                    f"""
                    UPDATE {self._config.table}
                    SET visibility_timeout = ?, delete_token = ?, dequeue_count = dequeue_count + 1
                    WHERE id = ? AND dequeue_count = ?
                    """,
                    (
                        (
                            datetime.now(UTC) + timedelta(seconds=visibility_timeout)
                        ).isoformat(),
                        message.delete_token,
                        int(message.message_id),
                        message.dequeue_count,
                    ),
                ) as cursor,
            ):
                await connection.commit()
                # If message not updated, race condition, skip, it should has been deleted or picked by another worker
                if cursor.rowcount == 0:
                    continue

            logger.debug('Received "%s"', message.content)
            # Return the message
            yield message

    async def delete_message(
        self,
        message: Message,
    ) -> None:
        async with (
            self._use_connection() as connection,
            connection.execute(
                f"""
                DELETE FROM {self._config.table}
                WHERE id = ? AND delete_token = ?
                """,
                (
                    int(message.message_id),
                    message.delete_token,
                ),
            ) as cursor,
        ):
            await connection.commit()
            # If the message was not found, raise an error
            if cursor.rowcount == 0:
                raise MessageNotFoundError(
                    f'Message with id "{message.message_id}" not found'
                )

    async def create_queue(
        self,
    ) -> bool:
        file_path = await self._config.db_path()
        first_run = not await path.exists(file_path)

        # Skip if the database is already initialized
        if not first_run:
            return False

        # Create the directory if it doesn't exist
        await makedirs(dirname(file_path), exist_ok=True)

        # Initialize the database
        async with aiosqlite.connect(
            database=file_path,
            timeout=self._config.timeout,  # Wait for 30 secs before giving up
        ) as connection:
            # Enable WAL mode to allow multiple readers and one writer
            await connection.execute(
                """
                    PRAGMA journal_mode = WAL2
                    """
            )

            # Create the table
            await connection.execute(
                f"""
                    CREATE TABLE IF NOT EXISTS {self._config.table} (
                        delete_token TEXT DEFAULT NULL,
                        dequeue_count INTEGER DEFAULT 0,
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        message TEXT NOT NULL,
                        visibility_timeout DATETIME DEFAULT CURRENT_TIMESTAMP
                    )
                    """
            )
            logger.debug('Created Local Disk Queue "%s"', self._config.table)

            # Commit as other workers might be waiting for the table to be created
            await connection.commit()

        return True

    async def delete_queue(
        self,
    ) -> None:
        await remove(await self._config.db_path())
        logger.info('Deleted Local Disk Queue "%s"', self._config.name)

    @asynccontextmanager
    async def _use_connection(self) -> AsyncGenerator[aiosqlite.Connection, None]:
        # Connect and return the connection
        async with aiosqlite.connect(
            database=await self._config.db_path(),
            timeout=self._config.timeout,  # Wait for 30 secs before giving up
        ) as connection:
            yield connection

    async def __aenter__(self) -> "LocalDiskQueue":
        await self.create_queue()
        return self

    async def __aexit__(self, *exc: Any) -> None:
        pass
