import asyncio
import hashlib
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager
from datetime import UTC, datetime, timedelta
from functools import lru_cache
from os.path import dirname, join
from pathlib import Path

import click
from aiofiles import open  # noqa: A004
from aiofiles.os import makedirs, path, remove


def dir_tests(sub: str) -> str:
    """
    Get the absolute path to the tests folder.
    """
    return str(
        Path(__file__).parent.parent.parent.parent.joinpath("tests", sub).absolute()
    )


def dir_resources(sub: str) -> str:
    """
    Get the absolute path to the resources folder.
    """
    return str(Path(__file__).parent.parent.joinpath("resources", sub).absolute())


def scrape_container_name(job_name: str) -> str:
    """
    Get the container name for the job.
    """
    return f"{job_name}-scraping"


def scrape_queue_name(job_name: str) -> str:
    """
    Get the input queue name for the job.
    """
    return f"{job_name}-to-scrape"


def index_queue_name(job_name: str) -> str:
    """
    Get the output queue name for the job.
    """
    return f"{job_name}-to-chunk"


def index_index_name(job_name: str) -> str:
    """
    Get the index name for the job.
    """
    return job_name


@lru_cache(maxsize=512)
def hash_url(url: str) -> str:
    """
    Hash a URL to a unique identifier.
    """
    return hashlib.sha256(
        url.encode("utf-8"),
        usedforsecurity=False,
    ).hexdigest()


async def cache_dir() -> str:
    """
    Get the path to the cache directory.

    If the directory does not exist, it will be created.

    See: https://click.palletsprojects.com/en/8.1.x/api/#click.get_app_dir
    """
    # Resolve
    res = await path.abspath(click.get_app_dir("scrape-it-now"))
    # Create if not exists
    await makedirs(res, exist_ok=True)
    # Return
    return res


async def browsers_install_path() -> str:
    """
    Get the path to the browser executable.
    """
    return join(await cache_dir(), "browsers")


async def pandoc_install_path(
    version: str,
) -> str:
    """
    Get the path to the pandoc executable.
    """
    return join(await cache_dir(), "pandoc", version)


async def local_disk_cache_path() -> str:
    """
    Get the path to the local disk persistence.
    """
    return join(await cache_dir(), "local_disk")


@asynccontextmanager
async def file_lock(file_path: str, timeout: int = 60) -> AsyncGenerator[None, None]:  # noqa: ASYNC109
    """
    Lock a file for exclusive access.

    File path is built with `.lock` appended to the file path. Timeout is in seconds. If the folder does not exist, it will be created.
    """
    full_path = await path.abspath(file_path)
    lock_file = f"{full_path}.lock"

    # Create the directory if it doesn't exist
    await makedirs(dirname(full_path), exist_ok=True)

    # Wait until the lock file is removed
    while await path.exists(lock_file):
        # Wait a bit to now overwhelm the CPU
        await asyncio.sleep(0.1)

        try:
            # Check if the lock file has been there for too long
            if (
                datetime.now(UTC)
                - datetime.fromtimestamp(await path.getmtime(lock_file), UTC)
            ) > timedelta(seconds=timeout):
                # Run anyway, the initial worker may have crashed, and the other workers are waiting but *would* have to wait again because of the lock file timestamp update
                break
        except FileNotFoundError:
            # The lock file was removed, continue
            break

    # Create the empty lock file
    async with open(
        encoding="utf-8",
        file=lock_file,
        mode="a",
    ) as f:
        await f.write("a")

    try:
        # Return to the caller
        yield

    finally:
        try:
            # Remove the lock file
            await remove(lock_file)
        except FileNotFoundError:
            pass
