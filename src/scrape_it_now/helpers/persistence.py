from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from openai import AsyncAzureOpenAI

from scrape_it_now.helpers.identity import token
from scrape_it_now.persistence.azure_blob_storage import (
    AzureBlobStorage,
    Config as AzureBlobStorageConfig,
)
from scrape_it_now.persistence.azure_queue_storage import (
    AzureQueueStorage,
    Config as AzureQueueStorageConfig,
)
from scrape_it_now.persistence.azure_search import (
    AzureSearch,
    Config as AzureSearchConfig,
)
from scrape_it_now.persistence.iblob import IBlob, Provider as BlobProvider
from scrape_it_now.persistence.iqueue import IQueue, Provider as QueueProvider
from scrape_it_now.persistence.isearch import ISearch, Provider as SearchProvider
from scrape_it_now.persistence.local_disk import (
    BlobConfig as LocalDiskBlobConfig,
    LocalDiskBlob,
    LocalDiskQueue,
    QueueConfig as LocalDiskQueueConfig,
)


@asynccontextmanager
async def openai_client(
    azure_openai_api_key: str | None,
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
        azure_ad_token_provider=await token(
            "https://cognitiveservices.azure.com/.default"
        )
        if not azure_openai_api_key
        else None,
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
async def blob_client(  # noqa: PLR0913
    azure_storage_access_key: str | None,
    azure_storage_account_name: str | None,
    azure_storage_endpoint_suffix: str | None,
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
            access_key=azure_storage_access_key,
            account_name=azure_storage_account_name,  # pyright: ignore [reportArgumentType]
            endpoint_suffix=azure_storage_endpoint_suffix,  # pyright: ignore [reportArgumentType]
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
    azure_storage_access_key: str | None,
    azure_storage_account_name: str | None,
    azure_storage_endpoint_suffix: str | None,
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
            access_key=azure_storage_access_key,
            account_name=azure_storage_account_name,  # pyright: ignore [reportArgumentType]
            endpoint_suffix=azure_storage_endpoint_suffix,  # pyright: ignore [reportArgumentType]
            name=queue,
        )
        # Init client
        async with AzureQueueStorage(config) as client:
            yield client

    # Local Disk Queue
    elif provider == QueueProvider.LOCAL_DISK:
        config = LocalDiskQueueConfig(
            name=queue,
        )  # pyright: ignore [reportArgumentType]
        # Init client
        async with LocalDiskQueue(config) as client:
            yield client
