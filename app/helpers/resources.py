import hashlib, os
from os import path
from pathlib import Path


def resources_dir(folder: str) -> str:
    """
    Get the absolute path to the resources folder.
    """
    return str(
        Path(
            path.join(
                os.path.abspath(os.getcwd()),
                "resources",
                folder,
            )
        )
        .resolve()
        .absolute()
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
        url.encode(),
        usedforsecurity=False,
    ).hexdigest()
