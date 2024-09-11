import asyncio
import random
import re
from collections.abc import Awaitable, Callable
from datetime import UTC, datetime, timedelta
from http import HTTPStatus
from mimetypes import guess_extension
from os import environ as env
from urllib.parse import ParseResult, urlparse

from playwright._impl._driver import compute_driver_executable, get_driver_env
from playwright.async_api import (
    Browser,
    BrowserType,
    ElementHandle,
    Error as PlaywrightError,
    Locator,
    Route,
    TimeoutError,
    ViewportSize,
    async_playwright,
)
from pydantic import ValidationError
from pypandoc import convert_text, ensure_pandoc_installed
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
    pandoc_install_path,
    scrape_container_name,
    scrape_queue_name,
)
from app.helpers.threading import run_workers
from app.helpers.trie import Trie
from app.models.scraped import ScrapedImageModel, ScrapedQueuedModel, ScrapedUrlModel
from app.models.state import StateJobModel, StateScrapedModel
from app.persistence.iblob import (
    BlobNotFoundError,
    IBlob,
    LeaseAlreadyExistsError,
    LeaseNotFoundError,
    Provider as BlobProvider,
)
from app.persistence.iqueue import (
    IQueue,
    MessageNotFoundError,
    Provider as QueueProvider,
)

# State
JOB_STATE_NAME = "job.json"

# Storage
SCRAPED_PREFIX = "scraped"
STATE_PREFIX = "state"

# Ads pattern
_ads_pattern_cache: re.Pattern | None = None


async def _queue(  # noqa: PLR0913
    blob: IBlob,
    cache_refresh: timedelta,
    deph: int,
    in_queue: IQueue,
    item_id: str,
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
        blob=f"{STATE_PREFIX}/{item_id}",
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

        await asyncio.gather(
            # Update the validity cache
            blob.upload_blob(
                blob=f"{STATE_PREFIX}/{hash_url(url)}",
                data=state_bytes,
                length=len(state_bytes),
                overwrite=True,
            ),
            # Add the sub URL to the input queue
            in_queue.send_message(
                ScrapedQueuedModel(
                    depth=new_depth,
                    referrer=referrer,
                    url=url,
                ).model_dump_json(),
            ),
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


async def _process_one(  # noqa: PLR0913
    blob: IBlob,
    browser: Browser,
    cache_refresh: timedelta,
    current_item: ScrapedQueuedModel,
    in_queue: IQueue,
    max_depth: int,
    out_queue: IQueue,
    save_images: bool,
    save_screenshot: bool,
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
    current_id = hash_url(current_item.url)
    blob_prefix = f"{SCRAPED_PREFIX}/{current_id}"
    page_blob_name = f"{blob_prefix}.json"

    # Check if the URL has already been processed
    cache_page = None
    try:
        # Load the cache
        cache_raw = await blob.download_blob(page_blob_name)
        cache_page = ScrapedUrlModel.model_validate_json(cache_raw)

        # Skip if previous attempt encountered a server error
        if cache_page.status >= HTTPStatus.INTERNAL_SERVER_ERROR:
            logger.info(
                "Loaded %s (%i) from cache, but server error",
                cache_page.url,
                current_item.depth,
            )
            raise BlobNotFoundError

        # Skip if the cache has no validity date
        if not cache_page.valid_until:
            logger.info(
                "Loaded %s (%i) from cache, no validity date",
                cache_page.url,
                current_item.depth,
            )
            raise BlobNotFoundError

        # Skip if the cache is explicitly marked as expired
        if cache_page.valid_until and cache_page.valid_until < datetime.now(UTC):
            logger.info(
                "Loaded %s (%i) from cache, but expired",
                cache_page.url,
                current_item.depth,
            )
            raise BlobNotFoundError

        # Add the links to the queue
        queued_urls = await _queue(
            blob=blob,
            cache_refresh=cache_refresh,
            deph=current_item.depth,
            item_id=current_id,
            in_queue=in_queue,
            max_depth=max_depth,
            referrer=cache_page.url,
            urls=set(cache_page.links),
            whitelist=whitelist,
        )

        logger.info(
            "Loaded %s (%i) from cache",
            cache_page.url,
            current_item.depth,
        )

        # Return the number of processed URLs, queued URLs, and total network used
        return (0, queued_urls, 0.0)

    except (BlobNotFoundError, ValidationError):
        logger.debug("Cache miss for %s", current_item.url)

    async def _image_callback(
        body: bytes,
        content_type: str | None,
        image: ScrapedImageModel,
    ) -> None:
        """
        Callback to save images and their metadata.
        """
        # Skip if content type is empty
        if not content_type:
            logger.debug("Empty content type for %s, skipping", image.url)
            return

        # Guess file extension
        extension = guess_extension(content_type)
        if not extension:
            logger.debug(
                "No extension found for %s (%s), skipping", image.url, content_type
            )
            return

        name_prefix = f"{blob_prefix}/{hash_url(image.url)}"
        image_content_blob_name = f"{name_prefix}{extension}"
        image_model_blob_name = f"{name_prefix}.json"
        model_bytes = image.model_dump_json().encode(blob.encoding)
        await asyncio.gather(
            # Store image model
            blob.upload_blob(
                blob=image_model_blob_name,
                data=model_bytes,
                length=len(model_bytes),
                overwrite=True,
            ),
            # Store image content
            blob.upload_blob(
                blob=image_content_blob_name,
                data=body,
                length=len(body),
                overwrite=True,
            ),
        )

    async def _screenshot_callback(
        screenshot: bytes,
    ) -> None:
        """
        Callback to save screenshots.
        """
        screenshot_blob_name = f"{blob_prefix}/screenshot.jpeg"
        await blob.upload_blob(
            blob=screenshot_blob_name,
            data=screenshot,
            length=len(screenshot),
            overwrite=True,
        )

    # Process the URL
    new_page = await _scrape_page(
        browser=browser,
        image_callback=_image_callback,
        previous_etag=cache_page.etag if cache_page else None,
        referrer=current_item.referrer,
        save_images=save_images,
        save_screenshot=save_screenshot,
        screenshot_callback=_screenshot_callback,
        timezones=timezones,
        url=current_item.url,
        user_agents=user_agents,
        viewports=viewports,
    )

    # Use cache data if scraping fails or is cached
    if not new_page and cache_page:
        # Add the links to the queue
        queued_urls = await _queue(
            blob=blob,
            cache_refresh=cache_refresh,
            deph=current_item.depth,
            item_id=current_id,
            in_queue=in_queue,
            max_depth=max_depth,
            referrer=cache_page.url,
            urls=set(cache_page.links),
            whitelist=whitelist,
        )
        logger.info("Used cache for %s (%i)", cache_page.url, current_item.depth)
        # Return the number of processed URLs, queued URLs, and total network used
        return (0, queued_urls, 0.0)

    # TODO: Review the algorithm to avoid the use of exceptions for control flow
    if not new_page:
        raise RuntimeError("Failed to scrape URL and no cache available, fill an issue")

    model_bytes = new_page.model_dump_json().encode(blob.encoding)
    _, _, queued_urls = await asyncio.gather(
        # Store model
        blob.upload_blob(
            blob=page_blob_name,
            data=model_bytes,
            length=len(model_bytes),
            overwrite=True,
        ),
        # Mark current file to be processed for chunking
        out_queue.send_message(f"{SCRAPED_PREFIX}/{current_id}.json"),
        # Add the links to the queue
        _queue(
            blob=blob,
            cache_refresh=cache_refresh,
            deph=current_item.depth,
            item_id=current_id,
            in_queue=in_queue,
            max_depth=max_depth,
            referrer=new_page.url,
            urls=set(new_page.links),
            whitelist=whitelist,
        ),
    )

    # Return the number of processed URLs, queued URLs, and total network used
    logger.info("Scraped %s (%i)", new_page.url, current_item.depth)
    return (1, queued_urls, new_page.network_used_mb)


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

    except (
        LeaseAlreadyExistsError,  # Wait for the lease to expire
        LeaseNotFoundError,  # Race condition, retry
    ):
        # Wait for a bit
        await asyncio.sleep(0.1)
        # Retry
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

    logger.debug(
        "Updated job state to %i processed and %i queued",
        model.processed,
        model.queued,
    )


async def _worker(  # noqa: PLR0913
    azure_storage_connection_string: str,
    blob_path: str,
    blob_provider: BlobProvider,
    browser_name: str,
    cache_refresh: timedelta,
    job: str,
    max_depth: int,
    queue_provider: QueueProvider,
    save_images: bool,
    save_screenshot: bool,
    timezones: list[str],
    user_agents: list[str],
    viewports: list[ViewportSize],
    whitelist: dict[re.Pattern, list[re.Pattern]],
) -> None:
    # Init clients
    async with (
        blob_client(
            azure_storage_connection_string=azure_storage_connection_string,
            container=scrape_container_name(job),
            path=blob_path,
            provider=blob_provider,
        ) as blob,
        queue_client(
            azure_storage_connection_string=azure_storage_connection_string,
            provider=queue_provider,
            queue=scrape_queue_name(job),
        ) as in_queue,
        queue_client(
            azure_storage_connection_string=azure_storage_connection_string,
            provider=queue_provider,
            queue=index_queue_name(job),
        ) as out_queue,
    ):
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
                logger.debug("Processing new messages")
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
                    elif browser_usage < 100:  # noqa: PLR2004
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
                            save_images=save_images,
                            save_screenshot=save_screenshot,
                            timezones=timezones,
                            user_agents=user_agents,
                            viewports=viewports,
                            whitelist=whitelist,
                        )

                        try:
                            await in_queue.delete_message(message)
                        except MessageNotFoundError:  # Race condition, message has already been deleted by another worker, pass silently to the next message, as it has already been processed
                            continue

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

                # Update job state if data was processed
                if total_network_used_mb > 0 or total_processed > 0 or total_queued > 0:
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
    global _ads_pattern_cache  # noqa: PLW0603

    if not _ads_pattern_cache:
        counter = 0
        trie = Trie()

        with open(
            encoding="utf-8",
            file=dir_resources("ads-nl.txt"),
        ) as f:
            # Parse the list of domains
            for domain_raw in f.readlines():
                domain_clean = domain_raw.strip()
                if not domain_clean or domain_clean.startswith("#"):
                    continue
                trie.add(domain_clean)
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
    image_callback: Callable[[bytes, str | None, ScrapedImageModel], Awaitable[None]],
    network_used_callback: Callable[[int], None],
    reduce_network: bool,
    save_images: bool,
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
        # Skip UI resources if network reduction is enabled
        if reduce_network and route.request.resource_type in {
            "media",
            "font",
            "stylesheet",
        }:
            logger.debug("Blocked resource type %s", route.request.resource_type)
            await route.abort("blockedbyclient")
            return

        url_clean = _clean_url(route.request.url).geturl()

        # Check if the request is to a known ad domain
        if pattern := _ads_pattern():
            if pattern.search(url_clean) is not None:
                logger.debug("Blocked ad %s", url_clean)
                await route.abort("blockedbyclient")
                return

        # Remove client hints
        headers = route.request.headers
        for header in list(headers.keys()):
            if header.startswith("sec-ch-"):
                del headers[header]

        # Continue the request
        try:
            res = await route.fetch(
                headers=headers,  # Send the modified headers
                max_retries=3,  # Retry 3 times on network errors
            )
        except PlaywrightError:
            logger.debug("Failed to fetch resource %s", url_clean)
            return

        # Persist the image, if it is an image
        if route.request.resource_type == "image":
            # Skip if download is disabled
            if not save_images:
                await route.abort("blockedbyclient")
                return

            # Check for status code
            status = res.status
            if status != HTTPStatus.OK:  # Parse the content only if status is OK
                logger.debug("Failed to download image %s (%i)", url_clean, status)
                await route.abort("failed")
                return

            # Consume the response
            body = await res.body()
            content_type = res.headers.get("content-type")
            redirect = res.url

            # Callback to save the image
            await image_callback(
                body,
                content_type,
                ScrapedImageModel(
                    redirect=redirect,
                    status=status,
                    url=url_clean,
                ),
            )
            logger.debug("Downloaded image %s", url_clean)

        # Store content size
        size_bytes = (
            int(content_length)
            if (content_length := res.headers.get("content-length"))
            else 0
        )
        network_used_callback(size_bytes)

        # Continue the request
        await route.fulfill(response=res)

    return _wrapper


async def _scrape_page(  # noqa: PLR0913, PLR0911, PLR0912, PLR0915
    browser: Browser,
    image_callback: Callable[[bytes, str | None, ScrapedImageModel], Awaitable[None]],
    previous_etag: str | None,
    referrer: str,
    save_images: bool,
    save_screenshot: bool,
    screenshot_callback: Callable[[bytes], Awaitable[None]],
    timezones: list[str],
    url: str,
    user_agents: list[str],
    viewports: list[ViewportSize],
) -> ScrapedUrlModel | None:
    """
    Scrape a link and return the content and links.

    Pages are requested in English, using a random user agent in a Playwright browser. All links are extracted from the HTML content.
    """
    network_used_bytes = 0
    url_clean = _clean_url(url)

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
            network_used_mb=network_used_bytes / 1024 / 1024,
            status=status,
            url=url_clean.geturl(),
            valid_until=valid_until,
        )

    def _network_used_callback(size_bytes: int) -> None:
        nonlocal network_used_bytes
        network_used_bytes += size_bytes

    # Load page
    async with (
        await browser.new_context(
            # Performance
            accept_downloads=False,  # Disable downloads, we won't use them
            # Ease of use
            ignore_https_errors=True,  # Could be a security risk, but we are scraping, not browsing or testing
            # Privacy (random user context)
            color_scheme=random.choice(["dark", "light", "no-preference"]),
            device_scale_factor=random.randint(1, 3),
            has_touch=random.choice([True, False]),
            locale="en-US",
            timezone_id=random.choice(list(timezones)),
            user_agent=random.choice(list(user_agents)),
            viewport=random.choice(viewports),
        ) as context
    ):
        page = await context.new_page()

        # Apply filtering to reduce traffic and CPU usage
        await page.route(
            "**/*",
            _filter_routes(
                image_callback=image_callback,
                network_used_callback=_network_used_callback,
                reduce_network=not save_screenshot,
                save_images=save_images,
            ),
        )

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
        if previous_etag and res.status == HTTPStatus.NOT_MODIFIED:
            logger.info("Resource not modified, skipping")
            return
        # Save etag for future requests
        etag = res.headers.get("etag")

        # Check for status code
        status = res.status
        if status != HTTPStatus.OK:
            return _generic_error(
                etag=etag,
                message=f"Status code {status}, not 200",
                status=status,
                valid_until=valid_until,
            )

        # Get title value, HTML selector, full page content, and all links
        (
            title,
            body_selector,
            full_html,
            links_selector,
            metas_selector,
        ) = await asyncio.gather(
            # Page title specified in the metadata
            page.title(),
            # HTML tag element (= body)
            page.query_selector("html"),
            # Entire DOM (= all HTML)
            page.content(),
            # All elements treated as links
            page.get_by_role(
                "link",
                include_hidden=True,  # Gather links in navigation menus, those are usually hidden
            ).all(),
            # All meta tags
            page.query_selector_all("head > meta"),
        )

        # Extract body
        body_html = None
        if body_selector:
            body_html = await body_selector.inner_html()

        # Skip if no HTML content
        if not body_html:
            return _generic_error(
                etag=etag,
                message="No HTML content returned",
                valid_until=valid_until,
            )

        # Check for Cloudflare blocking
        if "Why have I been blocked?" in body_html:
            return _generic_error(
                etag=etag,
                message="Blocked by Cloudflare",
                status=403,
                valid_until=valid_until,
            )

        # Extract text content
        # TODO: Make it async with a wrapper
        try:
            # Convert HTML to Markdown
            full_markdown = convert_text(
                format="html",  # Input is HTML
                sandbox=True,  # Enable sandbox mode, we don't know what we are scraping
                source=full_html,
                to="markdown-fenced_divs-native_divs-raw_html-bracketed_spans-native_spans-link_attributes-header_attributes-inline_code_attributes",
                extra_args=[
                    "--embed-resources=false",
                    "--wrap=none",
                ],
            )
            # Filter out icons
            full_markdown = "\n".join(
                [
                    line
                    for line in full_markdown.splitlines()
                    if "![](data:image/" not in line
                ]
            )
            # Filter out embedded images but keep the alt text
            full_markdown = re.sub(
                r"!\[(.*)]\(data:image/.*\)",
                r"![\1]()",
                full_markdown,
            )
            # Clean up by removing double newlines
            full_markdown = re.sub(r"\n\n+", "\n\n", full_markdown)

        except (
            RuntimeError
        ) as e:  # pypandoc raises a RuntimeError if Pandoc returns one
            return _generic_error(
                etag=etag,
                message=f"HTML to text conversion failed: {e}",
                valid_until=valid_until,
            )

        # Extract links
        async def _extract_link(selector: Locator) -> str | None:
            try:
                href = await selector.get_attribute(
                    name="href",
                    timeout=1000,  # 1 second
                )
            except (
                TimeoutError
            ):  # TODO: Is those timeouts normal? They happen quite often
                logger.debug("Timeout for selecting href attribute", exc_info=True)
                return
            # Skip if no href attribute
            if not href:
                return
            # href is a full URL
            if href.startswith("http"):
                return urlparse(href).geturl()
            # href is a relative URL
            if href.startswith("/"):
                path = _format_path(urlparse(href).path)
                return url_clean._replace(path=path).geturl()
            # href is a relative URL with a path
            path = _format_path(f"{url_clean.path}/{urlparse(href).path}")
            return url_clean._replace(path=path).geturl()

        # Extract links
        links = set(
            [
                link
                for link in await asyncio.gather(
                    *[_extract_link(selector) for selector in links_selector]
                )
                if link
            ]
        )

        async def _extract_meta(
            element: ElementHandle,
        ) -> tuple[str, str | None] | None:
            """
            Extract a meta tag from an element.

            Name and content are returned. Other attributes are ignored.

            See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attributes
            """
            name, content = await asyncio.gather(
                element.get_attribute("name"),
                element.get_attribute("content"),
            )
            if not name:
                return
            return (name, content or None)

        # Extract meta tags
        metas: dict[str, str | None] = {
            tag[0]: tag[1]
            for tag in await asyncio.gather(
                *[_extract_meta(meta) for meta in metas_selector]
            )
            if tag
        }

        # Save screenshot if requested
        if save_screenshot:
            # Take it
            screenshot = await page.screenshot(
                animations="disabled",  # Avoid animations to perturb the render
                full_page=True,  # Store the full page
                quality=70,  # Quality is not a concern, let's keep it cheap to store
                scale="css",  # Keep the same zoom level for all screenshots across random viewports
                timeout=30000,  # 30 seconds
                type="jpeg",  # JPEG is good enough for screenshots
            )
            # Callback to save the screenshot
            await screenshot_callback(screenshot)
            logger.debug("Saved screenshot for %s", url_clean.geturl())

        # Get final URL after redirects
        redirect = res.url

        # Return result
        return ScrapedUrlModel(
            content=full_markdown,
            etag=etag,
            links=list(links),
            metas=metas,
            network_used_mb=network_used_bytes / 1024 / 1024,
            raw=body_html,
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


async def run(  # noqa: PLR0913
    azure_storage_connection_string: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
    cache_refresh: int,
    job: str,
    max_depth: int,
    processes: int,
    queue_provider: QueueProvider,
    save_images: bool,
    save_screenshot: bool,
    timezones: list[str],
    url: str,
    user_agents: list[str],
    viewports: list[tuple[int, int]],
    whitelist: dict[re.Pattern, list[re.Pattern]],
) -> None:
    logger.info("Start scraping job %s", job)

    # Install Playwright
    browser_name = "chromium"
    async with async_playwright() as p:
        browser_type = getattr(p, browser_name)
        await _install_browser(browser_type)

    # Install Pandoc
    await _install_pandoc()

    # Parse cache_refresh
    cache_refresh_parsed = timedelta(hours=cache_refresh)

    # Parse viewports
    viewports_parsed: list[ViewportSize] = []
    for width, height in viewports:
        viewports_parsed.append(ViewportSize(width=width, height=height))

    # Init clients
    async with (
        blob_client(
            azure_storage_connection_string=azure_storage_connection_string,
            container=scrape_container_name(job),
            path=blob_path,
            provider=blob_provider,
        ) as blob,
        queue_client(
            azure_storage_connection_string=azure_storage_connection_string,
            provider=queue_provider,
            queue=scrape_queue_name(job),
        ) as in_queue,
    ):
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
            item_id=hash_url(model.referrer),
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
        save_images=save_images,
        save_screenshot=save_screenshot,
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


async def _install_browser(
    browser_type: BrowserType,
    with_deps: bool = False,
) -> None:
    """
    Install Playwright selected browser.

    Download is persisted in the application cache directory. If requested, also install system dependencies requested by the framework. Those requires root permissions on Linux systems as the system package manager will be called.
    """
    # Add installation path to the environment
    # See: https://playwright.dev/docs/browsers#hermetic-install
    env["PLAYWRIGHT_BROWSERS_PATH"] = await browsers_install_path()

    # Get location of Playwright driver
    driver_executable, driver_cli = compute_driver_executable()

    # Build the command arguments
    args = [driver_executable, driver_cli, "install", browser_type.name]
    if with_deps:
        args.append("--with-deps")

    # Run
    proc = await asyncio.create_subprocess_shell(
        cmd=" ".join(args),
        env=get_driver_env(),
    )
    await proc.wait()

    # Display error logs if any
    err = proc.stderr
    if err:
        logger.error("Browser install error:\n%s", await err.read())

    # Display standard logs if any
    logs = proc.stdout
    if logs:
        logger.info("Browser install logs:\n%s", await logs.read())

    if proc.returncode != 0:
        raise RuntimeError("Failed to install browser")


async def _get_broswer(
    browser_type: BrowserType,
) -> Browser:
    """
    Launch a browser instance.
    """
    # Using the application path not the default one from the SDK
    playwright_path = await browsers_install_path()

    # Launch the browser
    browser = await browser_type.launch(
        downloads_path=playwright_path,
        chromium_sandbox=True,  # Enable the sandbox for security, we don't know what we are scraping
        # See: https://github.com/microsoft/playwright/blob/99a36310570617222290c09b96a2026beb8b00f9/packages/playwright-core/src/server/chromium/chromium.ts
        args=[
            "--disable-gl-drawing-for-tests",  # Disable UI rendering, lower CPU usage
        ],
    )
    return browser


async def _install_pandoc() -> None:
    """
    Install Pandoc.

    Download is persisted in the application cache directory.
    """
    # Fix version is necesssary to have reproducible builds
    # See: https://github.com/jgm/pandoc/releases
    version = "3.2.1"

    # Get location of Pandoc driver
    install_path = await pandoc_install_path(version)

    # Download Pandoc if not installed
    ensure_pandoc_installed(
        delete_installer=True,
        targetfolder=install_path,
        version=version,
    )

    # Add installation path to the environment
    # See: https://github.com/JessicaTegner/pypandoc?tab=readme-ov-file#specifying-the-location-of-pandoc-binaries
    env["PYPANDOC_PANDOC"] = install_path


def _clean_url(url: str) -> ParseResult:
    """
    Remove query and fragment from an URL.

    Returns a ParseResult object.
    """
    return urlparse(url)._replace(
        query="",
        fragment="",
    )
