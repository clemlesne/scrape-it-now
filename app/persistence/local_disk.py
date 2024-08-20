import asyncio, random, string
from contextlib import asynccontextmanager
from datetime import datetime, timedelta
from json import JSONDecodeError, load
from os import makedirs, path, remove
from typing import Any, AsyncGenerator
from uuid import uuid4

import aiosqlite
from pydantic import BaseModel, Field

from app.helpers.logging import logger
from app.helpers.resources import local_disk_cache_path
from app.models.message import Message
from app.persistence.iblob import (
    BlobAlreadyExistsError,
    BlobNotFoundError,
    IBlob,
    LeaseAlreadyExistsError,
)
from app.persistence.iqueue import IQueue, MessageNotFoundError

BLOB_DEFAULT_PATH = "scraping-results"


class BlobConfig(BaseModel):
    encoding: str = "utf-8"
    name: str
    path: str

    @property
    def working_path(self) -> str:
        return path.abspath(path.join(self.path, self.name))


class LeaseModel(BaseModel):
    lease_id: str = Field(default_factory=lambda: str(uuid4()))
    until: datetime


class LocalDiskBlob(IBlob):
    _config: BlobConfig

    def __init__(
        self,
        config: BlobConfig,
    ) -> None:
        logger.info(
            'Local Disk Blob "%s" is configured at "%s"',
            config.name,
            config.working_path,
        )
        logger.warning(
            "Local disk Blob is configured, it is not recommended for production. Prefer a redundant / high availability service (not like a computer / VM)."
        )
        self._config = config

    @asynccontextmanager
    async def lease(
        self,
        blob: str,
        lease_duration: int,
    ) -> AsyncGenerator[str, None]:
        # Skip if the blob doesn't exist
        if not path.isfile(path.join(self._config.working_path, blob)):
            raise BlobNotFoundError(f'Blob "{blob}" not found')

        lease_file = path.join(self._config.working_path, f"{blob}.lease")

        try:
            # Ensure only this worker accesses the lease
            async with self._file_lock(lease_file):
                # Skip if the lease file already exists and is not expired
                if path.isfile(lease_file):
                    try:
                        previous = LeaseModel.model_validate(
                            load(
                                open(
                                    file=lease_file,
                                    mode="rb",
                                )
                            )
                        )
                        if previous.until > datetime.now():
                            raise LeaseAlreadyExistsError(
                                f'Lease for blob "{blob}" already exists'
                            )
                    except (JSONDecodeError, FileNotFoundError):
                        pass

                # Create the lease file
                lease = LeaseModel(
                    until=datetime.now() + timedelta(seconds=lease_duration)
                )
                with open(
                    encoding=self.encoding,
                    file=lease_file,
                    mode="w",
                ) as f:
                    f.write(lease.model_dump_json())

            # Return the lease ID
            yield lease.lease_id

        finally:
            try:
                # Remove the lease file
                remove(lease_file)
            except FileNotFoundError:
                # Multiple workers might try to remove the lease file and the lock didn't prevent it -- we are on best effort
                pass

    async def upload_blob(
        self,
        blob: str,
        data: bytes,
        length: int,
        overwrite: bool,
        lease_id: str | None = None,
    ) -> None:
        # Skip if the blob exists and overwrite is not set
        if path.isfile(path.join(self._config.working_path, blob)) and not overwrite:
            raise BlobAlreadyExistsError(f'Blob "{blob}" already exists')

        # If a lease is provided, check if it exists
        if lease_id:
            lease_file = path.join(self._config.working_path, f"{blob}.lease")
            if path.isfile(lease_file):
                try:
                    lease = LeaseModel.model_validate(
                        load(
                            open(
                                file=lease_file,
                                mode="rb",
                            )
                        )
                    )
                    if lease.lease_id != lease_id:
                        raise LeaseAlreadyExistsError(
                            "Provided lease ID does not match the existing"
                        )
                except JSONDecodeError:
                    pass

        # Create the directory if it doesn't exist
        blob_path = path.abspath(path.join(self._config.working_path, blob))
        makedirs(path.dirname(blob_path), exist_ok=True)

        # Write the data to the file
        with open(
            file=blob_path,
            mode="wb",
        ) as f:
            f.write(data)

    async def download_blob(
        self,
        blob: str,
    ) -> str:
        blob_path = path.join(self._config.working_path, blob)
        # Skip if the blob doesn't exist
        if not path.isfile(blob_path):
            raise BlobNotFoundError(f'Blob "{blob}" not found')
        # Read the data from the file
        with open(
            encoding=self.encoding,
            file=blob_path,
            mode="r",
        ) as f:
            return f.read()

    @asynccontextmanager
    async def _file_lock(self, file_path: str) -> AsyncGenerator[None, None]:
        # Create the directory if it doesn't exist
        makedirs(path.dirname(path.abspath(file_path)), exist_ok=True)
        # Test if the file is locked
        lock_file = f"{file_path}.lock"
        while path.isfile(lock_file):
            await asyncio.sleep(0.1)
        try:
            # Create the empty lock file
            open(
                encoding=self.encoding,
                file=lock_file,
                mode="w",
            ).close()

            # Return to the caller
            yield

        finally:
            try:
                # Remove the lock file
                remove(lock_file)
            except FileNotFoundError:
                # Multiple workers might try to remove the lock file and the wait loop didn't prevent it -- we are on best effort
                pass

    async def __aenter__(self) -> "LocalDiskBlob":
        # Create the directory if it doesn't exist
        makedirs(path.dirname(self._config.working_path), exist_ok=True)
        return self

    async def __aexit__(self, *exc: Any) -> None:
        pass


class QueueConfig(BaseModel):
    name: str
    table: str = "queue"
    timeout: int = 30

    @property
    def db_path(self) -> str:
        return path.abspath(
            path.join(local_disk_cache_path(), "queues", f"{self.name}.db")
        )


class LocalDiskQueue(IQueue):
    _connection: aiosqlite.Connection
    _config: QueueConfig

    def __init__(
        self,
        config: QueueConfig,
    ) -> None:
        logger.info('Local Disk Queue "%s" is configured', config.name)
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

        async with self._use_connection() as connection:
            # Get messages that are visible
            async with connection.execute(
                f"""
                SELECT id, message, visibility_timeout, dequeue_count
                FROM {self._config.table}
                WHERE visibility_timeout < ?
                LIMIT ?
                """,
                (
                    datetime.now().isoformat(),
                    max_messages,
                ),
            ) as cursor:
                async for row in cursor:
                    delete_token = "".join(
                        random.choices(string.ascii_lowercase + string.digits, k=12)
                    )
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
            async with self._use_connection() as connection:
                # Update visibility timeout and delete token
                async with connection.execute(
                    f"""
                    UPDATE {self._config.table}
                    SET visibility_timeout = ?, delete_token = ?, dequeue_count = dequeue_count + 1
                    WHERE id = ? AND dequeue_count = ?
                    """,
                    (
                        (
                            datetime.now() + timedelta(seconds=visibility_timeout)
                        ).isoformat(),
                        message.delete_token,
                        int(message.message_id),
                        message.dequeue_count,
                    ),
                ) as cursor:
                    await connection.commit()
                    # If the message was not found, skip, it should has been deleted or picked by another worker
                    if cursor.rowcount == 0:
                        continue
            # Return the message
            yield message

    async def delete_message(
        self,
        message: Message,
    ) -> None:
        async with self._use_connection() as connection:
            # Delete message from the table
            async with connection.execute(
                f"""
                DELETE FROM {self._config.table}
                WHERE id = ? AND delete_token = ?
                """,
                (
                    int(message.message_id),
                    message.delete_token,
                ),
            ) as cursor:
                await connection.commit()
                # If the message was not found, raise an error
                if cursor.rowcount == 0:
                    raise MessageNotFoundError(
                        f'Message with id "{message.message_id}" not found'
                    )

    @asynccontextmanager
    async def _use_connection(self) -> AsyncGenerator[aiosqlite.Connection, None]:
        # Connect and return the connection
        async with aiosqlite.connect(
            database=self._config.db_path,
            timeout=self._config.timeout,  # Wait for 30 secs before giving up
        ) as connection:
            yield connection

    async def __aenter__(self) -> "LocalDiskQueue":
        file_path = self._config.db_path
        first_run = not path.isfile(file_path)

        # Skip if the database is already initialized
        if not first_run:
            return self

        # Create the directory if it doesn't exist
        makedirs(path.dirname(file_path), exist_ok=True)
        # Initialize the database
        async with aiosqlite.connect(
            database=file_path,
            timeout=self._config.timeout,  # Wait for 30 secs before giving up
        ) as connection:
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
            logger.info('Created Local Disk Queue "%s"', self._config.table)
            # Commit as other workers might be waiting for the table to be created
            await connection.commit()
        return self

    async def __aexit__(self, *exc: Any) -> None:
        pass
