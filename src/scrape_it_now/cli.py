import asyncio
import functools
import random
import re
import string
import sys
from platform import python_version

import click

from scrape_it_now.helpers.logging import enable_debug_logging, logger
from scrape_it_now.helpers.monitoring import VERSION
from scrape_it_now.helpers.threading import DEFAULT_WORKERS_COUNT
from scrape_it_now.index import run as index_backend_run
from scrape_it_now.persistence.iblob import Provider as BlobProvider
from scrape_it_now.persistence.iqueue import Provider as QueueProvider
from scrape_it_now.persistence.isearch import Provider as SearchProvider
from scrape_it_now.persistence.local_disk import BLOB_DEFAULT_PATH
from scrape_it_now.scrape import (
    install as scrape_backend_install,
    run as scrape_backend_run,
    state as scrape_backend_state,
)


def run_in_async(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return asyncio.run(func(*args, **kwargs))

    return wrapper


def common_params(func):
    @click.option(
        "--debug",
        envvar="DEBUG",
        help="Enable debug logging.",
        is_flag=True,
    )
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        if kwargs.pop("debug") is True:
            enable_debug_logging()
        return func(*args, **kwargs)

    return wrapper


def azure_storage_params(func):
    @click.option(
        "--azure-storage-access-key",
        "-asak",
        envvar="AZURE_STORAGE_ACCESS_KEY",
        help="Azure Storage access key. Used for Azure Blob Storage and Azure Queue Storage providers. If not prvided, AAD identity will be used.",
        hide_input=True,
        type=str,
    )
    @click.option(
        "--azure-storage-account-name",
        "-asan",
        envvar="AZURE_STORAGE_ACCOUNT_NAME",
        help="Azure Storage account name. Mandatory for Azure Blob Storage and Azure Queue Storage providers.",
        type=str,
    )
    @click.option(
        "--azure-storage-endpoint-suffix",
        "-ases",
        default="core.windows.net",
        envvar="AZURE_STORAGE_ENDPOINT_SUFFIX",
        help="Azure Storage endpoint suffix. Mandatory for Azure Blob Storage and Azure Queue Storage providers.",
        type=str,
    )
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)

    return wrapper


@click.group
def cli() -> None:
    """
    🛰️ Scrape It Now!

    Web scraper made for AI and simplicity in mind. It runs as a CLI that can be parallelized and outputs high-quality markdown content.
    """
    pass


@cli.command
@common_params
def version() -> None:
    """
    Print the version.
    """
    click.echo(f"Scrape It Now! v{VERSION} (Python v{python_version()})")


@cli.group
def scrape() -> None:
    """
    Scrape a website to get its content.
    """
    pass


@click.option(
    "--with-deps",
    "-wd",
    envvar="WITH_DEPS",
    help="Install system dependencies required for the scraper. Be warning to run this command with enough permissions.",
    is_flag=True,
)
@scrape.command("install")
@common_params
@run_in_async
async def scrape_install(with_deps: bool) -> None:
    """
    Install all dependencies required for the scraper.
    """
    await scrape_backend_install(with_deps)


@click.option(
    "--max-depth",
    "-md",
    default=3,
    envvar="MAX_DEPTH",
    help="Maximum depth to scrape. This is the number of iterative links to follow from the initial URL. Be warning that the number of pages to scrape grows exponentially with the depth, this can lead to millions of pages to scrape.",
    required=True,
    type=int,
)
@click.option(
    "--cache-refresh",
    "-cr",
    default=24 * 7,
    envvar="CACHE_REFRESH",
    help="Cache refresh time in hours. After this delay, the cache is considered stale and the page is rescraped if needed.",
    required=True,
    type=int,
)
@click.option(
    "--whitelist",
    "-w",
    envvar="WHITELIST",
    help="Comma separated list of domains and paths to whitelist. Example, to filter nytimes.com and only the pages from 2024 pages, use 'nytimes.com,^/2024/'.",
    multiple=True,
    type=str,
)
@click.option(
    "--user-agent",
    "-ua",
    envvar="USER_AGENT",
    help="Comma separated list of user agents to scrape. They are used to generate random browser profiles.",
    multiple=True,
    required=True,
    type=str,
    default=[
        # Chrome macOS 12
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/126.0.2592.113",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        # Chrome Windows 11
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/126.0.2592.113",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    ],
)
@click.option(
    "--timezone",
    "-tz",
    envvar="TIMEZONE",
    help="Comma separated list of timezones to scrape. Example, 'America/New_York,Europe/London'. They are used to generate random browser profiles.",
    multiple=True,
    required=True,
    type=str,
    default=[
        # Africa
        "Africa/Johannesburg",
        # America
        "America/Chicago",
        "America/Denver",
        "America/Los_Angeles",
        "America/New_York",
        # Asia
        "Asia/Tokyo",
        # Australia
        "Australia/Sydney",
        # Europe
        "Europe/London",
        "Europe/Paris",
    ],
)
@click.option(
    "--viewport",
    "-v",
    envvar="VIEWPORT",
    help="Comma separated list of viewports to scrape. Example, '1920x1080,1280x720'. They are used to generate random browser profiles.",
    multiple=True,
    required=True,
    type=str,
    default=[
        # Large
        "1920x1080",
        # Small
        "1280x720",
        "400x300",
        "800x600",
    ],
)
@click.option(
    "--blob-provider",
    "-bp",
    default=BlobProvider.AZURE_BLOB_STORAGE,
    envvar="BLOB_PROVIDER",
    help="Blob provider to use.",
    required=True,
    type=click.Choice([x.value for x in BlobProvider]),
)
@click.option(
    "--queue-provider",
    "-qp",
    default=QueueProvider.AZURE_QUEUE_STORAGE,
    envvar="QUEUE_PROVIDER",
    help="Queue provider to use.",
    required=True,
    type=click.Choice([x.value for x in QueueProvider]),
)
@click.option(
    "--blob-path",
    "-bpa",
    default=BLOB_DEFAULT_PATH,
    envvar="BLOB_PATH",
    help="Path to the blob container. Mandatory for Local Disk Blob provider.",
    type=str,
)
@click.option(
    "--processes",
    "-p",
    default=DEFAULT_WORKERS_COUNT,
    envvar="PROCESSES",
    help="Number of processes to use for scraping.",
    required=True,
    type=click.IntRange(min=1),
)
@click.option(
    "--job-name",
    "-jn",
    envvar="JOB_NAME",
    help="Name of the job. If not provided, a random name will be generated. Job name is not tested for uniqueness.",
    type=str,
)
@click.option(
    "--save-images",
    "-si",
    envvar="SAVE_IMAGES",
    help="Save images from the pages.",
    is_flag=True,
)
@click.option(
    "--save-screenshot",
    "-ss",
    envvar="SAVE_SCREENSHOT",
    help="Save screenshots of the pages.",
    is_flag=True,
)
@click.argument(
    "url",
    envvar="URL",
)
@scrape.command("run")
@common_params
@azure_storage_params
@run_in_async
async def scrape_run(  # noqa: PLR0913
    azure_storage_access_key: str | None,
    azure_storage_account_name: str | None,
    azure_storage_endpoint_suffix: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
    cache_refresh: int,
    job_name: str | None,
    max_depth: int,
    processes: int,
    queue_provider: QueueProvider,
    save_images: bool,
    save_screenshot: bool,
    timezone: list[str],
    url: str,
    user_agent: list[str],
    viewport: list[str],
    whitelist: list[str],
) -> None:
    """
    Run a scraping job.

    A job is primarily defined by the URL to scrape and a job name.

    Program is built to be idempotent. Multiple runs of the same job can be ran simultaneously and won't duplicate data.
    """
    # Parse job name
    job_name_parsed = _job_name(job_name)

    # Parse viewports
    viewports_parsed: list[tuple[int, int]] = []
    for v in viewport:
        width, height = v.split("x")
        viewports_parsed.append((int(width), int(height)))
    if viewports_parsed:
        logger.debug("Parsed viewports: %s", viewports_parsed)

    # Parse whitelist
    whitelist_parsed: dict[re.Pattern, list[re.Pattern]] = {}
    for w in whitelist:
        # Parse domain
        domain = w.split(",")[0]
        domain = re.compile(domain.strip())
        if domain not in whitelist_parsed:
            whitelist_parsed[domain] = []
        # Parse paths
        for path_str in w.split(",")[1:]:
            path_re = re.compile(path_str.strip())
            whitelist_parsed[domain].append(path_re)
    if whitelist_parsed:
        logger.info("Whitelist: %s", whitelist_parsed)

    await scrape_backend_run(
        azure_storage_access_key=azure_storage_access_key,
        azure_storage_account_name=azure_storage_account_name,
        azure_storage_endpoint_suffix=azure_storage_endpoint_suffix,
        blob_path=blob_path,
        blob_provider=blob_provider,
        cache_refresh=cache_refresh,
        job=job_name_parsed,
        max_depth=max_depth,
        processes=processes,
        queue_provider=queue_provider,
        save_images=save_images,
        save_screenshot=save_screenshot,
        timezones=timezone,
        url=url,
        user_agents=user_agent,
        viewports=viewports_parsed,
        whitelist=whitelist_parsed,
    )


@click.option(
    "--blob-provider",
    "-bp",
    default=BlobProvider.AZURE_BLOB_STORAGE,
    envvar="BLOB_PROVIDER",
    help="Blob provider to use.",
    required=True,
    type=click.Choice([x.value for x in BlobProvider]),
)
@click.option(
    "--blob-path",
    "-bpa",
    default=BLOB_DEFAULT_PATH,
    envvar="BLOB_PATH",
    help="Path to the blob container. Mandatory for Local Disk Blob provider.",
    type=str,
)
@click.argument(
    "job_name",
    envvar="JOB_NAME",
)
@scrape.command("status")
@common_params
@azure_storage_params
@run_in_async
async def scrape_status(  # noqa: PLR0913
    azure_storage_access_key: str | None,
    azure_storage_account_name: str | None,
    azure_storage_endpoint_suffix: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
    job_name: str,
) -> None:
    """
    Get the state of a scraping job.
    """
    state = await scrape_backend_state(
        azure_storage_access_key=azure_storage_access_key,
        azure_storage_account_name=azure_storage_account_name,
        azure_storage_endpoint_suffix=azure_storage_endpoint_suffix,
        blob_path=blob_path,
        blob_provider=blob_provider,
        job=job_name,
    )

    # Log error if no state found
    if not state:
        # TODO: Respect JSON output?
        logger.info("No state found for job %s", job_name)
        return

    # Log state
    click.echo(state.model_dump_json())


@cli.group
def index() -> None:
    """
    Index the scraped content to make it semantically searchable.
    """
    pass


@click.option(
    "--blob-provider",
    "-bp",
    default=BlobProvider.AZURE_BLOB_STORAGE,
    envvar="BLOB_PROVIDER",
    help="Blob provider to use.",
    required=True,
    type=click.Choice([x.value for x in BlobProvider]),
)
@click.option(
    "--queue-provider",
    "-qp",
    default=QueueProvider.AZURE_QUEUE_STORAGE,
    envvar="QUEUE_PROVIDER",
    help="Queue provider to use.",
    required=True,
    type=click.Choice([x.value for x in QueueProvider]),
)
@click.option(
    "--search-provider",
    "-sp",
    default=SearchProvider.AZURE_SEARCH,
    envvar="SEARCH_PROVIDER",
    help="Search provider to use.",
    required=True,
    type=click.Choice([x.value for x in SearchProvider]),
)
@click.option(
    "--blob-path",
    "-bpa",
    default=BLOB_DEFAULT_PATH,
    envvar="BLOB_PATH",
    help="Path to the blob container. Mandatory for Local Disk Blob provider.",
    type=str,
)
@click.option(
    "--azure-openai-embedding-dimensions",
    "-aoed",
    envvar="AZURE_OPENAI_EMBEDDING_DIMENSIONS",
    help="Dimensions of the OpenAI embedding model.",
    required=True,
    type=int,
)
@click.option(
    "--azure-openai-embedding-deployment-name",
    "-aoedn",
    envvar="AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME",
    help="Deployment name of the OpenAI embedding model.",
    required=True,
    type=str,
)
@click.option(
    "--azure-openai-embedding-model-name",
    "-aoemn",
    envvar="AZURE_OPENAI_EMBEDDING_MODEL_NAME",
    help="Model name of the OpenAI embedding model.",
    required=True,
    type=str,
)
@click.option(
    "--processes",
    "-p",
    default=DEFAULT_WORKERS_COUNT,
    envvar="PROCESSES",
    help="Number of processes to use for indexing.",
    required=True,
    type=click.IntRange(min=1),
)
@click.option(
    "--azure-search-api-key",
    "-asak",
    envvar="AZURE_SEARCH_API_KEY",
    help="Azure Search API key. Mandatory for Azure AI Search provider. Otherwise, AAD identity is used.",
    type=str,
)
@click.option(
    "--azure-search-endpoint",
    "-ase",
    envvar="AZURE_SEARCH_ENDPOINT",
    help="Azure Search endpoint. Mandatory for Azure AI Search provider.",
    type=str,
)
@click.option(
    "--azure-openai-api-key",
    "-aoak",
    envvar="AZURE_OPENAI_API_KEY",
    help="Azure OpenAI API key.",
    type=str,
)
@click.option(
    "--openai-api-version",
    "-oav",
    default="2024-06-01",
    envvar="OPENAI_API_VERSION",
    help="OpenAI API version.",
    required=True,
    type=str,
)
@click.option(
    "--azure-openai-endpoint",
    "-aoe",
    envvar="AZURE_OPENAI_ENDPOINT",
    help="Azure OpenAI endpoint.",
    required=True,
    type=str,
)
@click.option(
    "--force",
    "-f",
    envvar="FORCE",
    help="Force reindexing of the data.",
    is_flag=True,
)
@click.argument(
    "job_name",
    envvar="JOB_NAME",
)
@index.command("run")
@azure_storage_params
@common_params
@run_in_async
async def index_run(  # noqa: PLR0913
    azure_openai_api_key: str | None,
    azure_openai_embedding_deployment_name: str,
    azure_openai_embedding_dimensions: int,
    azure_openai_embedding_model_name: str,
    azure_openai_endpoint: str,
    azure_search_api_key: str | None,
    azure_search_endpoint: str | None,
    azure_storage_access_key: str | None,
    azure_storage_account_name: str | None,
    azure_storage_endpoint_suffix: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
    force: bool,
    job_name: str,
    openai_api_version: str,
    processes: int,
    queue_provider: QueueProvider,
    search_provider: SearchProvider,
) -> None:
    """
    Run an indexing job.

    An indexing job is primarily defined by the job name. The job name refers to a scraping job that has already been ran or is currently running.

    Program is built to be idempotent. Multiple runs of the same job can be ran simultaneously and won't duplicate data.
    """
    await index_backend_run(
        azure_openai_api_key=azure_openai_api_key,
        azure_openai_embedding_deployment=azure_openai_embedding_deployment_name,
        azure_openai_embedding_dimensions=azure_openai_embedding_dimensions,
        azure_openai_embedding_model=azure_openai_embedding_model_name,
        azure_openai_endpoint=azure_openai_endpoint,
        azure_search_api_key=azure_search_api_key,
        azure_search_endpoint=azure_search_endpoint,
        azure_storage_access_key=azure_storage_access_key,
        azure_storage_account_name=azure_storage_account_name,
        azure_storage_endpoint_suffix=azure_storage_endpoint_suffix,
        blob_path=blob_path,
        blob_provider=blob_provider,
        force=force,
        job=job_name,
        openai_api_version=openai_api_version,
        processes=processes,
        queue_provider=queue_provider,
        search_provider=search_provider,
    )


def _job_name(job_name: str | None) -> str:
    """
    Get the job name.

    If no job name is provided, generate a random name. Name is not tested for uniqueness.
    """
    return job_name or "".join(
        random.choices(string.ascii_lowercase + string.digits, k=7)
    )


def main() -> None:
    """
    Wrapper to run the CLI with a project script entrypoint.

    This is the main entrypoint for the CLI. It is used to inject the system truststore into the SSL context.
    """
    # Make sure all SSL certificates come from the system truststore
    import truststore

    truststore.inject_into_ssl()

    # Run the CLI
    cli(sys.argv[1:])
