import asyncio
import math
from http import HTTPStatus
from os import environ as env

import aiojobs
import tiktoken
from openai import (
    APIConnectionError,
    AsyncAzureOpenAI,
    InternalServerError,
    RateLimitError,
)
from openai.types import CreateEmbeddingResponse
from pydantic import ValidationError
from structlog.contextvars import bind_contextvars
from tenacity import (
    retry,
    retry_any,
    retry_if_exception_type,
    stop_after_attempt,
    wait_random_exponential,
)

from scrape_it_now.helpers.logging import logger
from scrape_it_now.helpers.persistence import (
    blob_client,
    openai_client,
    queue_client,
    search_client,
)
from scrape_it_now.helpers.resources import (
    dir_resources,
    index_index_name,
    index_queue_name,
    scrape_container_name,
)
from scrape_it_now.helpers.threading import run_workers
from scrape_it_now.models.indexed import IndexedIngestModel
from scrape_it_now.models.scraped import ScrapedUrlModel
from scrape_it_now.persistence.iblob import (
    BlobNotFoundError,
    IBlob,
    Provider as BlobProvider,
)
from scrape_it_now.persistence.iqueue import (
    IQueue,
    Message as QueueMessage,
    MessageNotFoundError,
    Provider as QueueProvider,
)
from scrape_it_now.persistence.isearch import (
    DocumentNotFoundError,
    ISearch,
    Provider as SearchProvider,
)
from scrape_it_now.scrape import scraped_blob_prefix


async def _process_one(  # noqa: PLR0913
    blob: IBlob,
    file_name: str,
    embedding_deployment: str,
    embedding_dimensions: int,
    openai: AsyncAzureOpenAI,
    search: ISearch,
) -> None:
    """
    Import a scraped file into the search index.

    The file is split into smaller chunks, and each chunk is indexed separately. If the document is already indexed, it is skipped.
    """
    try:
        # Read scraped content
        task_raw = await blob.download_blob(file_name)
    except BlobNotFoundError:
        logger.warning("%s not found in the blob storage", file_name)
        return

    # Validate the message
    try:
        task = ScrapedUrlModel.model_validate_json(task_raw)
    except ValidationError:
        logger.warning("%s cannot be parsed", file_name)
        return

    # Enhance logging for each task
    bind_contextvars(
        task=task.model_short_id,
    )
    logger.info("Start processing %s", task.url)

    # Log the processing

    # Skip if no content
    if not task.content:
        logger.info("Empty content, abort")
        return

    # Skip if an error occured
    if task.status >= HTTPStatus.MULTIPLE_CHOICES:
        logger.info("Invalid status code %i", task.status)
        return

    # Chunk to small markdown files
    chunks = _markdown_chunk(
        max_tokens=800,
        text=task.content,
    )
    doc_ids = [f"{task.model_id}-{i}" for i in range(len(chunks))]
    logger.info("Chunked into %i parts", len(chunks))

    # Check if the document is already indexed
    try:
        await asyncio.gather(
            *[
                search.get_document(key=doc_id, selected_fields={"id"})
                for doc_id in doc_ids
            ]
        )
        logger.info("Already indexed, abort")
        return
    except DocumentNotFoundError:  # If a chunk is not found, it is not indexed, thus we can re-process the document
        pass

    # Generate the embeddings by block (mitigate API throughput limits)
    embeddings = []
    chunks_size = 10
    for i in range(0, len(chunks), chunks_size):
        chunk_input = chunks[i : i + chunks_size]
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
            chunck_number=chunck_number,
            content=chunck_content,
            created_at=task.created_at,
            indexed_id=doc_id,
            title=task.title,
            url=task.url,
            vectors=embedding.embedding,
        )
        for doc_id, chunck_content, chunck_number, embedding in zip(
            doc_ids, chunks, range(len(chunks)), embeddings
        )
    ]

    # Index the documents
    await _index_to_store(
        models=models,
        search=search,
    )
    logger.info("Indexed %i chunks", len(models))


async def _index_to_store(
    models: list[IndexedIngestModel],
    search: ISearch,
) -> None:
    """
    Index a list of documents in the Azure Cognitive Search service.
    """
    await search.merge_or_upload_documents(
        documents=[
            {
                **model.model_dump(exclude={"indexed_id"}),
                "id": model.indexed_id,  # Use the indexed_id as the document ID
            }
            for model in models
        ]
    )


@retry(
    reraise=True,
    retry=retry_any(
        retry_if_exception_type(APIConnectionError),
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


def _markdown_chunk(  # noqa: PLR0915, PLR0912
    max_tokens: int,
    text: str,
) -> list[str]:
    """
    Split a Markdown text into smaller chunks.

    The text is split by Markdown headings, and each chunk is as big as possible without exceeding the max_tokens limit.
    """
    contents = []
    if _count_tokens(text) < max_tokens:  # If the text is small enough
        contents.append(text)
        return contents

    h1_title = ""
    h2_title = ""
    h3_title = ""
    h4_title = ""

    # Split the text by Markdown headings
    headings: dict[str, dict[str, dict[str, dict[str, str]]]] = {}
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
        h1_head: str | None,
        h2_head: str | None,
        h3_head: str | None,
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

        # Chunk if is still too big
        current_cleaned_count = math.ceil(_count_tokens(current_cleaned) / max_tokens)
        current_cleaned_chunk_size = math.ceil(
            len(current_cleaned) / current_cleaned_count
        )
        for i in range(current_cleaned_count):  # Iterate over the chunks
            chunk_content = current_cleaned[
                i * current_cleaned_chunk_size : (i + 1) * current_cleaned_chunk_size
            ]
            if i == 0:  # Headings only on the first chunk
                contents.append(chunk_content)
            else:  # Re-apply the last heading to the next chunk
                contents.append(_rebuild_headings() + chunk_content)

        return _rebuild_headings()

    current_chunk = ""
    last_h1_head: str | None = None
    last_h2_head: str | None = None
    last_h3_head: str | None = None

    # Split document into the biggest chunks possible
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
                        _count_tokens(current_chunk) >= max_tokens
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
    encoding = tiktoken.get_encoding(encoding_name)
    return len(
        encoding.encode(
            disallowed_special=(),
            text=content,
        )
    )


async def run(  # noqa: PLR0913
    azure_openai_api_key: str | None,
    azure_openai_embedding_deployment: str,
    azure_openai_embedding_dimensions: int,
    azure_openai_embedding_model: str,
    azure_openai_endpoint: str,
    azure_search_api_key: str | None,
    azure_search_endpoint: str | None,
    azure_storage_access_key: str | None,
    azure_storage_account_name: str | None,
    azure_storage_endpoint_suffix: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
    force: bool,
    job: str,
    openai_api_version: str,
    processes: int,
    queue_provider: QueueProvider,
    search_provider: SearchProvider,
) -> None:
    logger.info("Start indexing job %s", job)

    if force:
        # Init clients
        async with (
            blob_client(
                azure_storage_access_key=azure_storage_access_key,
                azure_storage_account_name=azure_storage_account_name,
                azure_storage_endpoint_suffix=azure_storage_endpoint_suffix,
                container=scrape_container_name(job),
                path=blob_path,
                provider=blob_provider,
            ) as blob,
            queue_client(
                azure_storage_access_key=azure_storage_access_key,
                azure_storage_account_name=azure_storage_account_name,
                azure_storage_endpoint_suffix=azure_storage_endpoint_suffix,
                provider=queue_provider,
                queue=index_queue_name(job),
            ) as queue,
        ):
            await _force_requeue(
                blob=blob,
                queue=queue,
            )

    run_workers(
        azure_openai_api_key=azure_openai_api_key,
        azure_openai_embedding_deployment=azure_openai_embedding_deployment,
        azure_openai_embedding_dimensions=azure_openai_embedding_dimensions,
        azure_openai_embedding_model=azure_openai_embedding_model,
        azure_openai_endpoint=azure_openai_endpoint,
        azure_search_api_key=azure_search_api_key,
        azure_search_endpoint=azure_search_endpoint,
        azure_storage_access_key=azure_storage_access_key,
        azure_storage_account_name=azure_storage_account_name,
        azure_storage_endpoint_suffix=azure_storage_endpoint_suffix,
        blob_path=blob_path,
        blob_provider=blob_provider,
        count=processes,
        func=_worker,
        job=job,
        name=f"index-{job}",
        openai_api_version=openai_api_version,
        queue_provider=queue_provider,
        search_provider=search_provider,
    )


async def _worker(  # noqa: PLR0913
    azure_openai_api_key: str | None,
    azure_openai_embedding_deployment: str,
    azure_openai_embedding_dimensions: int,
    azure_openai_embedding_model: str,
    azure_openai_endpoint: str,
    azure_search_api_key: str | None,
    azure_search_endpoint: str | None,
    azure_storage_access_key: str | None,
    azure_storage_account_name: str | None,
    azure_storage_endpoint_suffix: str | None,
    blob_path: str,
    blob_provider: BlobProvider,
    job: str,
    openai_api_version: str,
    queue_provider: QueueProvider,
    search_provider: SearchProvider,
) -> None:
    queue_fetch_max = 32

    # Init clients
    async with (
        blob_client(
            azure_storage_access_key=azure_storage_access_key,
            azure_storage_account_name=azure_storage_account_name,
            azure_storage_endpoint_suffix=azure_storage_endpoint_suffix,
            container=scrape_container_name(job),
            path=blob_path,
            provider=blob_provider,
        ) as blob,
        openai_client(
            azure_openai_api_key=azure_openai_api_key,
            azure_openai_endpoint=azure_openai_endpoint,
            openai_api_version=openai_api_version,
        ) as openai,
        queue_client(
            azure_storage_access_key=azure_storage_access_key,
            azure_storage_account_name=azure_storage_account_name,
            azure_storage_endpoint_suffix=azure_storage_endpoint_suffix,
            provider=queue_provider,
            queue=index_queue_name(job),
        ) as queue,
        search_client(
            azure_search_api_key=azure_search_api_key,
            azure_search_endpoint=azure_search_endpoint,
            azure_openai_api_key=azure_openai_api_key,
            azure_openai_embedding_deployment=azure_openai_embedding_deployment,
            azure_openai_embedding_dimensions=azure_openai_embedding_dimensions,
            azure_openai_embedding_model=azure_openai_embedding_model,
            azure_openai_endpoint=azure_openai_endpoint,
            index=index_index_name(job),
            provider=search_provider,
        ) as search,
        aiojobs.Scheduler(
            limit=int(
                queue_fetch_max / 2
            ),  # Limit the number of concurrent messages to half of the queue fetch max
        ) as scheduler,
    ):
        logger.debug("Runing %i concurrent tasks per worker", scheduler.limit)

        # Process the queue
        while messages := queue.receive_messages(
            max_messages=queue_fetch_max,
            visibility_timeout=queue_fetch_max * 5,  # 5 secs per message
        ):
            async for message in messages:
                await scheduler.spawn(
                    _worker_single_message(
                        azure_openai_embedding_deployment=azure_openai_embedding_deployment,
                        azure_openai_embedding_dimensions=azure_openai_embedding_dimensions,
                        blob=blob,
                        message=message,
                        openai=openai,
                        queue=queue,
                        search=search,
                    )
                )

            # Wait 3 sec to avoid spamming the queue if it is empty
            await asyncio.sleep(3)


# TODO: Simplify, this is too complex
async def _worker_single_message(  # noqa: PLR0913
    azure_openai_embedding_deployment: str,
    azure_openai_embedding_dimensions: int,
    blob: IBlob,
    message: QueueMessage,
    openai: AsyncAzureOpenAI,
    queue: IQueue,
    search: ISearch,
) -> None:
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

        try:
            await queue.delete_message(message)
        except MessageNotFoundError:  # Race condition, message has already been deleted by another worker, pass silently to the next message, as it has already been processed
            return

    except Exception:
        logger.exception("Error processing")


async def _force_requeue(
    blob: IBlob,
    queue: IQueue,
) -> None:
    """
    Requeue all the blobs in the index queue.
    """
    logger.warning("Requeue all the blobs, can take a while!")

    # Delete the queue
    await queue.delete_queue()

    # Wait for the queue to be deleted and create it
    deleted = False
    while not deleted:
        deleted = await queue.create_queue()
        if not deleted:
            logger.info("Queue not deleted yet, retrying in 5 secs")
            await asyncio.sleep(5)

    # Wait for the queue to be created
    created = False
    while not created:
        try:
            # Send a test message
            await queue.send_message("ping")
            # Try to consume the message(s)
            async for message in queue.receive_messages(
                max_messages=1, visibility_timeout=1
            ):
                await queue.delete_message(message)
            # If no exception, the queue is created
            created = True
        except Exception:  # If exception, the queue is not created yet
            logger.info("Queue not created yet, retrying in 5 secs")
            await asyncio.sleep(5)

    # Requeue all the blobs
    logger.warning("Rebuilding the queue...")
    i = 0
    async for listed in blob.list_blobs(
        starts_with=scraped_blob_prefix(""),
    ):
        await queue.send_message(listed[0])
        i += 1
    logger.info("Queue rebuilt with %i blobs", i)
