import asyncio
from collections.abc import Awaitable, Callable
from functools import wraps
from os import cpu_count
from threading import Thread, current_thread

from structlog.contextvars import bind_contextvars

from scrape_it_now.helpers.logging import logger

DEFAULT_WORKERS_COUNT = int((cpu_count() or 4) / 2)


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
            args=(_worker_wrapper(func, **kwargs),),
            daemon=True,
            name=f"{name}-{i}",
            target=asyncio.run,
        )
        for i in range(count)
    ]

    # Run
    for thread in threads:
        thread.start()
    logger.debug("Started %i workers", len(threads))

    # Wait
    try:
        for thread in threads:
            thread.join()
    except KeyboardInterrupt:
        pass


async def _worker_wrapper(func: Callable[..., Awaitable], **kwargs) -> None:
    # Enhance logging for each worker
    bind_contextvars(
        # Calling it "process" because it's the vulgarized term in the CLI options
        process=current_thread().name,
    )
    # Run the function
    await func(**kwargs)


def asyncio_cache(func):
    """
    Cache the result of an async function.

    Cache key is composed of the loop ID, args and kwargs.
    """
    cache = {}

    @wraps(func)
    async def wrapper(*args, **kwargs):
        loop_id = id(asyncio.get_event_loop())
        key = (loop_id, args, frozenset(kwargs.items()))
        if key in cache:
            return cache[key]
        result = await func(*args, **kwargs)
        cache[key] = result
        return result

    return wrapper
