import asyncio, random, re
from datetime import UTC, datetime, timedelta
from typing import Awaitable, Callable
from urllib.parse import urlparse
from uuid import uuid4

from azure.core.exceptions import ResourceExistsError, ResourceNotFoundError
from azure.storage.blob.aio import ContainerClient
from azure.storage.queue.aio import QueueClient
from html2text import HTML2Text
from playwright.async_api import (
    Browser,
    Error,
    Route,
    TimeoutError,
    ViewportSize,
    async_playwright,
)
from pydantic import ValidationError

from app.helpers.logging import logger
from app.helpers.persistence import blob_client, queue_client
from app.helpers.resources import (
    chunck_queue_name,
    hash_url,
    resources_dir,
    scrape_container_name,
    scrape_queue_name,
)
from app.helpers.threading import run_workers
from app.helpers.trie import Trie
from app.models.scraped import ScrapedQueuedModel, ScrapedUrlModel
from app.models.state import StateJobModel, StateScrapedModel

# State
JOB_STATE_NAME = "job.json"

# Storage
SCRAPED_PREFIX = "scraped"
STATE_PREFIX = "state"

# Queue
IN_QUEUE_NAME = "learn-to-scrape"
OUT_QUEUE_NAME = "learn-to-chunck"

# HTML to Markdown converter
html2text = HTML2Text()
html2text.ignore_images = True
html2text.ignore_links = True

# Ads pattern
_ads_pattern_cache: re.Pattern = None


async def _queue(
    blob: ContainerClient,
    cache_refresh: timedelta,
    deph: int,
    id: str,
    in_queue: QueueClient,
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
    state_bytes = StateScrapedModel().model_dump_json().encode("utf-8")
    await blob.upload_blob(
        data=state_bytes,
        length=len(state_bytes),
        name=f"{STATE_PREFIX}/{id}",
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
            f = await blob.download_blob(
                blob=f"{STATE_PREFIX}/{hash_url(url)}",
                encoding="utf-8",
            )
            previous = StateScrapedModel.model_validate_json(await f.readall())

            # Skip if the previous attempt is too recent
            # Date is now and not the one from the model, on purposes. Otherwise, if its a cached model, the date would match the frefresher date every time.
            if previous.created_at >= datetime.now(UTC) - cache_refresh:
                logger.debug(
                    "Skipping %s due to recent attempt at %s", url, previous.created_at
                )
                return False

        except (ResourceNotFoundError, ValidationError):
            logger.debug("State miss for %s", url)

        # Update the validity cache
        await blob.upload_blob(
            data=state_bytes,
            length=len(state_bytes),
            name=f"{STATE_PREFIX}/{hash_url(url)}",
            overwrite=True,
        )

        # Add the sub URL to the input queue
        await in_queue.send_message(
            content=ScrapedQueuedModel(
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
    blob: ContainerClient,
    browser: Browser,
    cache_refresh: timedelta,
    current_item: ScrapedQueuedModel,
    in_queue: QueueClient,
    max_depth: int,
    out_queue: QueueClient,
    timezones: list[str],
    user_agents: list[str],
    viewports: list[ViewportSize],
    whitelist: dict[re.Pattern, list[re.Pattern]],
) -> tuple[int, int, int]:
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
        f = await blob.download_blob(
            blob=cache_name,
            encoding="utf-8",
        )
        cache_item = ScrapedUrlModel.model_validate_json(await f.readall())

        # Skip if previous attempt encountered a server error
        if cache_item.status >= 500:
            logger.info(
                "Loaded %s (%i) from cache, but server error",
                cache_item.url,
                current_item.depth,
            )
            raise ResourceNotFoundError

        # Skip if the cache has no validity date
        if not cache_item.valid_until:
            logger.info(
                "Loaded %s (%i) from cache, no validity date",
                cache_item.url,
                current_item.depth,
            )
            raise ResourceNotFoundError

        # Skip if the cache is explicitly marked as expired
        if cache_item.valid_until and cache_item.valid_until < datetime.now(UTC):
            logger.info(
                "Loaded %s (%i) from cache, but expired",
                cache_item.url,
                current_item.depth,
            )
            raise ResourceNotFoundError

        # Add the links to the queue
        queued_urls = await _queue(
            blob=blob,
            cache_refresh=cache_refresh,
            deph=current_item.depth,
            id=current_id,
            in_queue=in_queue,
            max_depth=max_depth,
            referrer=cache_item.url,
            urls=cache_item.links,
            whitelist=whitelist,
        )

        logger.info(
            "Loaded %s (%i) from cache",
            cache_item.url,
            current_item.depth,
        )

        # Return the number of processed URLs, queued URLs, and total network used
        return (0, queued_urls, 0)

    except (ResourceNotFoundError, ValidationError):
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
            urls=cache_item.links,
            whitelist=whitelist,
        )

        logger.info("Used cache for %s (%i)", cache_item.url, current_item.depth)

        # Return the number of processed URLs, queued URLs, and total network used
        return (0, queued_urls, 0)

    # Output to a blob and queue
    model_bytes = new_result.model_dump_json().encode("utf-8")
    await blob.upload_blob(
        data=model_bytes,
        length=len(model_bytes),
        name=cache_name,
        overwrite=True,
    )

    # Mark current file to be processed for chunking
    await out_queue.send_message(content=f"{SCRAPED_PREFIX}/{current_id}.json")

    # Add the links to the queue
    queued_urls = await _queue(
        blob=blob,
        cache_refresh=cache_refresh,
        deph=current_item.depth,
        id=current_id,
        in_queue=in_queue,
        max_depth=max_depth,
        referrer=new_result.url,
        urls=new_result.links,
        whitelist=whitelist,
    )

    logger.info("Scraped %s (%i)", new_result.url, current_item.depth)

    # Return the number of processed URLs, queued URLs, and total network used
    return (1, queued_urls, new_result.network_used_mb)


async def _worker(
    cache_refresh: timedelta,
    job: str,
    max_depth: int,
    storage_connection_string: str,
    timezones: list[str],
    user_agents: list[str],
    viewports: list[ViewportSize],
    whitelist: dict[re.Pattern, list[re.Pattern]],
) -> None:
    # Init clients
    async with blob_client(
        connection_string=storage_connection_string,
        container=scrape_container_name(job),
    ) as blob:
        async with queue_client(
            connection_string=storage_connection_string,
            queue=scrape_queue_name(job),
        ) as in_queue:
            async with queue_client(
                connection_string=storage_connection_string,
                queue=chunck_queue_name(job),
            ) as out_queue:

                # Init Playwright context
                async with async_playwright() as p:
                    browser_type = p.chromium
                    browser = await browser_type.launch()
                    logger.info("Browser %s launched", browser_type.name)

                    # Process the queue
                    while messages := in_queue.receive_messages(
                        max_messages=32,
                        visibility_timeout=32 * 5,  # 5 secs per message
                    ):
                        total_network_used_mb = 0
                        total_processed = 0
                        total_queued = 0

                        # Iterate over the messages
                        logger.info("Processing new messages")
                        async for message in messages:
                            current_item = ScrapedQueuedModel.model_validate_json(
                                message.content
                            )
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
                        state_blob = blob.get_blob_client(JOB_STATE_NAME)
                        # Acquire a lease
                        logger.debug("Acquiring lease for job state")
                        lease_continue = True
                        while lease_continue:
                            try:
                                state_lease = await state_blob.acquire_lease(
                                    lease_duration=15,
                                    lease_id=str(uuid4()),
                                )
                                lease_continue = False
                            except ResourceExistsError:  # Wait for the lease to expire
                                logger.debug("Lease already exists, waiting")
                                await asyncio.sleep(1)
                            except (
                                ResourceNotFoundError
                            ):  # Create the blob if it does not exist
                                logger.debug(
                                    "State blob does not exist, creating an empty one"
                                )
                                await state_blob.upload_blob(
                                    data=b"",
                                    length=0,
                                    overwrite=True,
                                )
                        # Parse existing state
                        try:
                            f = await state_blob.download_blob(encoding="utf-8")
                            state = StateJobModel.model_validate_json(await f.readall())
                        except (ResourceNotFoundError, ValidationError):
                            state = StateJobModel()
                        # Update state
                        state.last_updated = datetime.now(UTC)
                        state.network_used_mb += total_network_used_mb
                        state.processed += total_processed
                        state.queued += total_queued
                        # Save state
                        await state_blob.upload_blob(
                            data=state.model_dump_json().encode("utf-8"),
                            lease=state_lease.id,
                            length=len(state.model_dump_json()),
                            overwrite=True,
                        )
                        # Release the lease
                        await state_lease.release()
                        logger.info(
                            "Updated job state to %i processed and %i queued",
                            state.processed,
                            state.queued,
                        )

                        # Wait 3 sec to avoid spamming the queue if it is empty
                        await asyncio.sleep(3)

                    logger.info("No more queued messages, exiting")

                    # Close the browser
                    await browser.close()


def _ads_pattern() -> re.Pattern:
    """
    Return a regex pattern to match ads and trackers.
    """
    global _ads_pattern_cache

    if not _ads_pattern_cache:
        counter = 0
        trie = Trie()

        with open(
            encoding="utf-8",
            file=resources_dir("ads-nl.txt"),
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
            _ads_pattern_cache = re.compile(
                r"\b" + trie.pattern() + r"\b", re.IGNORECASE
            )

        # Output is huge, uncomment only for debugging
        # logger.debug("Compiled ads pattern %s", _ads_pattern_cache.pattern)
        logger.info("Loaded %i ads and trackers", counter)

    return _ads_pattern_cache


def _filter_routes(
    size_callback: Callable[[int], None],
) -> Callable[[Route], Awaitable[None]]:
    """
    Speed up page loading by aborting some requests.

    It includes for images, media, fonts, and stylesheets.
    """

    async def _wrapper(
        route: Route,
    ) -> None:
        # Skip UI resources
        if route.request.resource_type in {"image", "media", "font", "stylesheet"}:
            logger.debug("Blocked resource type %s", route.request.resource_type)
            await route.abort("blockedbyclient")
            return

        # Check if the request is to a known ad domain
        if _ads_pattern().search(route.request.url) is not None:
            logger.debug("Blocked ad %s", route.request.url)
            await route.abort("blockedbyclient")
            return

        # Continue the request
        res = await route.fetch()

        # Store content size
        size_bytes = int(content_length) if (content_length := res.headers.get("content-length")) else 0
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
        status: int = -1,
        etag: str | None = None,
        valid_until: datetime | None = None,
    ) -> ScrapedUrlModel:
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
        device_scale_factor=round(random.uniform(1, 3), 1),
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
            logger.debug("Timeout for loading %s", url_clean.geturl())
            return _generic_error(etag=previous_etag)
        except Error:
            logger.error(
                "Unknown error for loading %s", url_clean.geturl(), exc_info=True
            )
            return _generic_error(etag=previous_etag)

        # Remove all routes, as our filter manipulates all requests, we don't need it anymore
        # See: https://github.com/microsoft/playwright/issues/30667#issuecomment-2095788164
        await page.unroute_all(behavior="ignoreErrors")

        # Skip if the content is not HTML
        content_type = res.headers.get("content-type", "")
        if "text/html" not in content_type:
            logger.info("Content type is not HTML, skipping")
            return _generic_error(etag=previous_etag)

        # Check for cache control
        cache_control = res.headers.get("cache-control", "")
        # TODO: Should "private" value be excluded? (see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#private)
        # if "private" in cache_control:
        #     logger.info("Page is marked as private, skipping")
        #     return _generic_error(etag=previous_etag)
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
                status=status,
                valid_until=valid_until,
            )

        # Fetch content
        title = await page.title()
        try:
            html = await (
                await page.wait_for_selector("html")
            ).inner_html()  # Get HTML content of the visible page
        except TimeoutError:  # TODO: Is those timeouts normal? They happen quite often.
            logger.debug("Timeout for selecting HTML content")
            return _generic_error(
                etag=etag,
                valid_until=valid_until,
            )

        # Check for Cloudflare blocking
        if "Why have I been blocked?" in html:
            logger.warning("Blocked by Cloudflare")
            return _generic_error(
                etag=etag,
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
        ):  # When HTML2Text fails to parse the content, it raises an assertion error
            logger.debug(
                "Generic error for parsing HTML content to markdown", exc_info=True
            )
            return _generic_error(
                etag=etag,
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
                path = format_path(urlparse(a_href).path)
                a_url = url_clean._replace(path=path)
            else:
                path = format_path(f"{url_clean.path}/{urlparse(a_href).path}")
                a_url = url_clean._replace(path=path)
            links.add(a_url.geturl())

        # Return result
        return ScrapedUrlModel(
            content=content,
            etag=etag,
            links=list(links),
            raw=html,
            redirect=redirect,
            status=status,
            title=title,
            url=url_clean.geturl(),
            valid_until=valid_until,
        )


def format_path(path: str) -> str:
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
    cache_refresh: int,
    job: str,
    max_depth: int,
    storage_connection_string: str,
    timezones: list[str],
    url: str,
    user_agents: list[str],
    viewports: list[tuple[int, int]],
    whitelist: dict[re.Pattern, list[re.Pattern]],
    processes: int,
) -> None:
    logger.info("Starting scraping job %s", job)

    # Parse cache_refresh
    cache_refresh_parsed = timedelta(hours=cache_refresh)

    # Parse viewports
    viewports_parsed: list[ViewportSize] = []
    for width, height in viewports:
        viewports_parsed.append(ViewportSize(width=width, height=height))

    # Init clients
    async with blob_client(
        connection_string=storage_connection_string,
        container=scrape_container_name(job),
    ) as blob:
        async with queue_client(
            connection_string=storage_connection_string,
            queue=scrape_queue_name(job),
        ) as in_queue:
            # Add initial URL to the queue
            model = ScrapedQueuedModel(
                depth=0,
                referrer="https://www.google.com/search",
                url=url,
            )
            await _queue(
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

    run_workers(
        cache_refresh=cache_refresh_parsed,
        count=processes,
        func=_worker,
        job=job,
        max_depth=max_depth,
        name=f"scrape-{job}",
        storage_connection_string=storage_connection_string,
        timezones=timezones,
        user_agents=user_agents,
        viewports=viewports_parsed,
        whitelist=whitelist,
    )


async def state(
    storage_connection_string: str,
    job: str,
) -> StateJobModel | None:
    # Init clients
    async with blob_client(
        connection_string=storage_connection_string,
        container=scrape_container_name(job),
    ) as blob:
        # Load the state
        state = None
        try:
            f = await blob.download_blob(
                blob=JOB_STATE_NAME,
                encoding="utf-8",
            )
            state = StateJobModel.model_validate_json(await f.readall())
        except (ResourceNotFoundError, ValidationError):
            pass

        # Return model
        return state
