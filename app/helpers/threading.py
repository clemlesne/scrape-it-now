import asyncio
from collections.abc import Awaitable, Callable
from functools import wraps
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
