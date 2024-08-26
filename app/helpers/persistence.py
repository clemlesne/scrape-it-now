from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from openai import AsyncAzureOpenAI

from app.persistence.azure_blob_storage import (
    AzureBlobStorage,
    Config as AzureBlobStorageConfig,
)
from app.persistence.azure_queue_storage import (
    AzureQueueStorage,
    Config as AzureQueueStorageConfig,
)
from app.persistence.azure_search import AzureSearch, Config as AzureSearchConfig
from app.persistence.iblob import IBlob, Provider as BlobProvider
from app.persistence.iproxy import IProxy, Provider as ProxyProvider
from app.persistence.iqueue import IQueue, Provider as QueueProvider
from app.persistence.isearch import ISearch, Provider as SearchProvider
from app.persistence.local_disk import (
    BlobConfig as LocalDiskBlobConfig,
    LocalDiskBlob,
    LocalDiskQueue,
    QueueConfig as LocalDiskQueueConfig,
)
from app.persistence.monosans_proxy_list import (
    Config as ThespeedxProxyListConfig,
    MonosansProxyList,
)
from app.persistence.no_proxy import NoProxy


@asynccontextmanager
async def openai_client(
    azure_openai_api_key: str,
    azure_openai_endpoint: str,
    openai_api_version: str,
) -> AsyncGenerator[AsyncAzureOpenAI, None]:
    """
    Get the Azure OpenAI client.
    """
    async with AsyncAzureOpenAI(
        # Deployment
        api_version=openai_api_version,
        azure_endpoint=azure_openai_endpoint,
        # Authentication
        api_key=azure_openai_api_key,
    ) as client:
        yield client


@asynccontextmanager
async def search_client(  # noqa: PLR0913
    azure_search_api_key: str | None,
    azure_search_endpoint: str | None,
    azure_openai_api_key: str | None,
    azure_openai_embedding_deployment: str | None,
    azure_openai_embedding_dimensions: int | None,
    azure_openai_embedding_model: str | None,
    azure_openai_endpoint: str | None,
    index: str,
    provider: SearchProvider,
) -> AsyncGenerator[ISearch, None]:
    """
    Get the search client.
    """
    # Azure AI Search
    if provider == SearchProvider.AZURE_SEARCH:
        # Validate arguments
        config = AzureSearchConfig(
            api_key=azure_search_api_key,  # pyright: ignore [reportArgumentType]
            azure_openai_api_key=azure_openai_api_key,  # pyright: ignore [reportArgumentType]
            azure_openai_embedding_deployment=azure_openai_embedding_deployment,  # pyright: ignore [reportArgumentType]
            azure_openai_embedding_dimensions=azure_openai_embedding_dimensions,  # pyright: ignore [reportArgumentType]
            azure_openai_embedding_model=azure_openai_embedding_model,  # pyright: ignore [reportArgumentType]
            azure_openai_endpoint=azure_openai_endpoint,  # pyright: ignore [reportArgumentType]
            endpoint=azure_search_endpoint,  # pyright: ignore [reportArgumentType]
            index=index,
        )  # pyright: ignore [reportArgumentType]
        # Init client
        async with AzureSearch(config) as client:
            yield client


@asynccontextmanager
async def blob_client(
    azure_storage_connection_string: str | None,
    container: str,
    path: str | None,
    provider: BlobProvider,
) -> AsyncGenerator[IBlob, None]:
    """
    Get the blob client.
    """
    # Azure Blob Storage
    if provider == BlobProvider.AZURE_BLOB_STORAGE:
        # Validate arguments
        config = AzureBlobStorageConfig(
            connection_string=azure_storage_connection_string,  # pyright: ignore [reportArgumentType]
            name=container,
        )  # pyright: ignore [reportArgumentType]
        # Init client
        async with AzureBlobStorage(config) as client:
            yield client

    # Local Disk Blob
    elif provider == BlobProvider.LOCAL_DISK:
        # Validate arguments
        config = LocalDiskBlobConfig(
            name=container,
            path=path,  # pyright: ignore [reportArgumentType]
        )  # pyright: ignore [reportArgumentType]
        # Init client
        async with LocalDiskBlob(config) as client:
            yield client


@asynccontextmanager
async def queue_client(
    azure_storage_connection_string: str | None,
    provider: QueueProvider,
    queue: str,
) -> AsyncGenerator[IQueue, None]:
    """
    Get the queue client.
    """
    # Azure Queue Storage
    if provider == QueueProvider.AZURE_QUEUE_STORAGE:
        # Validate arguments
        config = AzureQueueStorageConfig(
            connection_string=azure_storage_connection_string,  # pyright: ignore [reportArgumentType]
            name=queue,
        )
        # Init client
        async with AzureQueueStorage(config) as client:
            yield client

    # Local Disk Queue
    elif provider == QueueProvider.LOCAL_DISK:
        # Validate arguments
        config = LocalDiskQueueConfig(
            name=queue,
        )  # pyright: ignore [reportArgumentType]
        # Init client
        async with LocalDiskQueue(config) as client:
            yield client


@asynccontextmanager
async def proxy_client(provider: ProxyProvider) -> AsyncGenerator[IProxy, None]:
    """
    Get the proxy client.
    """
    # No Proxy
    if provider == ProxyProvider.NO_PROXY:
        # Init client
        async with NoProxy() as client:
            yield client

    # TheSpeedX PROXY-LIST
    elif provider == ProxyProvider.MONOSANS_PROXY_LIST:
        # Validate arguments
        config = ThespeedxProxyListConfig()
        # Init client
        async with MonosansProxyList(config) as client:
            yield client
