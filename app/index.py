import asyncio, math

import tiktoken
from azure.core.exceptions import (
    HttpResponseError,
    ResourceNotFoundError,
    ServiceRequestError,
)
from azure.search.documents.aio import SearchClient
from azure.storage.blob.aio import ContainerClient
from openai import AsyncAzureOpenAI, InternalServerError, RateLimitError
from openai.types import CreateEmbeddingResponse
from pydantic import ValidationError
from tenacity import (
    retry,
    retry_any,
    retry_if_exception_type,
    stop_after_attempt,
    wait_random_exponential,
)

from app.helpers.logging import logger
from app.helpers.persistence import (
    blob_client,
    openai_client,
    queue_client,
    search_client,
)
from app.helpers.resources import chunck_queue_name, hash_url, scrape_container_name
from app.helpers.threading import run_workers
from app.models.indexed import IndexedIngestModel
from app.models.scraped import ScrapedUrlModel


async def _process_one(
    blob: ContainerClient,
    file_name: str,
    embedding_deployment: str,
    embedding_dimensions: int,
    openai: AsyncAzureOpenAI,
    search: SearchClient,
) -> None:
    """
    Import a scraped file into the search index.

    The file is split into smaller chunks, and each chunk is indexed separately. If the document is already indexed, it is skipped.
    """
    # Read scraped content
    f = await blob.download_blob(
        blob=file_name,
        encoding="utf-8",
    )
    # Extract the short name for logging
    short_name = file_name.split("/")[-1].split(".")[0][:7]

    # Validate the data
    try:
        result = ScrapedUrlModel.model_validate_json(await f.readall())
    except ValidationError:
        logger.warning("%s cannot be parsed", short_name)
        return

    # Skip if no content
    if not result.content:
        logger.info("%s is empty", short_name)
        return

    # Skip if an error occured
    if result.status >= 300:
        logger.info("%s data is invalid (code %i)", short_name, result.status)
        return

    # Chunck to small markdown files
    chuncks = _markdown_chunck(
        max_tokens=800,
        text=result.content,
    )
    doc_ids = [f"{hash_url(result.url)}-{i}" for i in range(len(chuncks))]
    logger.info("%s chunked into %i parts", short_name, len(chuncks))

    # Check if the document is already indexed
    try:
        await asyncio.gather(
            *[
                search.get_document(key=doc_id, selected_fields=["id"])
                for doc_id in doc_ids
            ]
        )
        logger.info("%s is already indexed", short_name)
        return
    except (
        ResourceNotFoundError
    ):  # If a chunck is not found, it is not indexed, thus we can re-process the document
        pass

    # Generate the embeddings by block (mitigate API throughput limits)
    embeddings = []
    chunks_size = 10
    for i in range(0, len(chuncks), chunks_size):
        chunk_input = chuncks[i : i + chunks_size]
        res = await _embeddings(
            embedding_deployment=embedding_deployment,
            embedding_dimensions=embedding_dimensions,
            inputs=chunk_input,
            openai=openai,
        )
        embeddings.extend(res.data)

    # Add to the index list
    models = [
        IndexedIngestModel(
            content=content,
            id=doc_id,
            url=result.url,
            vectors=embedding.embedding,
        )
        for doc_id, content, embedding in zip(doc_ids, chuncks, embeddings)
    ]

    # Index the documents
    await _index_to_store(
        models=models,
        search=search,
    )
    logger.info("%s is indexed", short_name)


@retry(
    reraise=True,
    retry=retry_if_exception_type(ServiceRequestError),
    # This is a batch, we have all the time we want
    stop=stop_after_attempt(20),
    wait=wait_random_exponential(multiplier=0.8, max=60),
)
async def _index_to_store(
    models: list[IndexedIngestModel],
    search: SearchClient,
) -> None:
    """
    Index a list of documents in the Azure Cognitive Search service.
    """
    await search.merge_or_upload_documents(
        documents=[model.model_dump() for model in models]
    )


@retry(
    reraise=True,
    retry=retry_any(
        retry_if_exception_type(HttpResponseError),
        retry_if_exception_type(InternalServerError),
        retry_if_exception_type(RateLimitError),
    ),
    retry_error_callback=lambda state: logger.warning(
        "Retry embeddings (%i time, sleep %i secs)",
        state.attempt_number,
        state.upcoming_sleep,
    ),
    # This is a batch, we have all the time we want
    stop=stop_after_attempt(50),
    wait=wait_random_exponential(multiplier=0.8, max=300),
)
async def _embeddings(
    inputs: list[str],
    openai: AsyncAzureOpenAI,
    embedding_deployment: str,
    embedding_dimensions: int,
) -> CreateEmbeddingResponse:
    """
    Generate embeddings for a list of inputs.
    """
    return await openai.embeddings.create(
        dimensions=embedding_dimensions,
        input=inputs,
        model=embedding_deployment,
    )


def _markdown_chunck(
    max_tokens: int,
    text: str,
) -> list[str]:
    """
    Split a Markdown text into smaller chunks.

    The text is split by Markdown headings, and each chunk is as big as possible without exceeding the max_tokens limit.
    """
    contents = []
    if (
        _count_tokens(text)
        < max_tokens
    ):  # If the text is small enough
        contents.append(text)
        return contents

    # Split the text by Markdown headings
    h1_title = ""
    h2_title = ""
    h3_title = ""
    h4_title = ""
    headings: dict[dict[dict[dict[str, str], str], str], str] = {}
    for line in text.splitlines():
        if line.startswith("# "):
            h1_title = line[2:]
            h2_title = ""
            h3_title = ""
            h4_title = ""
            continue
        if line.startswith("## "):
            h2_title = line[3:]
            h3_title = ""
            h4_title = ""
            continue
        if line.startswith("### "):
            h3_title = line[4:]
            h4_title = ""
            continue
        if line.startswith("#### "):
            h4_title = line[5:]
            continue
        if not line:
            continue
        if h1_title not in headings:
            headings[h1_title] = {}
        if h2_title not in headings[h1_title]:
            headings[h1_title][h2_title] = {}
        if h3_title not in headings[h1_title][h2_title]:
            headings[h1_title][h2_title][h3_title] = {}
        if h4_title not in headings[h1_title][h2_title][h3_title]:
            headings[h1_title][h2_title][h3_title][h4_title] = ""
        headings[h1_title][h2_title][h3_title][h4_title] += line + "\n"

    def _split_paragraph(
        contents: list[str],
        current_chunk: str,
        h1_head: str,
        h2_head: str,
        h3_head: str,
    ) -> str:
        """
        Split the current Markdown chunk into smaller chunks if it is inherently too big.

        As the headings are only on the first chunk, we re-apply them to all the others.
        """

        def _rebuild_headings() -> str:
            res = ""
            if h1_head:
                res = f"# {h1_head}\n"
            if h2_head:
                res += f"## {h2_head}\n"
            if h3_head:
                res += f"### {h3_head}\n"
            return res

        # Remove the last heading
        to_remove = 0
        previous_lines = current_chunk.splitlines()
        previous_lines.reverse()
        for previous_line in previous_lines:
            if not previous_line.startswith("#"):
                break
            to_remove += 1
        current_cleaned = "\n".join(
            current_chunk.splitlines()[: -(to_remove + 1)]
        ).strip()

        # Chunck if is still too big
        current_cleaned_count = math.ceil(
            _count_tokens(current_cleaned)
            / max_tokens
        )
        current_cleaned_chunck_size = math.ceil(
            len(current_cleaned) / current_cleaned_count
        )
        for i in range(current_cleaned_count):  # Iterate over the chunks
            chunck_content = current_cleaned[
                i * current_cleaned_chunck_size : (i + 1) * current_cleaned_chunck_size
            ]
            if i == 0:  # Headings only on the first chunk
                contents.append(chunck_content)
            else:  # Re-apply the last heading to the next chunk
                contents.append(_rebuild_headings() + chunck_content)

        return _rebuild_headings()

    # Split document into the biggest chunks possible
    current_chunk = ""
    for h1_head, h1_next in headings.items():
        last_h1_head = h1_head
        if last_h1_head:
            current_chunk += f"# {last_h1_head}\n"
        for h2_head, h2_next in h1_next.items():
            last_h2_head = h2_head
            if last_h2_head:
                current_chunk += f"## {last_h2_head}\n"
            for h3_head, h3_next in h2_next.items():
                last_h3_head = h3_head
                if last_h3_head:
                    current_chunk += f"### {last_h3_head}\n"
                for h4_head, h4_content in h3_next.items():
                    if (
                        _count_tokens(current_chunk)
                        >= max_tokens
                    ):  # If the chunk is too big
                        # Re-apply the last heading to the next chunk
                        current_chunk = _split_paragraph(
                            contents=contents,
                            current_chunk=current_chunk,
                            h1_head=last_h1_head,
                            h2_head=last_h2_head,
                            h3_head=last_h3_head,
                        )
                    if h4_content:
                        if h4_head:
                            current_chunk += f"#### {h4_head}\n"
                        current_chunk += h4_content + "\n"
    # Add the last chunk
    if current_chunk:
        _split_paragraph(
            contents=contents,
            current_chunk=current_chunk,
            h1_head=last_h1_head,
            h2_head=last_h2_head,
            h3_head=last_h3_head,
        )

    # Return the chunks
    return contents


def _count_tokens(content: str) -> int:
    """
    Count the number of tokens in a text using the OpenAI GPT-3.5 tokenitzer.
    """
    encoding_name = tiktoken.encoding_name_for_model("gpt-3.5")
    return len(tiktoken.get_encoding(encoding_name).encode(content))


async def run(
    azure_openai_api_key: str,
    azure_openai_embedding_deployment: str,
    azure_openai_embedding_dimensions: int,
    azure_openai_endpoint: str,
    job: str,
    openai_api_version: str,
    processes: int,
    search_api_key: str,
    search_endpoint: str,
    search_index: str,
    storage_connection_string: str,
) -> None:
    logger.info("Starting indexing job %s", job)

    run_workers(
        azure_openai_api_key=azure_openai_api_key,
        azure_openai_embedding_deployment=azure_openai_embedding_deployment,
        azure_openai_embedding_dimensions=azure_openai_embedding_dimensions,
        azure_openai_endpoint=azure_openai_endpoint,
        count=processes,
        func=_worker,
        job=job,
        name=f"index-{job}",
        openai_api_version=openai_api_version,
        search_api_key=search_api_key,
        search_endpoint=search_endpoint,
        search_index=search_index,
        storage_connection_string=storage_connection_string,
    )


async def _worker(
    azure_openai_api_key: str,
    azure_openai_embedding_deployment: str,
    azure_openai_embedding_dimensions: int,
    azure_openai_endpoint: str,
    job: str,
    openai_api_version: str,
    search_api_key: str,
    search_endpoint: str,
    search_index: str,
    storage_connection_string: str,
) -> None:
    # Init clients
    async with blob_client(
        connection_string=storage_connection_string,
        container=scrape_container_name(job),
    ) as blob:
        async with openai_client(
            api_key=azure_openai_api_key,
            api_version=openai_api_version,
            endpoint=azure_openai_endpoint,
        ) as openai:
            async with queue_client(
                connection_string=storage_connection_string,
                queue=chunck_queue_name(job),
            ) as queue:
                async with search_client(
                    api_key=search_api_key,
                    endpoint=search_endpoint,
                    index=search_index,
                ) as search:

                    # Process the queue
                    while messages := queue.receive_messages(
                        max_messages=32,
                        visibility_timeout=32 * 10,  # 10 secs per message
                    ):
                        logger.info("Processing new messages")
                        async for message in messages:
                            blob_name = message.content
                            try:
                                await _process_one(
                                    blob=blob,
                                    embedding_deployment=azure_openai_embedding_deployment,
                                    embedding_dimensions=azure_openai_embedding_dimensions,
                                    file_name=blob_name,
                                    openai=openai,
                                    search=search,
                                )
                                await queue.delete_message(message)

                            except Exception:
                                # TODO: Add a dead-letter queue
                                # TODO: Add a retry mechanism
                                # TODO: Narrow the exception type
                                logger.error("Error processing %s", blob_name, exc_info=True)

                        # Wait 3 sec to avoid spamming the queue if it is empty
                        await asyncio.sleep(3)

                    logger.info("No more queued messages, exiting")
