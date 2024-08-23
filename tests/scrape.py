from datetime import datetime, timedelta
from os.path import join

import pytest
from aiofiles import open
from playwright.async_api import ViewportSize, async_playwright

from app.helpers.resources import dir_tests
from app.models.scraped import ScrapedQueuedModel
from app.scrape import (
    _get_broswer,
    _install_browser,
    _scrape_page,
    _install_pandoc,
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
async def test_real_website_page(
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
async def test_links() -> None:
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
async def test_paragraphs() -> None:
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
async def test_timeout() -> None:
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
