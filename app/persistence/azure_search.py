from typing import Any

from azure.core.credentials import AzureKeyCredential
from azure.core.exceptions import (
    HttpResponseError,
    ResourceNotFoundError,
    ServiceRequestError,
)
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
from pydantic import BaseModel
from tenacity import (
    retry,
    retry_if_exception_type,
    stop_after_attempt,
    wait_random_exponential,
)

from app.helpers.logging import logger
from app.persistence.isearch import DocumentNotFoundError, ISearch


class Config(BaseModel):
    api_key: str
    azure_openai_api_key: str
    azure_openai_embedding_deployment: str
    azure_openai_embedding_dimensions: int
    azure_openai_embedding_model: str
    azure_openai_endpoint: str
    endpoint: str
    index: str


class AzureSearch(ISearch):
    _client: SearchClient
    _config: Config

    def __init__(
        self,
        config: Config,
    ) -> None:
        logger.info('Azure Search "%s" is configured', config.index)
        self._config = config

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def get_document(
        self,
        key: str,
        selected_fields: set[str] | None = None,
    ) -> dict:
        try:
            return await self._client.get_document(
                key=key,
                selected_fields=list(selected_fields) if selected_fields else None,
            )
        except ResourceNotFoundError as e:
            raise DocumentNotFoundError(f'Document "{key}" not found') from e

    @retry(
        reraise=True,
        retry=retry_if_exception_type(ServiceRequestError),  # Catch for network errors
        stop=stop_after_attempt(8),
        wait=wait_random_exponential(multiplier=0.8, max=60),
    )
    async def merge_or_upload_documents(
        self,
        documents: list[dict],
    ) -> None:
        await self._client.merge_or_upload_documents(documents=documents)

    async def __aenter__(self) -> "AzureSearch":
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
                vector_search_dimensions=self._config.azure_openai_embedding_dimensions,
                vector_search_profile_name="profile-default",
            ),
        ]
        vector_search = VectorSearch(
            profiles=[
                VectorSearchProfile(
                    algorithm_configuration_name="algorithm-default",
                    name="profile-default",
                    vectorizer="vectorizer-default",
                ),
            ],
            algorithms=[
                HnswAlgorithmConfiguration(
                    name="algorithm-default",
                ),
            ],
            vectorizers=[
                AzureOpenAIVectorizer(
                    name="vectorizer-default",
                    azure_open_ai_parameters=AzureOpenAIParameters(
                        api_key=self._config.azure_openai_api_key,
                        deployment_id=self._config.azure_openai_embedding_deployment,
                        model_name=self._config.azure_openai_embedding_model,
                        resource_uri=self._config.azure_openai_endpoint,
                    ),
                )
            ],
        )

        # Create index if it does not exist
        async with SearchIndexClient(
            # Deployment
            endpoint=self._config.endpoint,
            index_name=self._config.index,
            # Index configuration
            fields=fields,
            vector_search=vector_search,
            # Authentication
            credential=AzureKeyCredential(self._config.api_key),
        ) as client:
            try:
                await client.create_index(
                    SearchIndex(
                        fields=fields,
                        name=self._config.index,
                        vector_search=vector_search,
                    )
                )
                logger.info('Created Search "%s"', self._config.index)
            except HttpResponseError as e:
                if not e.error or not e.error.code == "ResourceNameAlreadyInUse":
                    raise e

        # Return client
        self._client = SearchClient(
            # Deployment
            endpoint=self._config.endpoint,
            index_name=self._config.index,
            # Authentication
            credential=AzureKeyCredential(self._config.api_key),
        )
        return self

    async def __aexit__(self, *exc: Any) -> None:
        await self._client.close()
