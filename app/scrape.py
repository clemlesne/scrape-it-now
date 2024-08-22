import asyncio, random, re, subprocess
from datetime import UTC, datetime, timedelta
from os import environ as env
from typing import Awaitable, Callable
from urllib.parse import urlparse

from html2text import HTML2Text
from playwright._impl._driver import compute_driver_executable, get_driver_env
from playwright.async_api import (
    Browser,
    BrowserType,
    Error as PlaywrightError,
    Route,
    TimeoutError,
    ViewportSize,
    async_playwright,
)
from pydantic import ValidationError
from tenacity import (
    retry,
    retry_if_exception_type,
    stop_after_attempt,
    wait_random_exponential,
)

from app.helpers.logging import logger
from app.helpers.persistence import blob_client, queue_client
from app.helpers.resources import (
    browsers_install_path,
    dir_resources,
    hash_url,
    index_queue_name,
    scrape_container_name,
    scrape_queue_name,
)
from app.helpers.threading import run_workers
from app.helpers.trie import Trie
from app.models.scraped import ScrapedQueuedModel, ScrapedUrlModel
from app.models.state import StateJobModel, StateScrapedModel
from app.persistence.iblob import (
    BlobNotFoundError,
    IBlob,
    LeaseAlreadyExistsError,
    Provider as BlobProvider,
)
from app.persistence.iqueue import IQueue, Provider as QueueProvider

# State
JOB_STATE_NAME = "job.json"

# Storage
SCRAPED_PREFIX = "scraped"
STATE_PREFIX = "state"

# HTML to Markdown converter
html2text = HTML2Text()
html2text.ignore_images = True
html2text.ignore_links = True

# Ads pattern
_ads_pattern_cache: re.Pattern | None = None


async def _queue(
    blob: IBlob,
    cache_refresh: timedelta,
    deph: int,
    id: str,
    in_queue: IQueue,
    max_depth: int,
    referrer: str,
    urls: set[str],
    whitelist: dict[re.Pattern, list[re.Pattern]],
) -> int:
    """
    Add URLs to the queue and update its state.

    The URLs are filtered by the whitelist and the cache. Then, they are added to the input queue.

    Returns the number of URLs queued.
    """
    # Skip if the depth is too high
    new_depth = deph + 1
    if new_depth > max_depth:
        logger.info("Skipping %s (%i), depth too high", referrer, new_depth)
        # Return the number of URLs queued
        return 0

    # Add the referrer to the set of scraped URLs
    state_bytes = StateScrapedModel().model_dump_json().encode(blob.encoding)
    await blob.upload_blob(
        blob=f"{STATE_PREFIX}/{id}",
        data=state_bytes,
        length=len(state_bytes),
        overwrite=True,
    )

    async def _add(
        url: str,
    ) -> bool:
        new_url = urlparse(url)
        logger.debug("Checking %s before queuing", new_url.geturl())

        # If there is a whitelist, check if the URL is allowed
        if len(whitelist) > 0:
            # Skip if the URL is not in the whitelist
            domain_paths = next(
                (
                    paths
                    for domain, paths in whitelist.items()
                    if re.search(domain, new_url.netloc)
                ),
                None,
            )
            if not domain_paths:
                return False

            # Skip if the URL has an ignored path
            if any(re.search(path, new_url.path) for path in domain_paths):
                return False

        # Test previous attempts
        try:
            # Load from the validity cache
            previous_raw = await blob.download_blob(f"{STATE_PREFIX}/{hash_url(url)}")
            previous = StateScrapedModel.model_validate_json(previous_raw)

            # Skip if the previous attempt is too recent
            # Date is now and not the one from the model, on purposes. Otherwise, if its a cached model, the date would match the frefresher date every time.
            if previous.created_at >= datetime.now(UTC) - cache_refresh:
                logger.debug(
                    "Skipping %s due to recent attempt at %s", url, previous.created_at
                )
                return False

        except (BlobNotFoundError, ValidationError):
            logger.debug("State miss for %s", url)

        # Update the validity cache
        await blob.upload_blob(
            blob=f"{STATE_PREFIX}/{hash_url(url)}",
            data=state_bytes,
            length=len(state_bytes),
            overwrite=True,
        )

        # Add the sub URL to the input queue
        await in_queue.send_message(
            ScrapedQueuedModel(
                depth=new_depth,
                referrer=referrer,
                url=url,
            ).model_dump_json(),
        )
        return True

    # Add the links to the queue
    res = await asyncio.gather(*[_add(url) for url in urls])
    logger.info(
        "Queued %i/%i links for referrer %s (%i)",
        sum(res),
        len(urls),
        referrer,
        new_depth,
    )

    # Return the number of URLs queued
    return sum(res)


async def _process_one(
    blob: IBlob,
    browser: Browser,
    cache_refresh: timedelta,
    current_item: ScrapedQueuedModel,
    in_queue: IQueue,
    max_depth: int,
    out_queue: IQueue,
    timezones: list[str],
    user_agents: list[str],
    viewports: list[ViewportSize],
    whitelist: dict[re.Pattern, list[re.Pattern]],
) -> tuple[int, int, float]:
    """
    Process one URL from the queue.

    Returns the number of processed URLs, queued URLs, and total network used.
    """
    queued_urls = 0

    # Check if the URL has already been processed
    current_id = hash_url(current_item.url)
    cache_name = f"{SCRAPED_PREFIX}/{current_id}.json"
    cache_item = None
    try:
        # Load the cache
        cache_raw = await blob.download_blob(cache_name)
        cache_item = ScrapedUrlModel.model_validate_json(cache_raw)

        # Skip if previous attempt encountered a server error
        if cache_item.status >= 500:
            logger.info(
                "Loaded %s (%i) from cache, but server error",
                cache_item.url,
                current_item.depth,
            )
            raise BlobNotFoundError

        # Skip if the cache has no validity date
        if not cache_item.valid_until:
            logger.info(
                "Loaded %s (%i) from cache, no validity date",
                cache_item.url,
                current_item.depth,
            )
            raise BlobNotFoundError

        # Skip if the cache is explicitly marked as expired
        if cache_item.valid_until and cache_item.valid_until < datetime.now(UTC):
            logger.info(
                "Loaded %s (%i) from cache, but expired",
                cache_item.url,
                current_item.depth,
            )
            raise BlobNotFoundError

        # Add the links to the queue
        queued_urls = await _queue(
            blob=blob,
            cache_refresh=cache_refresh,
            deph=current_item.depth,
            id=current_id,
            in_queue=in_queue,
            max_depth=max_depth,
            referrer=cache_item.url,
            urls=set(cache_item.links),
            whitelist=whitelist,
        )

        logger.info(
            "Loaded %s (%i) from cache",
            cache_item.url,
            current_item.depth,
        )

        # Return the number of processed URLs, queued URLs, and total network used
        return (0, queued_urls, 0.0)

    except (BlobNotFoundError, ValidationError):
        logger.debug("Cache miss for %s", current_item.url)

    # Process the URL
    new_result = await _scrape_page(
        browser=browser,
        previous_etag=cache_item.etag if cache_item else None,
        referrer=current_item.referrer,
        timezones=timezones,
        url=current_item.url,
        user_agents=user_agents,
        viewports=viewports,
    )

    # Use cache data if scraping fails or is cached
    if not new_result and cache_item:
        # Add the links to the queue
        queued_urls = await _queue(
            blob=blob,
            cache_refresh=cache_refresh,
            deph=current_item.depth,
            id=current_id,
            in_queue=in_queue,
            max_depth=max_depth,
            referrer=cache_item.url,
            urls=set(cache_item.links),
            whitelist=whitelist,
        )
        logger.info("Used cache for %s (%i)", cache_item.url, current_item.depth)
        # Return the number of processed URLs, queued URLs, and total network used
        return (0, queued_urls, 0.0)

    # TODO: Review the algorithm to avoid the use of exceptions for control flow
    if not new_result:
        raise RuntimeError("Failed to scrape URL and no cache available, fill an issue")

    # Output to a blob and queue
    model_bytes = new_result.model_dump_json().encode(blob.encoding)
    await blob.upload_blob(
        blob=cache_name,
        data=model_bytes,
        length=len(model_bytes),
        overwrite=True,
    )

    # Mark current file to be processed for chunking
    await out_queue.send_message(f"{SCRAPED_PREFIX}/{current_id}.json")

    # Add the links to the queue
    queued_urls = await _queue(
        blob=blob,
        cache_refresh=cache_refresh,
        deph=current_item.depth,
        id=current_id,
        in_queue=in_queue,
        max_depth=max_depth,
        referrer=new_result.url,
        urls=set(new_result.links),
        whitelist=whitelist,
    )

    logger.info("Scraped %s (%i)", new_result.url, current_item.depth)

    # Return the number of processed URLs, queued URLs, and total network used
    return (1, queued_urls, new_result.network_used_mb)


async def _update_job_state(
    blob: IBlob,
    network_used_mb: float,
    processed: int,
    queued: int,
) -> None:
    # Acquire a lease
    logger.debug("Acquiring lease for job state")

    try:
        async with blob.lease_blob(
            blob=JOB_STATE_NAME,
            lease_duration=15,  # 15 secs
        ) as lease_id:
            # Parse existing state
            try:
                model_raw = await blob.download_blob(JOB_STATE_NAME)
                model = StateJobModel.model_validate_json(model_raw)
            except (BlobNotFoundError, ValidationError):
                model = StateJobModel()

            # Update state
            model.last_updated = datetime.now(UTC)
            model.network_used_mb += network_used_mb
            model.processed += processed
            model.queued += queued

            # Save state
            await blob.upload_blob(
                blob=JOB_STATE_NAME,
                data=model.model_dump_json().encode(blob.encoding),
                lease_id=lease_id,
                length=len(model.model_dump_json()),
                overwrite=True,
            )

    except LeaseAlreadyExistsError:  # Wait for the lease to expire
        logger.debug("Lease already exists, waiting and retry")
        await asyncio.sleep(1)
        return await _update_job_state(
            blob=blob,
            network_used_mb=network_used_mb,
            processed=processed,
            queued=queued,
        )

    except BlobNotFoundError:  # Create the blob if it does not exist
        logger.debug("State blob does not exist, creating an empty one and retry")
        await blob.upload_blob(
            blob=JOB_STATE_NAME,
            data=b"",
            length=0,
            overwrite=True,
        )
        return await _update_job_state(
            blob=blob,
            network_used_mb=network_used_mb,
            processed=processed,
            queued=queued,
        )

    logger.info(
        "Updated job state to %i processed and %i queued",
        model.processed,
        model.queued,
    )


async def _worker(
    azure_storage_connection_string: str,
    blob_path: str,
    blob_provider: BlobProvider,
    browser_name: str,
    cache_refresh: timedelta,
    job: str,
    max_depth: int,
    queue_provider: QueueProvider,
    timezones: list[str],
    user_agents: list[str],
    viewports: list[ViewportSize],
    whitelist: dict[re.Pattern, list[re.Pattern]],
) -> None:
    # Init clients
    async with blob_client(
        azure_storage_connection_string=azure_storage_connection_string,
        container=scrape_container_name(job),
        path=blob_path,
        provider=blob_provider,
    ) as blob:
        async with queue_client(
            azure_storage_connection_string=azure_storage_connection_string,
            provider=queue_provider,
            queue=scrape_queue_name(job),
        ) as in_queue:
            async with queue_client(
                azure_storage_connection_string=azure_storage_connection_string,
                provider=queue_provider,
                queue=index_queue_name(job),
            ) as out_queue:

                # Init Playwright context
                async with async_playwright() as p:
                    browser_type: BrowserType = getattr(p, browser_name)
                    browser_usage = 0
                    browser: Browser | None = None

                    # Process the queue
                    while messages := in_queue.receive_messages(
                        max_messages=32,
                        visibility_timeout=32 * 5,  # 5 secs per message
                    ):
                        total_network_used_mb = 0.0
                        total_processed = 0
                        total_queued = 0

                        # Iterate over the messages
                        logger.info("Processing new messages")
                        async for message in messages:
                            # Parse the message
                            current_item = ScrapedQueuedModel.model_validate_json(
                                message.content
                            )
                            logger.info(
                                'Processing "%s" (%i)',
                                current_item.url,
                                current_item.depth,
                            )

                            # Get a browser instance
                            # Limit the usage of the browser to 100 scrapings, to avoid memory leaks. Restart the browser after that. Memory leaks have been observed in both macOS and Ubuntu, with over 150 GB of memory used after an hour.
                            # TODO: Create an issue in the Playwright repository to investigate the memory leak
                            if not browser:  # First start
                                browser = await _get_broswer(browser_type)
                                logger.debug("Started browser %s", browser_type.name)
                            elif browser_usage < 100:  # Reuse
                                browser_usage += 1
                            else:  # Restart
                                await browser.close()
                                browser = await _get_broswer(browser_type)
                                logger.info(
                                    "Restarted browser %s after %i iterations",
                                    browser_type.name,
                                    browser_usage,
                                )
                                browser_usage = 0

                            try:
                                processed, queued, network_used_mb = await _process_one(
                                    blob=blob,
                                    browser=browser,
                                    cache_refresh=cache_refresh,
                                    current_item=current_item,
                                    in_queue=in_queue,
                                    max_depth=max_depth,
                                    out_queue=out_queue,
                                    timezones=timezones,
                                    user_agents=user_agents,
                                    viewports=viewports,
                                    whitelist=whitelist,
                                )
                                await in_queue.delete_message(message)

                                # Update counters
                                total_network_used_mb += network_used_mb
                                total_processed += processed
                                total_queued += queued

                            except Exception:
                                # TODO: Add a dead-letter queue
                                # TODO: Add a retry mechanism
                                # TODO: Narrow the exception type
                                logger.error(
                                    "Error processing %s (%i)",
                                    current_item.url,
                                    current_item.depth,
                                    exc_info=True,
                                )

                        # Update job state
                        await _update_job_state(
                            blob=blob,
                            network_used_mb=total_network_used_mb,
                            processed=total_processed,
                            queued=total_queued,
                        )

                        # Wait 3 sec to avoid spamming the queue if it is empty
                        await asyncio.sleep(3)

                    logger.info("No more queued messages, exiting")

                    # Close the browser
                    if browser:
                        await browser.close()


def _ads_pattern() -> re.Pattern | None:
    """
    Return a regex pattern to match ads and trackers.
    """
    global _ads_pattern_cache

    if not _ads_pattern_cache:
        counter = 0
        trie = Trie()

        with open(
            encoding="utf-8",
            file=dir_resources("ads-nl.txt"),
            mode="r",
        ) as f:
            # Parse the list of domains
            for domain in f.readlines():
                domain = domain.strip()
                if not domain or domain.startswith("#"):
                    continue
                trie.add(domain)
                counter += 1

            # Build regex
            _ads_pattern_cache = trie.pattern()

        # Output is huge, uncomment only for debugging
        # logger.debug("Compiled ads pattern %s", _ads_pattern_cache.pattern)
        logger.info("Loaded %i ads and trackers", counter)

    # Alert user if no rules are loaded
    if not _ads_pattern_cache:
        logger.warning("No ads and trackers loaded, skipping")

    return _ads_pattern_cache


def _filter_routes(
    size_callback: Callable[[int], None],
) -> Callable[[Route], Awaitable[None]]:
    """
    Speed up page loading by aborting some requests.

    It includes for images, media, fonts, and stylesheets.
    """

    @retry(
        reraise=True,
        retry=retry_if_exception_type(
            PlaywrightError
        ),  # Catch for network errors from Playwright
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def _wrapper(
        route: Route,
    ) -> None:
        # Skip UI resources
        if route.request.resource_type in {"image", "media", "font", "stylesheet"}:
            logger.debug("Blocked resource type %s", route.request.resource_type)
            await route.abort("blockedbyclient")
            return

        # Check if the request is to a known ad domain
        if pattern := _ads_pattern():
            if pattern.search(route.request.url) is not None:
                logger.debug("Blocked ad %s", route.request.url)
                await route.abort("blockedbyclient")
                return

        # Remove client hints
        headers = route.request.headers
        for header in list(headers.keys()):
            if header.startswith("sec-ch-"):
                del headers[header]

        # Continue the request
        res = await route.fetch(
            headers=headers,
        )

        # Store content size
        size_bytes = (
            int(content_length)
            if (content_length := res.headers.get("content-length"))
            else 0
        )
        size_callback(size_bytes)

        # Continue the request
        await route.fulfill(response=res)

    return _wrapper


async def _scrape_page(
    browser: Browser,
    previous_etag: str | None,
    referrer: str,
    timezones: list[str],
    url: str,
    user_agents: list[str],
    viewports: list[ViewportSize],
) -> ScrapedUrlModel | None:
    """
    Scrape a link and return the content and links.

    Pages are requested in English, using a random user agent in a Playwright browser. All links are extracted from the HTML content.
    """

    def _generic_error(
        message: str,
        status: int = -1,
        etag: str | None = None,
        valid_until: datetime | None = None,
    ) -> ScrapedUrlModel:
        logger.info("Cannot scrape: %s (%s)", message, url)
        # Return an empty result if Playwright fails
        return ScrapedUrlModel(
            etag=etag,
            network_used_mb=total_size_bytes / 1024 / 1024,
            status=status,
            url=url_clean.geturl(),
            valid_until=valid_until,
        )

    total_size_bytes = 0

    def _size_callback(size_bytes: int) -> None:
        nonlocal total_size_bytes
        total_size_bytes += size_bytes

    # Parse URL
    url_clean = urlparse(url)._replace(
        query="",
        fragment="",
    )

    # Load page
    async with await browser.new_context(
        color_scheme=random.choice(["dark", "light", "no-preference"]),
        device_scale_factor=random.randint(1, 3),
        has_touch=random.choice([True, False]),
        locale="en-US",
        timezone_id=random.choice(list(timezones)),
        user_agent=random.choice(list(user_agents)),
        viewport=random.choice(viewports),
    ) as context:
        page = await context.new_page()

        # Apply filtering to reduce traffic and CPU usage
        await page.route("**/*", _filter_routes(_size_callback))

        # Caching of unchanged resources
        if previous_etag:
            await page.set_extra_http_headers({"if-none-match": previous_etag})

        try:
            res = await page.goto(
                url_clean.geturl(),
                referer=referrer,
                timeout=30000,  # 30 seconds
            )
        except TimeoutError:  # TODO: Retry maybe a few times for timeout errors?
            return _generic_error(
                etag=previous_etag,
                message="Timeout while loading",
            )
        except PlaywrightError as e:
            return _generic_error(
                etag=previous_etag,
                message=f"Unknown error: {e}",
            )

        # Remove all routes, as our filter manipulates all requests, we don't need it anymore
        # See: https://github.com/microsoft/playwright/issues/30667#issuecomment-2095788164
        await page.unroute_all(behavior="ignoreErrors")

        # Skip if no response from Playwright
        if not res:
            return _generic_error(
                etag=previous_etag,
                message="No HTML response from Playwright browser",
            )

        # Skip if the content is not HTML
        content_type = res.headers.get("content-type", "")
        if "text/html" not in content_type:
            return _generic_error(
                etag=previous_etag,
                message=f"Content type is {content_type}, not HTML",
            )

        # Check for cache control
        cache_control = res.headers.get("cache-control", "")
        # TODO: Should "private" value be excluded? (see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#private)
        valid_until = None
        # The "s-maxage" directive is ignored by private caches, and overrides the value specified by the max-age directive or the Expires header for shared caches, if they are present.
        # See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage
        if s_maxage_match := re.search(r"s-maxage=(\d+)", cache_control):
            s_maxage = int(s_maxage_match.group(1))
            valid_until = datetime.now(UTC) + timedelta(seconds=s_maxage)
        # The "max-age=N" response directive indicates that the response remains fresh until N seconds after the response is generated.
        # See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#max-age
        elif max_age_match := re.search(r"max-age=(\d+)", cache_control):
            max_age = int(max_age_match.group(1))
            # "max-age=0" is a workaround for no-cache, because many old (HTTP/1.0) cache implementations don't support no-cache. Recently browsers are still using "max-age=0" in "reloading" — for backward compatibility — and alternatively using no-cache to cause a "force reloading".
            if max_age > 0:
                valid_until = datetime.now(UTC) + timedelta(seconds=max_age)

        # Skip if etag is the same
        if previous_etag and res.status == 304:
            logger.info("Resource not modified, skipping")
            return
        # Save etag for future requests
        etag = res.headers.get("etag")

        # Check for status code
        status = res.status
        if status != 200:
            return _generic_error(
                etag=etag,
                message=f"Status code {status}, not 200",
                status=status,
                valid_until=valid_until,
            )

        # Get title
        title = await page.title()

        # Get HTML
        html = None
        try:
            html_selector = await page.wait_for_selector("html")
            if html_selector:
                html = (
                    await html_selector.inner_html()
                )  # Get HTML content of the visible page
        except TimeoutError:  # TODO: Is those timeouts normal? They happen quite often.
            return _generic_error(
                etag=etag,
                message="Timeout for selecting HTML content",
                valid_until=valid_until,
            )

        # Skip if no HTML content
        if not html:
            return _generic_error(
                etag=etag,
                message="No HTML content returned",
                valid_until=valid_until,
            )

        # Check for Cloudflare blocking
        if "Why have I been blocked?" in html:
            return _generic_error(
                etag=etag,
                message="Blocked by Cloudflare",
                status=403,
                valid_until=valid_until,
            )

        # Extract text content
        redirect = res.url  # Get final URL after redirects
        try:
            # Convert HTML to Markdown
            content = html2text.handle(
                data=await page.content()  # Get text content of the full page (including HTML head and hidden elements)
            )
            # Remove empty lines and leading/trailing whitespace
            content = "\n".join(
                clean for line in content.splitlines() if (clean := line.strip())
            )
        except (
            AssertionError
        ) as e:  # When HTML2Text fails to parse the content, it raises an assertion error
            return _generic_error(
                etag=etag,
                message=f"HTML to text conversion failed: {e}",
                valid_until=valid_until,
            )

        # Extract links
        links: set[str] = set()
        # Iterate over all links on the page, even those that are not visible
        for a_selector in await page.get_by_role(
            "link",
            include_hidden=True,  # Gather links in navigation menus, those are usually hidden
        ).all():
            try:
                a_href = await a_selector.get_attribute(
                    "href",
                    timeout=1000,  # 1 second
                )
            except TimeoutError:
                logger.debug("Timeout for selecting href attribute", exc_info=True)
                continue
            if not a_href:
                continue
            elif a_href.startswith("http"):
                a_url = urlparse(a_href)
            elif a_href.startswith("/"):
                path = _format_path(urlparse(a_href).path)
                a_url = url_clean._replace(path=path)
            else:
                path = _format_path(f"{url_clean.path}/{urlparse(a_href).path}")
                a_url = url_clean._replace(path=path)
            links.add(a_url.geturl())

        # Return result
        return ScrapedUrlModel(
            content=content,
            etag=etag,
            links=list(links),
            network_used_mb=total_size_bytes / 1024 / 1024,
            raw=html,
            redirect=redirect,
            status=status,
            title=title,
            url=url_clean.geturl(),
            valid_until=valid_until,
        )


def _format_path(path: str) -> str:
    """
    Solve relative URL paths and return its absolute form.
    """
    parts = path.split("/")
    res: list[str] = []
    for i in reversed(range(len(parts))):
        if not parts[i]:
            continue
        elif parts[i] == ".":
            continue
        elif parts[i] == "..":
            parts[i - 1] = ""
        else:
            res.append(parts[i])
    return "/".join(reversed(res))


async def run(
    azure_storage_connection_string: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
    cache_refresh: int,
    job: str,
    max_depth: int,
    processes: int,
    queue_provider: QueueProvider,
    timezones: list[str],
    url: str,
    user_agents: list[str],
    viewports: list[tuple[int, int]],
    whitelist: dict[re.Pattern, list[re.Pattern]],
) -> None:
    logger.info("Starting scraping job %s", job)

    # Patch Playwright
    # See: https://playwright.dev/docs/browsers#hermetic-install
    env["PLAYWRIGHT_BROWSERS_PATH"] = browsers_install_path()

    # Install Playwright dependencies
    browser_name = "chromium"
    async with async_playwright() as p:
        browser_type = getattr(p, browser_name)
        _install_browser(browser_type)

    # Parse cache_refresh
    cache_refresh_parsed = timedelta(hours=cache_refresh)

    # Parse viewports
    viewports_parsed: list[ViewportSize] = []
    for width, height in viewports:
        viewports_parsed.append(ViewportSize(width=width, height=height))

    # Init clients
    async with blob_client(
        azure_storage_connection_string=azure_storage_connection_string,
        container=scrape_container_name(job),
        path=blob_path,
        provider=blob_provider,
    ) as blob:
        async with queue_client(
            azure_storage_connection_string=azure_storage_connection_string,
            provider=queue_provider,
            queue=scrape_queue_name(job),
        ) as in_queue:
            # Add initial URL to the queue
            model = ScrapedQueuedModel(
                depth=0,
                referrer="https://www.google.com/search",
                url=url,
            )
            queued_urls = await _queue(
                blob=blob,
                cache_refresh=cache_refresh_parsed,
                deph=model.depth,
                id=hash_url(model.referrer),
                in_queue=in_queue,
                max_depth=max_depth,
                referrer=model.referrer,
                urls={model.url},
                whitelist=whitelist,
            )

            # Initialize the job state as user can execute the "status" command right after
            await _update_job_state(
                blob=blob,
                network_used_mb=0.0,
                processed=0,
                queued=queued_urls,
            )

    run_workers(
        azure_storage_connection_string=azure_storage_connection_string,
        blob_path=blob_path,
        blob_provider=blob_provider,
        browser_name=browser_name,
        cache_refresh=cache_refresh_parsed,
        count=processes,
        func=_worker,
        job=job,
        max_depth=max_depth,
        name=f"scrape-{job}",
        queue_provider=queue_provider,
        timezones=timezones,
        user_agents=user_agents,
        viewports=viewports_parsed,
        whitelist=whitelist,
    )


async def state(
    blob_path: str,
    blob_provider: BlobProvider,
    job: str,
    azure_storage_connection_string: str | None,
) -> StateJobModel | None:
    # Init clients
    async with blob_client(
        azure_storage_connection_string=azure_storage_connection_string,
        container=scrape_container_name(job),
        path=blob_path,
        provider=blob_provider,
    ) as blob:
        model = None
        # Load the state
        try:
            state_raw = await blob.download_blob(JOB_STATE_NAME)
            model = StateJobModel.model_validate_json(state_raw)
        except (BlobNotFoundError, ValidationError):
            pass
        # Return model
        return model


def _install_browser(
    browser_type: BrowserType,
    with_deps: bool = False,
) -> None:
    """
    Install playwright and its dependencies if needed.

    Return True if the installation was successful.
    """
    # Get location of Playwright driver
    driver_executable, driver_cli = compute_driver_executable()

    # Build the command arguments
    args = [driver_executable, driver_cli, "install", browser_type.name]
    if with_deps:
        args.append("--with-deps")

    # Run
    proc = subprocess.run(
        args=args,
        capture_output=True,
        check=False,
        env=get_driver_env(),
        text=True,
    )

    # Display error logs if any
    err = proc.stderr
    if err:
        logger.error("Browser install error:\n%s", err)

    # Display standard logs if any
    logs = proc.stdout
    if logs:
        logger.info("Browser install logs:\n%s", proc.stdout)

    if proc.returncode != 0:
        raise RuntimeError("Failed to install browser")


async def _get_broswer(
    browser_type: BrowserType,
) -> Browser:
    """
    Launch a browser instance.
    """
    browser = await browser_type.launch(
        downloads_path=browsers_install_path(),  # Using the application path not the default one from the SDK
        args=[
            "--disable-gl-drawing-for-tests",  # Disable totally UI rendering, lowering CPU usage
            "--mute-audio",  # Mutes audio sent to the audio device so it is not audible
        ],
    )
    return browser
