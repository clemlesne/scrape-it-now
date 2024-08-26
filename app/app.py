import asyncio
import functools
import random
import re
import string
import sys
from os import cpu_count, environ as env
from platform import python_version

import click

from app.helpers.logging import logger
from app.helpers.monitoring import VERSION
from app.index import run as index_backend_run
from app.persistence.iblob import Provider as BlobProvider
from app.persistence.iproxy import Provider as ProxyProvider
from app.persistence.iqueue import Provider as QueueProvider
from app.persistence.isearch import Provider as SearchProvider
from app.persistence.local_disk import BLOB_DEFAULT_PATH
from app.scrape import run as scrape_backend_run, state as scrape_backend_state


def run_in_async(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return asyncio.run(func(*args, **kwargs))

    return wrapper


@click.group
def cli() -> None:
    """
    🛰️ Scrape It Now!

    A website to scrape? There's a simple way.
    """
    pass


@cli.command
def version() -> None:
    """
    Print the version.
    """
    logger.info("Scrape It Now! v%s (Python v%s)", VERSION, python_version())


@cli.group
def scrape() -> None:
    """
    Scrape a website to get its content.
    """
    pass


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
    "--proxy-provider",
    "-pp",
    default=ProxyProvider.NO_PROXY,
    envvar="PROXY_PROVIDER",
    help="Proxy provider to use.",
    required=True,
    type=click.Choice([x.value for x in ProxyProvider]),
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
    "--azure-storage-connection-string",
    "-ascs",
    envvar="AZURE_STORAGE_CONNECTION_STRING",
    help="Azure Storage connection string. Mandatory for Azure Blob Storage and Azure Queue Storage providers.",
    hide_input=True,
    type=str,
)
@click.option(
    "--processes",
    "-p",
    default=int((cpu_count() or 4) / 2),
    envvar="PROCESSES",
    help="Number of processes to use for scraping.",
    required=True,
    type=int,
)
@click.option(
    "--job-name",
    "-jn",
    help="Name of the job. If not provided, a random name will be generated. Job name is not tested for uniqueness.",
    type=str,
)
@click.argument(
    "url",
    envvar="URL",
)
@scrape.command("run")
@run_in_async
async def scrape_run(  # noqa: PLR0913
    azure_storage_connection_string: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
    cache_refresh: int,
    job_name: str | None,
    max_depth: int,
    processes: int,
    proxy_provider: ProxyProvider,
    queue_provider: QueueProvider,
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
        logger.info("Viewports: %s", viewports_parsed)

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
        azure_storage_connection_string=azure_storage_connection_string,
        blob_path=blob_path,
        blob_provider=blob_provider,
        cache_refresh=cache_refresh,
        job=job_name_parsed,
        max_depth=max_depth,
        processes=processes,
        proxy_provider=proxy_provider,
        queue_provider=queue_provider,
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
@click.option(
    "--azure-storage-connection-string",
    "-ascs",
    envvar="AZURE_STORAGE_CONNECTION_STRING",
    help="Azure Storage connection string. Mandatory for Azure Blob Storage provider.",
    hide_input=True,
    type=str,
)
@click.argument(
    "job_name",
    envvar="JOB_NAME",
)
@scrape.command("status")
@run_in_async
async def scrape_status(
    azure_storage_connection_string: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
    job_name: str,
) -> None:
    """
    Get the state of a scraping job.
    """
    state = await scrape_backend_state(
        blob_path=blob_path,
        blob_provider=blob_provider,
        job=job_name,
        azure_storage_connection_string=azure_storage_connection_string,
    )

    # Log error if no state found
    if not state:
        # TODO: Respect JSON output?
        logger.info("No state found for job %s", job_name)
        return

    # Log state
    logger.info(state.model_dump_json())


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
    "--azure-storage-connection-string",
    "-ascs",
    envvar="AZURE_STORAGE_CONNECTION_STRING",
    help="Azure Storage connection string. Mandatory for Azure Blob Storage and Azure Queue Storage providers.",
    hide_input=True,
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
    default=int((cpu_count() or 4) / 2),
    envvar="PROCESSES",
    required=True,
    type=int,
)
@click.option(
    "--azure-search-api-key",
    "-asak",
    envvar="AZURE_SEARCH_API_KEY",
    help="Azure Search API key. Mandatory for Azure AI Search provider.",
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
    required=True,
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
@click.argument(
    "job_name",
    envvar="JOB_NAME",
)
@index.command("run")
@run_in_async
async def index_run(  # noqa: PLR0913
    azure_openai_api_key: str,
    azure_openai_embedding_deployment_name: str,
    azure_openai_embedding_dimensions: int,
    azure_openai_embedding_model_name: str,
    azure_openai_endpoint: str,
    azure_search_api_key: str | None,
    azure_search_endpoint: str | None,
    azure_storage_connection_string: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
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
        azure_search_api_key=azure_search_api_key,
        azure_search_endpoint=azure_search_endpoint,
        azure_openai_api_key=azure_openai_api_key,
        azure_openai_embedding_deployment=azure_openai_embedding_deployment_name,
        azure_openai_embedding_dimensions=azure_openai_embedding_dimensions,
        azure_openai_embedding_model=azure_openai_embedding_model_name,
        azure_openai_endpoint=azure_openai_endpoint,
        blob_path=blob_path,
        blob_provider=blob_provider,
        job=job_name,
        openai_api_version=openai_api_version,
        processes=processes,
        queue_provider=queue_provider,
        search_provider=search_provider,
        azure_storage_connection_string=azure_storage_connection_string,
    )


def _job_name(job_name: str | None) -> str:
    """
    Get the job name.

    If no job name is provided, generate a random name. Name is not tested for uniqueness.
    """
    return job_name or "".join(
        random.choices(string.ascii_lowercase + string.digits, k=7)
    )


if getattr(sys, "frozen", False) and hasattr(sys, "_MEIPASS"):  # Running in PyInstaller
    import certifi

    # Path the bundle with certifi
    # See: https://github.com/Azure/azure-iot-sdk-python/issues/991#issuecomment-1118235694
    # See: https://github.com/pyinstaller/pyinstaller/issues/7229#issuecomment-1309406736
    # See: https://github.com/pyinstaller/pyinstaller/issues/6352#issuecomment-962499220
    env["SSL_CERT_FILE"] = certifi.where()

    # Run the CLI
    cli(sys.argv[1:])
