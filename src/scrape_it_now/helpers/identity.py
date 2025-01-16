from collections.abc import Awaitable, Callable

from azure.identity.aio import DefaultAzureCredential, get_bearer_token_provider

from scrape_it_now.helpers.cache import lru_acache
from scrape_it_now.helpers.http import azure_transport


@lru_acache()
async def credential() -> DefaultAzureCredential:
    return DefaultAzureCredential(
        # Performance
        transport=await azure_transport(),
    )


async def token(service: str) -> Callable[[], Awaitable[str]]:
    return get_bearer_token_provider(await credential(), service)
