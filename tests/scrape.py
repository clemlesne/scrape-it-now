import asyncio
import random
import string
from datetime import datetime, timedelta
from os import environ as env, walk
from os.path import join
from uuid import uuid4
from zipfile import ZipFile

import pytest
from aiofiles import open
from aiofiles.os import remove, rmdir
from isodate import UTC
from playwright.async_api import Browser, ViewportSize

from app.helpers.persistence import blob_client, queue_client
from app.helpers.resources import dir_tests
from app.models.scraped import ScrapedImageModel, ScrapedQueuedModel
from app.persistence.iblob import (
    Provider as BlobProvider,
)
from app.persistence.iqueue import Provider as QueueProvider
from app.scrape import BROWSER_TIMEOUT_MS, _queue, _scrape_page

DEFAULT_TIMEZONE = "Europe/Moscow"
DEFAULT_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
DEFAULT_VIEWPORT = ViewportSize(width=1920, height=1080)
LOCALHOST_URL = "http://localhost:8000"


@pytest.mark.parametrize(
    "website",
    [
        "azure",
        "bing",
        "craigslist",
        "google",
        "hackernews",
        "lemonde",
        "nytimes",
        "servicepublic",
    ],
    ids=lambda x: x,
)
async def test_scrape_page_website(
    website: str,
    browser: Browser,
) -> None:
    """
    Test a real website page against the expected Markdown content.

    Expected Markdown content is stored in the `tests/websites` directory. Text content is generated manually a first time using this same application.
    """
    website_path = join(dir_tests("websites"), website)

    try:
        # Unzip the website content
        with ZipFile(
            file=join(dir_tests("websites"), f"{website}.zip"),
            mode="r",
        ) as z:
            z.extractall(website_path)

        # Init values
        item = ScrapedQueuedModel(
            depth=0,
            referrer="https://google.com",
            url=f"{LOCALHOST_URL}/{website}/{website}.html",
        )

        # Process the item
        page = await _scrape_page(
            browser=browser,
            image_callback=_dummy_callback,
            previous_etag=None,
            referrer=item.referrer,
            save_images=False,
            save_screenshot=False,
            screenshot_callback=_dummy_callback,
            timezones=[DEFAULT_TIMEZONE],
            url=item.url,
            user_agents=[DEFAULT_USER_AGENT],
            viewports=[DEFAULT_VIEWPORT],
        )

        # Check page is not None
        assert page is not None, "Page should not be None"

        # Check content is not empty
        assert page.content, "Content should not be empty"

        # debug: Write Markdown content to file
        async with open(
            encoding="utf-8",
            file=join(website_path, f"{website}.md"),
            mode="w",
        ) as f:
            await f.write(page.content)

        # Check Markdown content
        async with open(
            encoding="utf-8",
            file=join(website_path, f"{website}.md"),
        ) as f:
            expected = await f.read()
            assert page.content == expected.strip(), "Markdown content should match"

    finally:
        # Clean up the extracted website content
        for walk_root, walk_dirs, walk_files in walk(website_path, topdown=False):
            await asyncio.gather(
                *[remove(join(walk_root, walk_file)) for walk_file in walk_files]
            )
            await asyncio.gather(
                *[rmdir(join(walk_root, walk_dir)) for walk_dir in walk_dirs]
            )
        await rmdir(website_path)


async def test_scrape_page_links(browser: Browser) -> None:
    """
    Test a page with links against the expected links and title.
    """
    # Init values
    item = ScrapedQueuedModel(
        depth=0,
        referrer="https://google.com",
        url=f"{LOCALHOST_URL}/links.html",
    )

    # Process the item
    page = await _scrape_page(
        browser=browser,
        image_callback=_dummy_callback,
        previous_etag=None,
        referrer=item.referrer,
        save_images=False,
        save_screenshot=False,
        screenshot_callback=_dummy_callback,
        timezones=[DEFAULT_TIMEZONE],
        url=item.url,
        user_agents=[DEFAULT_USER_AGENT],
        viewports=[DEFAULT_VIEWPORT],
    )

    # Check page is not None
    assert page is not None, "Page should not be None"

    # Check links
    assert set(page.links) == {
        # Link 1
        f"{LOCALHOST_URL}/link_1",
        # Link 2
        LOCALHOST_URL,
        # Link 3
        f"{LOCALHOST_URL}/abc",
        # Link 4
        "http://link_4/../abc",
        # Link 5
        f"{item.url}/link_5",
    }, "Links should match"

    # Check title
    assert page.title == "Test links", "Title should match"


async def test_scrape_page_paragraphs(browser: Browser) -> None:
    """
    Test a page with paragraphs against the expected paragraphs and title.
    """
    # Init values
    item = ScrapedQueuedModel(
        depth=0,
        referrer="https://google.com",
        url=f"{LOCALHOST_URL}/paragraphs.html",
    )

    # Process the item
    page = await _scrape_page(
        browser=browser,
        image_callback=_dummy_callback,
        previous_etag=None,
        referrer=item.referrer,
        save_images=False,
        save_screenshot=False,
        screenshot_callback=_dummy_callback,
        timezones=[DEFAULT_TIMEZONE],
        url=item.url,
        user_agents=[DEFAULT_USER_AGENT],
        viewports=[DEFAULT_VIEWPORT],
    )

    # Check page is not None
    assert page is not None, "Page should not be None"

    # Check content
    async with open(
        encoding="utf-8",
        file=join(dir_tests("websites"), "paragraphs.html.md"),
    ) as f:
        expected = await f.read()
        assert page.content == expected.strip(), "Content should match"

    # Check title
    assert page.title == "Complex paragraph example", "Title should match"


async def test_scrape_page_images(browser: Browser) -> None:
    """
    Test a page with images against the expected images and title.
    """
    # Init values
    item = ScrapedQueuedModel(
        depth=0,
        referrer="https://google.com",
        url=f"{LOCALHOST_URL}/images.html",
    )

    async def _image_callback(
        body: bytes,
        content_type: str | None,
        image: ScrapedImageModel,
    ) -> None:
        assert content_type == "image/jpeg", "Content type should match"
        assert image.url == f"{LOCALHOST_URL}/images/banana.jpg", "URL should match"

        async with open(
            file=join(dir_tests("websites"), "images", "banana.jpg"),
        ) as f:
            expected = await f.read()
            assert body == expected, "Content should match"

    # Process the item
    page = await _scrape_page(
        browser=browser,
        image_callback=_image_callback,
        previous_etag=None,
        referrer=item.referrer,
        save_images=False,
        save_screenshot=False,
        screenshot_callback=_dummy_callback,
        timezones=[DEFAULT_TIMEZONE],
        url=item.url,
        user_agents=[DEFAULT_USER_AGENT],
        viewports=[DEFAULT_VIEWPORT],
    )

    # Check page is not None
    assert page is not None, "Page should not be None"

    # Check title
    assert page.title == "Test images", "Title should match"


async def test_scrape_page_timeout(browser: Browser) -> None:
    """
    Test a page with a timeout against the expected timeout.
    """
    # Init values
    item = ScrapedQueuedModel(
        depth=0, referrer="https://google.com", url="http://localhost:1234"
    )

    # Process the item
    start_time = datetime.now(UTC)
    page = await _scrape_page(
        browser=browser,
        image_callback=_dummy_callback,
        previous_etag=None,
        referrer=item.referrer,
        save_images=False,
        save_screenshot=False,
        screenshot_callback=_dummy_callback,
        timezones=[DEFAULT_TIMEZONE],
        url=item.url,
        user_agents=[DEFAULT_USER_AGENT],
        viewports=[DEFAULT_VIEWPORT],
    )
    end_time = datetime.now(UTC)
    took_time = end_time - start_time

    # Check timeout duration
    assert took_time > timedelta(
        seconds=(BROWSER_TIMEOUT_MS / 1000) - 1
    ) and took_time < timedelta(
        seconds=(BROWSER_TIMEOUT_MS / 1000) + 5
    ), f"Timeout should be around {BROWSER_TIMEOUT_MS/1000} secs"

    # Check page is not None
    assert page is not None, "Page should not be None"

    # Check status
    assert page.status == -1, "Status should be -1"

    # Check HTML
    assert not page.raw, "HTML should be empty"

    # Check content
    assert not page.content, "Content should be empty"

    # Check title
    assert not page.title, "Title should be empty"


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
async def test_queue_simple(
    blob_provider: BlobProvider,
    queue_provider: QueueProvider,
) -> None:
    """
    Test a queue operation.

    A single URL is queued and checked, without any custom options.
    """
    # Init values
    container_name = _random_name()
    in_queue_name = _random_name()

    test_depth = 0
    test_id = str(uuid4())
    test_referrer = "https://google.com"
    test_url = "http://loremipsum.com"

    # Init clients
    async with (
        blob_client(
            azure_storage_access_key=None,
            azure_storage_account_name=env["AZURE_STORAGE_ACCOUNT_NAME"],
            azure_storage_endpoint_suffix="core.windows.net",
            container=container_name,
            path="scraping-test",
            provider=blob_provider,
        ) as blob,
        queue_client(
            azure_storage_access_key=None,
            azure_storage_account_name=env["AZURE_STORAGE_ACCOUNT_NAME"],
            azure_storage_endpoint_suffix="core.windows.net",
            provider=queue_provider,
            queue=in_queue_name,
        ) as in_queue,
    ):
        queued_urls = await _queue(
            blob=blob,
            cache_refresh=timedelta(days=1),
            deph=test_depth,
            item_id=test_id,
            in_queue=in_queue,
            max_depth=1,
            referrer=test_referrer,
            urls={test_url},
            whitelist={},
        )

        # Check an item has been queued
        assert queued_urls == 1, "A queued item should have been reported"

        # Check if messages are invisible for the rest of the clients
        async for message in in_queue.receive_messages(
            max_messages=1,
            visibility_timeout=5,
        ):
            model = ScrapedQueuedModel.model_validate_json(message.content)
            # Check depth
            assert model.depth == test_depth + 1, "Depth should be the same"
            # Check referrer
            assert model.referrer == test_referrer, "Referer should be the same"
            # Check URL
            assert model.url == test_url, "URL should be the same"

        # Clean up
        await blob.delete_container()
        await in_queue.delete_queue()


def _random_name() -> str:
    """
    Generate a random name with 32 characters.

    All lowercase letters and digits are used.
    """
    return "".join(
        random.choice(string.ascii_lowercase + string.digits) for _ in range(32)
    )


async def _dummy_callback(*args, **kwargs):
    pass
