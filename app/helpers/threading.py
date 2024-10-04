import asyncio
from collections.abc import Awaitable, Callable
from os import cpu_count
from threading import Thread

from app.helpers.logging import logger


def run_workers(
    count: int,
    func: Callable[..., Awaitable],
    name: str,
    **kwargs,
) -> None:
    # Warn for performance issues
    if count > int(cpu_count() or 2):
        logger.warning(
            "The number of workers (%i) is higher than the number of CPU cores (%i), this may cause performance issues",
            count,
            cpu_count(),
        )

    # Build the threads
    threads: list[Thread] = [
        Thread(
            args=(func(**kwargs),),
            name=f"{name}-{i}",
            target=asyncio.run,
        )
        for i in range(count)
    ]

    # Run
    for thread in threads:
        thread.start()

    # Wait
    for thread in threads:
        thread.join()
