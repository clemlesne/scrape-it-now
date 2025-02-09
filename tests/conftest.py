from collections.abc import AsyncGenerator

import pytest
from playwright.async_api import Browser, async_playwright

from scrape_it_now.scrape import _get_broswer, install


@pytest.fixture
async def browser() -> AsyncGenerator[Browser, None]:
    """
    Fixture to provide a Playwright browser for each test.
    """
    # Make sure the browser and pandoc are installed
    async with async_playwright() as p:
        # Note: This won't install required system packages, make sure to install them manually
        await install(False)

    # Restart context to reload PATH to the newly installed binaries
    async with async_playwright() as p:
        async with await _get_broswer(p.chromium) as browser:
            yield browser
