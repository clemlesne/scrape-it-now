from aiohttp import (
    AsyncResolver,
    ClientSession,
    ClientTimeout,
    DummyCookieJar,
    TCPConnector,
)
from azure.core.pipeline.transport._aiohttp import AioHttpTransport

from scrape_it_now.helpers.threading import asyncio_cache

_cookie_jar: DummyCookieJar | None = None


async def _aiohttp_cookie_jar() -> DummyCookieJar:
    """
    Create a cookie jar mock for AIOHTTP.

    Object is cached for performance.

    Returns a `DummyCookieJar` instance.
    """
    global _cookie_jar  # noqa: PLW0603
    if not _cookie_jar:
        _cookie_jar = DummyCookieJar()
    return _cookie_jar


@asyncio_cache
async def aiohttp_session() -> ClientSession:
    """
    Create an AIOHTTP session.

    Object is cached for performance.

    Returns a `ClientSession` instance.
    """
    return ClientSession(
        # Same config as default in the SDK
        auto_decompress=False,
        cookie_jar=await _aiohttp_cookie_jar(),
        trust_env=True,
        # Performance
        connector=TCPConnector(resolver=AsyncResolver()),
        # Reliability
        timeout=ClientTimeout(
            connect=5,
            total=60,
        ),
    )


@asyncio_cache
async def azure_transport() -> AioHttpTransport:
    """
    Create an AIOHTTP transport, for Azure SDK.

    Object is cached for performance.

    Returns a `AioHttpTransport` instance.
    """
    # Azure SDK implements its own retry logic (e.g. for Cosmos DB), so we don't add it here
    return AioHttpTransport(
        session_owner=False,  # Restrict the SDK to close the client after usage
        session=await aiohttp_session(),
    )
