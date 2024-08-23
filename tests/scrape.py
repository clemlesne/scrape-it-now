import random
import string
from datetime import datetime, timedelta
from os import environ as env
from os.path import join
from uuid import uuid4

import pytest
from aiofiles import open
from playwright.async_api import ViewportSize, async_playwright

from app.helpers.persistence import blob_client, queue_client
from app.helpers.resources import dir_tests
from app.models.scraped import ScrapedQueuedModel
from app.persistence.iblob import (
    Provider as BlobProvider,
)
from app.persistence.iqueue import Provider as QueueProvider
from app.scrape import (
    _get_broswer,
    _install_browser,
    _install_pandoc,
    _queue,
    _scrape_page,
)

DEFAULT_TIMEZONE = "Europe/Moscow"
DEFAULT_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
DEFAULT_VIEWPORT = ViewportSize(width=1920, height=1080)
LOCALHOST_URL = "http://localhost:8000"


@pytest.mark.parametrize(
    "website",
    [
        # 150+ links
        "azuresdkdocs.html",
        # Common website (no kidding)
        "google.html",
        # React website
        "reflex.html",
        # Simple website
        "hackernews.html",
    ],
    ids=lambda x: x,
)
@pytest.mark.asyncio(scope="session")
async def test_scrape_page_website(
    website: str,
) -> None:
    """
    Test a real website page against the expected Markdown content.

    Expected Markdown content is stored in the `tests/websites` directory. Text content is generated manually a first time using this same application.
    """
    # Init values
    item = ScrapedQueuedModel(
        depth=0,
        referrer="https://google.com",
        url=f"{LOCALHOST_URL}/{website}",
    )

    # Init Playwright context
    async with async_playwright() as p:
        browser_type = p.chromium

        # Make sure the browser and pandoc are installed
        _install_browser(browser_type)
        _install_pandoc()

        # Launch the browser
        browser = await _get_broswer(browser_type)

        # Process the item
        page = await _scrape_page(
            browser=browser,
            previous_etag=None,
            referrer=item.referrer,
            timezones=[DEFAULT_TIMEZONE],
            url=item.url,
            user_agents=[DEFAULT_USER_AGENT],
            viewports=[DEFAULT_VIEWPORT],
        )

        # Check page is not None
        assert page is not None, "Page should not be None"

        # Check Markdown content
        async with open(
            encoding="utf-8",
            file=join(dir_tests("websites"), f"{website}.md"),
            mode="r",
        ) as f:
            expected = await f.read()
            assert page.content == expected.rstrip(), "Markdown content should match"


@pytest.mark.asyncio(scope="session")
async def test_scrape_page_links() -> None:
    """
    Test a page with links against the expected links and title.
    """
    # Init values
    item = ScrapedQueuedModel(
        depth=0,
        referrer="https://google.com",
        url=f"{LOCALHOST_URL}/links.html",
    )

    # Init Playwright context
    async with async_playwright() as p:
        browser_type = p.chromium

        # Make sure the browser and pandoc are installed
        _install_browser(browser_type)
        _install_pandoc()

        # Launch the browser
        browser = await _get_broswer(browser_type)

        # Process the item
        page = await _scrape_page(
            browser=browser,
            previous_etag=None,
            referrer=item.referrer,
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


@pytest.mark.asyncio(scope="session")
async def test_scrape_page_paragraphs() -> None:
    """
    Test a page with paragraphs against the expected paragraphs and title.
    """
    # Init values
    item = ScrapedQueuedModel(
        depth=0,
        referrer="https://google.com",
        url=f"{LOCALHOST_URL}/paragraphs.html",
    )

    # Init Playwright context
    async with async_playwright() as p:
        browser_type = p.chromium

        # Make sure the browser and pandoc are installed
        _install_browser(browser_type)
        _install_pandoc()

        # Launch the browser
        browser = await _get_broswer(browser_type)

        # Process the item
        page = await _scrape_page(
            browser=browser,
            previous_etag=None,
            referrer=item.referrer,
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
            mode="r",
        ) as f:
            expected = await f.read()
            assert page.content == expected.rstrip(), "Content should match"

        # Check title
        assert page.title == "Complex paragraph example", "Title should match"


@pytest.mark.asyncio(scope="session")
async def test_scrape_page_timeout() -> None:
    """
    Test a page with a timeout against the expected timeout.
    """
    # Init values
    item = ScrapedQueuedModel(
        depth=0, referrer="https://google.com", url="http://localhost:1234"
    )

    # Init Playwright context
    async with async_playwright() as p:
        browser_type = p.chromium

        # Make sure the browser and pandoc are installed
        _install_browser(browser_type)
        _install_pandoc()

        # Launch the browser
        browser = await _get_broswer(browser_type)

        # Process the item
        start_time = datetime.now()
        page = await _scrape_page(
            browser=browser,
            previous_etag=None,
            referrer=item.referrer,
            timezones=[DEFAULT_TIMEZONE],
            url=item.url,
            user_agents=[DEFAULT_USER_AGENT],
            viewports=[DEFAULT_VIEWPORT],
        )
        end_time = datetime.now()
        took_time = end_time - start_time

        # Check timeout duration
        assert took_time > timedelta(seconds=29) and took_time < timedelta(
            seconds=35
        ), "Timeout should be around 30 secs"

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
@pytest.mark.asyncio(scope="session")
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
            azure_storage_connection_string=env["AZURE_STORAGE_CONNECTION_STRING"],
            container=container_name,
            path="scraping-test",
            provider=blob_provider,
        ) as blob,
        queue_client(
            azure_storage_connection_string=env["AZURE_STORAGE_CONNECTION_STRING"],
            provider=queue_provider,
            queue=in_queue_name,
        ) as in_queue,
    ):
        queued_urls = await _queue(
            blob=blob,
            cache_refresh=timedelta(days=1),
            deph=test_depth,
            id=test_id,
            in_queue=in_queue,
            max_depth=0,
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
            assert model.depth == test_depth, "Depth should be the same"
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


def _random_content() -> str:
    """
    Generate a random content with a length of 512 characters.

    All printable ASCII characters are used.
    """
    return "".join(random.choice(string.printable) for _ in range(512))
