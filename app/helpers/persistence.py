from app.helpers.logging import logger
from azure.core.credentials import AzureKeyCredential
from azure.core.exceptions import ResourceExistsError
from azure.search.documents.aio import SearchClient
from azure.storage.blob.aio import BlobServiceClient, ContainerClient
from azure.storage.queue.aio import QueueClient, QueueServiceClient
from contextlib import asynccontextmanager
from openai import AsyncAzureOpenAI
from typing import AsyncGenerator


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
    endpoint: str,
    index: str,
) -> AsyncGenerator[SearchClient, None]:
    """
    Get the Azure AI Search client.
    """
    async with SearchClient(
        # Deployment
        endpoint=endpoint,
        index_name=index,
        # Authentication
        credential=AzureKeyCredential(api_key),
    ) as client:
        yield client


@asynccontextmanager
async def blob_client(
    connection_string: str,
    container: str,
) -> AsyncGenerator[ContainerClient, None]:
    """
    Get the Azure Blob Storage client.
    """
    async with BlobServiceClient.from_connection_string(
        connection_string
    ) as x:
        client = x.get_container_client(container)

        # Create if it does not exist
        try:
            await client.create_container()
            logger.info('Created Blob Storage "%s"', container)
        except ResourceExistsError:
            pass

        # Return client
        yield client


@asynccontextmanager
async def queue_client(
    connection_string: str,
    queue: str,
) -> AsyncGenerator[QueueClient, None]:
    """
    Get the Azure Queue Storage client.
    """
    async with QueueServiceClient.from_connection_string(
        connection_string
    ) as x:
        client = x.get_queue_client(queue)

        # Create if it does not exist
        try:
            await client.create_queue()
            logger.info('Created Queue Storage "%s"', queue)
        except ResourceExistsError:
            pass

        # Return client
        yield client
