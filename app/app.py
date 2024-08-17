import asyncio, functools, random, re, string, sys
from os import cpu_count, environ as env
from platform import python_version

import click

from app.helpers.logging import logger
from app.helpers.monitoring import VERSION
from app.index import run as index_backend_run
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
    required=True,
    type=int,
)
@click.option(
    "--cache-refresh",
    "-cr",
    default=24 * 7,
    envvar="CACHE_REFRESH",
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
    "--azure-storage-connection-string",
    "-ascs",
    envvar="AZURE_STORAGE_CONNECTION_STRING",
    hide_input=True,
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
    "--job-name",
    "-jn",
    type=str,
)
@click.argument(
    "url",
    envvar="URL",
)
@scrape.command("run")
@run_in_async
async def scrape_run(
    azure_storage_connection_string: str,
    cache_refresh: int,
    job_name: str | None,
    max_depth: int,
    processes: int,
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
        for path in w.split(",")[1:]:
            path = re.compile(path.strip())
            whitelist_parsed[domain].append(path)
    if whitelist_parsed:
        logger.info("Whitelist: %s", whitelist_parsed)

    await scrape_backend_run(
        cache_refresh=cache_refresh,
        job=job_name_parsed,
        max_depth=max_depth,
        processes=processes,
        storage_connection_string=azure_storage_connection_string,
        timezones=timezone,
        url=url,
        user_agents=user_agent,
        viewports=viewports_parsed,
        whitelist=whitelist_parsed,
    )


@click.option(
    "--azure-storage-connection-string",
    "-ascs",
    envvar="AZURE_STORAGE_CONNECTION_STRING",
    hide_input=True,
    required=True,
    type=str,
)
@click.argument(
    "job_name",
    envvar="JOB_NAME",
)
@scrape.command("status")
@run_in_async
async def scrape_status(
    azure_storage_connection_string: str,
    job_name: str | None,
) -> None:
    """
    Get the state of a scraping job.
    """
    state = await scrape_backend_state(
        job=job_name,
        storage_connection_string=azure_storage_connection_string,
    )
    logger.info(state.model_dump_json())


@cli.group
def index() -> None:
    """
    Index the scraped content to make it semantically searchable.
    """
    pass


@click.option(
    "--azure-storage-connection-string",
    "-ascs",
    envvar="AZURE_STORAGE_CONNECTION_STRING",
    hide_input=True,
    required=True,
    type=str,
)
@click.option(
    "--azure-openai-embedding-dimensions",
    "-aoed",
    envvar="AZURE_OPENAI_EMBEDDING_DIMENSIONS",
    required=True,
    type=int,
)
@click.option(
    "--azure-openai-embedding-deployment-name",
    "-aoedn",
    envvar="AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME",
    required=True,
    type=str,
)
@click.option(
    "--azure-openai-embedding-model-name",
    "-aoemn",
    envvar="AZURE_OPENAI_EMBEDDING_MODEL_NAME",
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
    required=True,
    type=str,
)
@click.option(
    "--azure-search-endpoint",
    "-ase",
    envvar="AZURE_SEARCH_ENDPOINT",
    required=True,
    type=str,
)
@click.option(
    "--azure-openai-api-key",
    "-aoak",
    envvar="AZURE_OPENAI_API_KEY",
    required=True,
    type=str,
)
@click.option(
    "--openai-api-version",
    "-oav",
    default="2024-06-01",
    envvar="OPENAI_API_VERSION",
    required=True,
    type=str,
)
@click.option(
    "--azure-openai-endpoint",
    "-aoe",
    envvar="AZURE_OPENAI_ENDPOINT",
    required=True,
    type=str,
)
@click.argument(
    "job_name",
    envvar="JOB_NAME",
)
@index.command("run")
@run_in_async
async def index_run(
    azure_openai_api_key: str,
    azure_openai_embedding_deployment_name: str,
    azure_openai_embedding_dimensions: int,
    azure_openai_embedding_model_name: str,
    azure_openai_endpoint: str,
    azure_search_api_key: str,
    azure_search_endpoint: str,
    azure_storage_connection_string: str,
    job_name: str | None,
    openai_api_version: str,
    processes: int,
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
        job=job_name,
        openai_api_version=openai_api_version,
        processes=processes,
        search_api_key=azure_search_api_key,
        search_endpoint=azure_search_endpoint,
        storage_connection_string=azure_storage_connection_string,
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
