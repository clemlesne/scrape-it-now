from azure.identity.aio import DefaultAzureCredential

from app.helpers.http import azure_transport
from app.helpers.threading import asyncio_cache


@asyncio_cache
async def credential() -> DefaultAzureCredential:
    return DefaultAzureCredential(
        # Performance
        transport=await azure_transport(),
    )
