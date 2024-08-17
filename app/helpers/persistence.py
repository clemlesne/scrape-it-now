from contextlib import asynccontextmanager
from typing import AsyncGenerator

from azure.core.credentials import AzureKeyCredential
from azure.core.exceptions import ResourceExistsError
from azure.search.documents.aio import SearchClient
from azure.search.documents.indexes.aio import SearchIndexClient
from azure.search.documents.indexes.models import (
    AzureOpenAIParameters,
    AzureOpenAIVectorizer,
    HnswAlgorithmConfiguration,
    LexicalAnalyzerName,
    SearchableField,
    SearchField,
    SearchFieldDataType,
    SearchIndex,
    SimpleField,
    VectorSearch,
    VectorSearchProfile,
)
from azure.storage.blob.aio import BlobServiceClient, ContainerClient
from azure.storage.queue.aio import QueueClient, QueueServiceClient
from openai import AsyncAzureOpenAI

from app.helpers.logging import logger


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
) -> AsyncGenerator[SearchClient, None]:
    """
    Get the Azure AI Search client.
    """
    # Index configuration
    fields = [
        SimpleField(
            name="id",
            key=True,
            type=SearchFieldDataType.String,
        ),
        SearchableField(
            name="content",
            analyzer_name=LexicalAnalyzerName.STANDARD_LUCENE,
            type=SearchFieldDataType.String,
        ),
        SimpleField(
            name="url",
            analyzer_name=LexicalAnalyzerName.STANDARD_LUCENE,
            filterable=True,
            sortable=True,
            type=SearchFieldDataType.String,
        ),
        SearchField(
            name="vectors",
            searchable=True,
            type=SearchFieldDataType.Collection(SearchFieldDataType.Single),
            vector_search_dimensions=azure_openai_embedding_dimensions,
            vector_search_profile_name="default",
        ),
    ]
    vector_search = VectorSearch(
        profiles=[
            VectorSearchProfile(
                algorithm_configuration_name="default",
                name="default",
            ),
        ],
        algorithms=[
            HnswAlgorithmConfiguration(
                name="default",
            ),
        ],
        vectorizers=[
            AzureOpenAIVectorizer(
                name="default",
                azure_open_ai_parameters=AzureOpenAIParameters(
                    api_key=azure_openai_api_key,
                    deployment_id=azure_openai_embedding_deployment,
                    model_name=azure_openai_embedding_model,
                    resource_uri=azure_openai_endpoint,
                ),
            )
        ],
    )

    # Create index if it does not exist
    async with SearchIndexClient(
        # Deployment
        endpoint=endpoint,
        index_name=index,
        # Index configuration
        fields=fields,
        vector_search=vector_search,
        # Authentication
        credential=AzureKeyCredential(api_key),
    ) as client:
        try:
            await client.create_index(
                SearchIndex(
                    fields=fields,
                    name=index,
                    vector_search=vector_search,
                )
            )
            logger.info('Created Search "%s"', index)
        except ResourceExistsError:
            pass

    # Return client
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
    async with BlobServiceClient.from_connection_string(connection_string) as x:
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
    async with QueueServiceClient.from_connection_string(connection_string) as x:
        client = x.get_queue_client(queue)

        # Create if it does not exist
        try:
            await client.create_queue()
            logger.info('Created Queue Storage "%s"', queue)
        except ResourceExistsError:
            pass

        # Return client
        yield client
