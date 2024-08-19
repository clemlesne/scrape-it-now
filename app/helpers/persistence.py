from contextlib import asynccontextmanager
from typing import AsyncGenerator

from openai import AsyncAzureOpenAI

from app.persistence.azure_ai_search import AzureAiSearch
from app.persistence.azure_blob_storage import AzureBlobStorage
from app.persistence.azure_queue_storage import AzureQueueStorage
from app.persistence.iblob import IBlob
from app.persistence.iqueue import IQueue
from app.persistence.isearch import ISearch


@asynccontextmanager
async def openai_client(
    api_key: str,
    api_version: str,
    endpoint: str,
) -> AsyncGenerator[AsyncAzureOpenAI, None]:
    """
    Get the Azure OpenAI client.
    """
    async with AsyncAzureOpenAI(
        # Deployment
        api_version=api_version,
        azure_endpoint=endpoint,
        # Authentication
        api_key=api_key,
    ) as client:
        yield client


@asynccontextmanager
async def search_client(
    api_key: str,
    azure_openai_api_key: str,
    azure_openai_embedding_deployment: str,
    azure_openai_embedding_dimensions: int,
    azure_openai_embedding_model: str,
    azure_openai_endpoint: str,
    endpoint: str,
    index: str,
) -> AsyncGenerator[ISearch, None]:
    """
    Get the search client.
    """
    async with AzureAiSearch(
        api_key=api_key,
        azure_openai_api_key=azure_openai_api_key,
        azure_openai_embedding_deployment=azure_openai_embedding_deployment,
        azure_openai_embedding_dimensions=azure_openai_embedding_dimensions,
        azure_openai_embedding_model=azure_openai_embedding_model,
        azure_openai_endpoint=azure_openai_endpoint,
        endpoint=endpoint,
        index=index,
    ) as client:
        yield client


@asynccontextmanager
async def blob_client(
    connection_string: str,
    container: str,
) -> AsyncGenerator[IBlob, None]:
    """
    Get the blob client.
    """
    async with AzureBlobStorage(
        connection_string=connection_string,
        name=container,
    ) as client:
        yield client


@asynccontextmanager
async def queue_client(
    connection_string: str,
    queue: str,
) -> AsyncGenerator[IQueue, None]:
    """
    Get the queue client.
    """
    async with AzureQueueStorage(
        connection_string=connection_string,
        name=queue,
    ) as client:
        yield client
