import random, string
from datetime import timedelta
from os import environ as env

import pytest
from playwright.async_api import ViewportSize, async_playwright

from app.helpers.logging import logger
from app.helpers.persistence import blob_client, queue_client
from app.helpers.resources import browsers_install_path, hash_url
from app.models.scraped import ScrapedQueuedModel
from app.persistence.iblob import Provider as BlobProvider
from app.persistence.iqueue import Provider as QueueProvider
from app.scrape import SCRAPED_PREFIX, _get_broswer, _install_browser, _process_one


@pytest.mark.parametrize(
    "queue_provider",
    [
        QueueProvider.AZURE_QUEUE_STORAGE,
        QueueProvider.LOCAL_DISK,
    ],
    ids=lambda x: x.value,
)
@pytest.mark.parametrize(
    "blob_provider",
    [
        BlobProvider.AZURE_BLOB_STORAGE,
        BlobProvider.LOCAL_DISK,
    ],
    ids=lambda x: x.value,
)
@pytest.mark.parametrize(
    "website",
    [
        "azuresdkdocs.html",
        "reflex.html",
    ],
    ids=lambda x: x,
)
@pytest.mark.asyncio(scope="session")
async def test_single_page(
    blob_provider: BlobProvider,
    queue_provider: QueueProvider,
    website: str,
) -> None:
    # Init values
    in_queue_name = _random_name()
    out_queue_name = _random_name()
    blob_name = _random_name()
    item = ScrapedQueuedModel(
        depth=0,
        referrer="https://google.com",
        url=f"http://localhost:8000/{website}",
    )

    # Init Playwright context
    async with async_playwright() as p:
        browser_type = p.chromium

        # Make sure the browser is installed
        _install_browser(browser_type)

        # Launch the browser
        browser = await _get_broswer(browser_type)

        async with queue_client(
            azure_storage_connection_string=env["AZURE_STORAGE_CONNECTION_STRING"],
            provider=queue_provider,
            queue=in_queue_name,
        ) as in_queue:
            async with queue_client(
                azure_storage_connection_string=env["AZURE_STORAGE_CONNECTION_STRING"],
                provider=queue_provider,
                queue=out_queue_name,
            ) as out_queue:
                async with blob_client(
                    azure_storage_connection_string=env[
                        "AZURE_STORAGE_CONNECTION_STRING"
                    ],
                    container=blob_name,
                    path="scraping-test",
                    provider=blob_provider,
                ) as blob:
                    try:
                        # Process the item
                        processed, queued, network_used_mb = await _process_one(
                            blob=blob,
                            browser=browser,
                            cache_refresh=timedelta(hours=1),
                            current_item=item,
                            in_queue=in_queue,
                            max_depth=1,
                            out_queue=out_queue,
                            timezones=["Europe/Moscow"],
                            user_agents=[
                                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
                            ],
                            viewports=[ViewportSize(width=1920, height=1080)],
                            whitelist={},
                        )

                        # Debug
                        logger.info("Reported network used: %f", network_used_mb)
                        logger.info("Reported processed: %i", processed)
                        logger.info("Reported queued: %i", queued)

                        # Check results are coherent
                        assert network_used_mb > 0.0, "Should have used network"
                        assert processed == 1, "Different number of processed items"
                        assert queued > 0, "Should have queued items"

                        # Check out queue (processed) items
                        async for message in out_queue.receive_messages(
                            max_messages=processed,
                            visibility_timeout=5,
                        ):
                            blob_name = f"{SCRAPED_PREFIX}/{hash_url(item.url)}.json"
                            assert (
                                message.content == blob_name
                            ), "Content should be the blob name to the processed item"

                        # Check in queue (queued) items
                        async for message in in_queue.receive_messages(
                            max_messages=queued,
                            visibility_timeout=5,
                        ):
                            child_item = ScrapedQueuedModel.model_validate_json(
                                message.content
                            )
                            assert (
                                child_item.depth == item.depth + 1
                            ), "Depth should be the processed URL + 1"
                            assert (
                                child_item.referrer == item.url
                            ), "Referer should be the processed URL"
                            assert (
                                child_item.url != item.url
                            ), "URL should be different from the processed URL"

                    finally:
                        # Clean up
                        await blob.delete_container()
                        await in_queue.delete_queue()
                        await out_queue.delete_queue()


def _random_name() -> str:
    """
    Generate a random name of 32 characters.

    All lowercase letters and digits are used.
    """
    return "".join(
        random.choice(string.ascii_lowercase + string.digits) for _ in range(32)
    )
