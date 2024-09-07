import hashlib
from os.path import join
from pathlib import Path

import click
from aiofiles.os import makedirs, path


def dir_tests(sub: str) -> str:
    """
    Get the absolute path to the tests folder.
    """
    return str(Path(__file__).parent.parent.parent.joinpath("tests", sub).absolute())


def dir_resources(sub: str) -> str:
    """
    Get the absolute path to the resources folder.
    """
    return str(
        Path(__file__).parent.parent.parent.joinpath("resources", sub).absolute()
    )


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

    See: https://click.palletsprojects.com/en/8.1.x/api/#click.get_app_dir
    """
    res = await path.abspath(click.get_app_dir("scrape-it-now"))
    # Create if not exists
    if not await path.exists(res):
        await makedirs(res)
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
