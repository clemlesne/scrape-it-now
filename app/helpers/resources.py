import hashlib
from os import makedirs, path
from pathlib import Path

import click


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


def cache_dir() -> str:
    """
    Get the path to the cache directory.

    See: https://click.palletsprojects.com/en/8.1.x/api/#click.get_app_dir
    """
    res = path.abspath(click.get_app_dir("scrape-it-now"))
    # Create if not exists
    if not path.exists(res):
        makedirs(res)
    return res


def browsers_install_path() -> str:
    """
    Get the path to the browser executable.
    """
    return path.join(cache_dir(), "browsers")


def local_disk_cache_path() -> str:
    """
    Get the path to the local disk persistance.
    """
    return path.join(cache_dir(), "local_disk")
