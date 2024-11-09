from collections.abc import AsyncGenerator

import pytest
from playwright.async_api import Browser, async_playwright

from scrape_it_now.scrape import BROWSER_NAME, _get_broswer, install


@pytest.fixture
async def browser() -> AsyncGenerator[Browser, None]:
    """
    Fixture to provide a Playwright browser for each test.
    """
    async with async_playwright() as p:
        browser_type = getattr(p, BROWSER_NAME)
        # Make sure the browser and pandoc are installed
        await install()

    # Restart context to reload PATH to the newly installed binaries
    async with async_playwright() as p:
        browser_type = getattr(p, BROWSER_NAME)
        async with await _get_broswer(browser_type) as browser:
            yield browser
