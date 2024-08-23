import asyncio
from collections.abc import Awaitable, Callable
from threading import Thread

from app.helpers.logging import logger


def run_workers(
    count: int,
    func: Callable[..., Awaitable],
    name: str,
    **kwargs,
) -> None:
    # Start the tasks
    threads: list[Thread] = []
    for i in range(count):
        t = Thread(
            args=(func(**kwargs),),
            daemon=True,
            name=f"{name}-{i}",
            target=asyncio.run,
        )
        t.start()
        threads.append(t)

    # Inform user
    logger.info("%i workers started", count)

    # Wait for all workers to finish
    for t in threads:
        t.join()
