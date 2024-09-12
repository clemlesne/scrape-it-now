import asyncio
from os.path import join
from pathlib import Path

from aiofiles.os import path

from app.helpers.resources import file_lock


async def test_lock_file_exists(tmp_path: Path) -> None:
    """
    Test that the lock file is created.
    """
    tmp_file = join(tmp_path, "dummy")
    async with file_lock(str(tmp_file)):
        assert await path.exists(f"{await path.abspath(tmp_file)}.lock")


async def test_lock_file_removed(tmp_path: Path) -> None:
    """
    Test that the lock file is removed after the context manager exits.
    """
    tmp_file = join(tmp_path, "dummy")
    async with file_lock(str(tmp_file)):
        pass

    assert not await path.exists(f"{await path.abspath(tmp_file)}.lock")


async def test_lock_path_released(tmp_path: Path) -> None:
    """
    Test tat the lock can be acquired again after the context manager exits.
    """
    async with asyncio.timeout(5):
        async with file_lock(str(tmp_path)):
            pass

    async with asyncio.timeout(5):
        async with file_lock(str(tmp_path)):
            pass


async def test_lock_path_concurrent_simple(tmp_path: Path) -> None:
    """
    Test that the lock cannot be acquired concurrently before the configured timeout.
    """
    async with file_lock(str(tmp_path)):
        try:
            async with asyncio.timeout(5):
                async with file_lock(
                    str(tmp_path),
                    timeout=10,
                ):
                    raise AssertionError("Should not be able to acquire lock")
        except TimeoutError:
            pass


async def test_lock_path_concurrent_timeout(tmp_path: Path) -> None:
    """
    Test that the lock can be acquired concurrently after the configured timeout.
    """
    async with file_lock(str(tmp_path)):
        try:
            async with asyncio.timeout(10):
                async with file_lock(
                    str(tmp_path),
                    timeout=5,
                ):
                    pass
        except TimeoutError:
            raise AssertionError("Should be able to acquire lock")
