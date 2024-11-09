from typing import Any

from azure.core.credentials import AzureKeyCredential
from azure.core.exceptions import (
    HttpResponseError,
    ResourceExistsError,
    ResourceNotFoundError,
    ServiceRequestError,
)
from azure.search.documents.aio import SearchClient
from azure.search.documents.indexes.aio import SearchIndexClient
from azure.search.documents.indexes.models import (
    AzureOpenAIVectorizer,
    AzureOpenAIVectorizerParameters,
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

from scrape_it_now.helpers.http import azure_transport
from scrape_it_now.helpers.identity import credential
from scrape_it_now.helpers.logging import logger
from scrape_it_now.persistence.isearch import DocumentNotFoundError, ISearch


class Config(BaseModel):
    api_key: str | None
    azure_openai_api_key: str | None
    azure_openai_embedding_deployment: str
    azure_openai_embedding_dimensions: int
    azure_openai_embedding_model: str
    azure_openai_endpoint: str
    endpoint: str
    index: str


class AzureSearch(ISearch):
    _client: SearchClient
    _config: Config
    _schema_version: int = 2

    def __init__(
        self,
        config: Config,
    ) -> None:
        logger.debug(
            'Azure Search "%s" is configured (schema v%i)',
            config.index,
            self._schema_version,
        )
        self._config = config

    @property
    def _index_name(self) -> str:
        return f"{self._config.index}-v{self._schema_version}"

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
            # Required field for indexing key
            SimpleField(
                name="id",
                key=True,
                type=SearchFieldDataType.String,
            ),
            # Custom fields
            SimpleField(
                filterable=True,
                name="chunck_number",
                sortable=True,
                type=SearchFieldDataType.Int32,
            ),
            SearchableField(
                analyzer_name=LexicalAnalyzerName.STANDARD_LUCENE,
                name="content",
                type=SearchFieldDataType.String,
            ),
            SimpleField(
                filterable=True,
                name="created_at",
                sortable=True,
                type=SearchFieldDataType.DateTimeOffset,
            ),
            SearchableField(
                analyzer_name=LexicalAnalyzerName.STANDARD_LUCENE,
                name="title",
                type=SearchFieldDataType.String,
            ),
            SimpleField(
                analyzer_name=LexicalAnalyzerName.STANDARD_LUCENE,
                filterable=True,
                name="url",
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
                    vectorizer_name="vectorizer-default",
                ),
            ],
            algorithms=[
                HnswAlgorithmConfiguration(
                    name="algorithm-default",
                ),
            ],
            vectorizers=[
                AzureOpenAIVectorizer(
                    vectorizer_name="vectorizer-default",
                    parameters=AzureOpenAIVectorizerParameters(
                        api_key=self._config.azure_openai_api_key,
                        deployment_name=self._config.azure_openai_embedding_deployment,
                        model_name=self._config.azure_openai_embedding_model,
                        resource_url=self._config.azure_openai_endpoint,
                    ),
                )
            ],
        )

        # Create index if it does not exist
        async with SearchIndexClient(
            # Deployment
            endpoint=self._config.endpoint,
            index_name=self._index_name,
            # Index configuration
            fields=fields,
            vector_search=vector_search,
            # Performance
            transport=await azure_transport(),
            # Authentication
            credential=AzureKeyCredential(self._config.api_key)
            if self._config.api_key
            else await credential(),
        ) as client:
            try:
                await client.create_index(
                    SearchIndex(
                        fields=fields,
                        name=self._index_name,
                        vector_search=vector_search,
                    )
                )
                logger.debug('Created Search "%s"', self._index_name)
            except ResourceExistsError:
                pass
            except HttpResponseError as e:
                if not e.error or not e.error.code == "ResourceNameAlreadyInUse":
                    raise e

        # Return client
        self._client = SearchClient(
            # Deployment
            endpoint=self._config.endpoint,
            index_name=self._index_name,
            # Performance
            transport=await azure_transport(),
            # Authentication
            credential=AzureKeyCredential(self._config.api_key)
            if self._config.api_key
            else await credential(),
        )
        return self

    async def __aexit__(self, *exc: Any) -> None:
        await self._client.close()
