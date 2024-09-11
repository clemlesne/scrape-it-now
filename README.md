# 🛰️ Scrape It Now!

Web scraper made for AI and simplicity in mind. It runs as a CLI that can be parallelized and outputs high-quality markdown content.

<!-- github.com badges -->
[![Last release date](https://img.shields.io/github/release-date/clemlesne/scrape-it-now)](https://github.com/clemlesne/scrape-it-now/releases)
[![Project license](https://img.shields.io/github/license/clemlesne/scrape-it-now)](https://github.com/clemlesne/scrape-it-now/blob/main/LICENSE)

## Features

Shared:

- [x] 🏗️ Decoupled architecture with [Azure Queue Storage](https://learn.microsoft.com/en-us/azure/storage/queues) or local [sqlite](https://sqlite.org)
- [x] 🔧 Executable as a CLI with a [standalone binary](http://github.com/clemlesne/scrape-it-now/releases/latest)
- [x] ⚙️ Idempotent operations that can be run in parallel
- [x] 💾 Scraped content is stored in [Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs) or local disk

Scraper:

- [x] 🛑 Avoid re-scraping a page if it hasn't changed
- [x] 🚫 Block ads to lower network costs with [The Block List Project](https://github.com/blocklistproject/Lists)
- [x] 🔗 Explore pages in depth by detecting links and de-duplicating them
- [x] ✍️ Extract markdown content from a page with [Pandoc](https://github.com/jgm/pandoc)
- [x] 🏷️ Extract [metadata elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) from the page
- [x] 🖥️ Load dynamic JavaScript content with [Playwright](https://github.com/microsoft/playwright-python) and [Chromium](https://www.chromium.org/Home)
- [x] 🕵️‍♂️ Preserve anonymity with a random user agent, random viewport size, and no client hints headers
- [x] 📊 Show progress with a status command
- [x] 🖼️ Store images collected on the page
- [x] 📸 Store screenshot of the page
- [x] 📡 Track progress of total network usage
- [ ] 🕵️‍♀️ Enhance anonymity with proxies
- [ ] 🤖 Respect [`robots.txt`](https://en.wikipedia.org/wiki/Robots.txt)

Indexer:

- [x] 🧠 AI Search index is created automatically
- [x] ✂️ Chunk markdown while keeping the content coherent
- [x] 📈 Embed chunks with OpenAI embeddings
- [x] 🔍 Indexed content is semantically searchable with [Azure AI Search](https://learn.microsoft.com/en-us/azure/search)

## Installation

### From binary

[Download the latest release from the releases page](http://github.com/clemlesne/scrape-it-now/releases/latest). Binaries are available for Linux, macOS and Windows.

For configuring the CLI (including authentication to the backend services), use environment variables, a `.env` file or command line options.

### From sources

Application must be run with Python 3.12 or later. If this version is not installed, an easy way to install it is [pyenv](https://github.com/pyenv/pyenv).

```bash
# Download the source code
git clone https://github.com/clemlesne/scrape-it-now.git
# Move to the directory
cd scrape-it-now
# Run install scripts
make install dev
# Run the CLI
scrape-it-now --help
```

## How to use

### Scrape a website

#### Run a job

Usage with Azure Blob Storage and Azure Queue Storage:

```bash
# Azure Storage configuration
export AZURE_STORAGE_CONNECTION_STRING=xxx
# Run the job
scrape-it-now scrape run https://nytimes.com
```

Usage with Local Disk Blob and Local Disk Queue:

```bash
# Local disk configuration
export BLOB_PROVIDER=local_disk
export QUEUE_PROVIDER=local_disk
# Run the job
scrape-it-now scrape run https://nytimes.com
```

Example output:

```bash
❯ Start scraping job 7yz91ma
Queued 71/71 links for referrer https://www.google.com/search (1)
3 workers started
Browser chromium launched
...
Queued 15/28 links for referrer https://www.nytimes.com/2024/08/15/business/economy/kamala-harris-inflation-price-gouging.html (2)
Scraped https://www.nytimes.com/2024/08/15/business/economy/kamala-harris-inflation-price-gouging.html (2)
```

Most frequent options are:

| `Options` | Description | `Environment variable` |
|-|-|-|
| `--azure-storage-connection-string`</br>`-ascs` | Azure Storage connection string | `AZURE_STORAGE_CONNECTION_STRING` |
| `--blob-provider`</br>`-bp` | Blob provider | `BLOB_PROVIDER` |
| `--job-name`</br>`-jn` | Job name | `JOB_NAME` |
| `--max-depth`</br>`-md` | Maximum depth | `MAX_DEPTH` |
| `--queue-provider`</br>`-qp` | Queue provider | `QUEUE_PROVIDER` |
| `--save-images`</br>`-si` | Save images | `SAVE_IMAGES` |
| `--save-screenshot`</br>`-ss` | Save screenshot | `SAVE_SCREENSHOT` |
| `--whitelist`</br>`-w` | Whitelist | `WHITELIST` |

For documentation on all available options, run:

```bash
scrape-it-now scrape run --help
```

#### Show job status

Usage with Azure Blob Storage:

```bash
# Azure Storage configuration
export AZURE_STORAGE_CONNECTION_STRING=xxx
# Show the job status
scrape-it-now scrape status [job_name]
```

Usage with Local Disk Blob:

```bash
# Local disk configuration
export BLOB_PROVIDER=local_disk
# Show the job status
scrape-it-now scrape status [job_name]
```

Example output:

```bash
❯ {"created_at":"2024-08-16T15:33:06.602922Z","last_updated":"2024-08-16T16:17:51.571136Z","network_used_mb":5.650620460510254,"processed":1263,"queued":3120}
```

Most frequent options are:

| `Options` | Description | `Environment variable` |
|-|-|-|
| `--azure-storage-connection-string`</br>`-ascs` | Azure Storage connection string | `AZURE_STORAGE_CONNECTION_STRING` |
| `--blob-provider`</br>`-bp` | Blob provider | `BLOB_PROVIDER` |

For documentation on all available options, run:

```bash
scrape-it-now scrape status --help
```

### Index a scraped website

#### Run a job

Usage with Azure Blob Storage, Azure Queue Storage and Azure AI Search:

```bash
# Azure OpenAI configuration
export AZURE_OPENAI_API_KEY=xxx
export AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME=xxx
export AZURE_OPENAI_EMBEDDING_DIMENSIONS=xxx
export AZURE_OPENAI_EMBEDDING_MODEL_NAME=xxx
export AZURE_OPENAI_ENDPOINT=xxx
# Azure Search configuration
export AZURE_SEARCH_API_KEY=xxx
export AZURE_SEARCH_ENDPOINT=xxx
# Azure Storage configuration
export AZURE_STORAGE_CONNECTION_STRING=xxx
# Run the job
scrape-it-now index run [job_name]
```

Usage with Local Disk Blob, Local Disk Queue and Azure AI Search:

```bash
# Azure OpenAI configuration
export AZURE_OPENAI_API_KEY=xxx
export AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME=xxx
export AZURE_OPENAI_EMBEDDING_DIMENSIONS=xxx
export AZURE_OPENAI_EMBEDDING_MODEL_NAME=xxx
export AZURE_OPENAI_ENDPOINT=xxx
# Azure Search configuration
export AZURE_SEARCH_API_KEY=xxx
export AZURE_SEARCH_ENDPOINT=xxx
# Local disk configuration
export BLOB_PROVIDER=local_disk
export QUEUE_PROVIDER=local_disk
# Run the job
scrape-it-now index run [job_name]
```

Example output:

```bash
❯ Start indexing job 7yz91ma
5 workers started
...
434b227 chunked into 6 parts
434b227 is indexed
f001b3e chunked into 86 parts
f001b3e is already indexed
```

Most frequent options are:

| `Options` | Description | `Environment variable` |
|-|-|-|
| `--azure-openai-api-key`</br>`-aoak` | Azure OpenAI API key | `AZURE_OPENAI_API_KEY` |
| `--azure-openai-embedding-deployment-name`</br>`-aoedn` | Azure OpenAI embedding deployment name | `AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME` |
| `--azure-openai-embedding-dimensions`</br>`-aoed` | Azure OpenAI embedding dimensions | `AZURE_OPENAI_EMBEDDING_DIMENSIONS` |
| `--azure-openai-embedding-model-name`</br>`-aoemn` | Azure OpenAI embedding model name | `AZURE_OPENAI_EMBEDDING_MODEL_NAME` |
| `--azure-openai-endpoint`</br>`-aoe` | Azure OpenAI endpoint | `AZURE_OPENAI_ENDPOINT` |
| `--azure-search-api-key`</br>`-asak` | Azure Search API key | `AZURE_SEARCH_API_KEY` |
| `--azure-search-endpoint`</br>`-ase` | Azure Search endpoint | `AZURE_SEARCH_ENDPOINT` |
| `--azure-storage-connection-string`</br>`-ascs` | Azure Storage connection string | `AZURE_STORAGE_CONNECTION_STRING` |
| `--blob-provider`</br>`-bp` | Blob provider | `BLOB_PROVIDER` |
| `--queue-provider`</br>`-qp` | Queue provider | `QUEUE_PROVIDER` |

For documentation on all available options, run:

```bash
scrape-it-now index run --help
```

## Architecture

### Scrape

```mermaid
---
title: Scrape process with Azure Storage
---
graph LR
  cli["CLI"]
  web["Website"]

  subgraph "Azure Queue Storage"
    to_chunk["To chunk"]
    to_scrape["To scrape"]
  end

  subgraph "Azure Blob Storage"
    subgraph "Container"
      job["job"]
      scraped["scraped"]
      state["state"]
    end
  end

  cli -- 1. Pull message --> to_scrape
  cli -- 2. Get cache --> scraped
  cli -- 3. Browse --> web
  cli -- 4. Update cache --> scraped
  cli -- 5. Push state --> state
  cli -- 6. Add message --> to_scrape
  cli -- 7. Add message --> to_chunk
  cli -- 8. Update state --> job
```

### Index

```mermaid
---
title: Scrape process with Azure Storage and Azure AI Search
---
graph LR
  search["Azure AI Search"]
  cli["CLI"]
  embeddings["Azure OpenAI Embeddings"]

  subgraph "Azure Queue Storage"
    to_chunk["To chunk"]
  end

  subgraph "Azure Blob Storage"
    subgraph "Container"
      scraped["scraped"]
    end
  end

  cli -- 1. Pull message --> to_chunk
  cli -- 2. Get cache --> scraped
  cli -- 3. Chunk --> cli
  cli -- 4. Embed --> embeddings
  cli -- 5. Push to search --> search
```

## Design

Blob storage is organized in folders:

```txt
[job_name]-scraping/            # Job name (either defined by the user or generated)
    scraped/                    # All the data from the pages
        [page_id]/              # Assets from a page
            screenshot.jpeg     # Screenshot (if enabled)
            [image_id].[ext]    # Image binary (if enabled)
            [image_id].json     # Image metadata (if enabled)
        [page_id].json          # Data from a page
    state/                      # Job states (cache & parallelization)
        [page_id]               # Page state
    job.json                    # Job state (aggregated stats)
```

Page data is considered as an API (won't break until the next major version) and is stored in JSON format:

```json
{
  "created_at": "2024-09-11T14:06:43.566187Z",
  "redirect": "https://www.nytimes.com/interactive/2024/podcasts/serial-season-four-guantanamo.html",
  "status": 200,
  "url": "https://www.nytimes.com/interactive/2024/podcasts/serial-season-four-guantanamo.html",
  "content": "## Listen to the trailer for Serial Season 4...",
  "etag": null,
  "links": [
    "https://podcasts.apple.com/us/podcast/serial/id917918570",
    "https://music.amazon.com/podcasts/d1022069-8863-42f3-823e-857fd8a7b616/serial?ref=dm_sh_OVBHkKYvW1poSzCOsBqHFXuLc",
    ...
  ],
  "metas": {
    "description": "“Serial” returns with a history of Guantánamo told by people who lived through key moments in Guantánamo’s evolution, who know things the rest of us don’t about what it’s like to be caught inside an improvised justice system.",
    "articleid": "100000009373583",
    "twitter:site": "@nytimes",
    ...
  },
  "network_used_mb": 1.041460037231445,
  "raw": "<head>...</head><body>...</body>",
  "valid_until": "2024-09-11T14:11:37.790570Z"
}
```

## Advanced usage

### Source environment variables

To configure easily the CLI, source environment variables from a `.env` file. For example, for the `--azure-storage-connection-string` option:

```bash
AZURE_STORAGE_CONNECTION_STRING=xxx
```

For arguments that accept multiple values, use a space-separated list. For example, for the `--whitelist` option:

```bash
WHITELIST=learn\.microsoft\.com,^/(?!en-us).*,^/[^/]+/answers/,^/[^/]+/previous-versions/ go\.microsoft\.com,.*
```

### Application cache directory

The cache directoty depends on the operating system:

- `~/.config/scrape-it-now` (Unix)
- `~/Library/Application Support/scrape-it-now` (macOS)
- `C:\Users\<user>\AppData\Roaming\scrape-it-now` (Windows)

### Broswer binary installation

Browser binaries are automatically downloaded or updated at each run. Browser is Chromium and it is not configurable (feel free to open an issue if you need another browser), it weights around 450MB. Cache is stored in the cache directory.

### How Local Disk storage works

Local Disk storage is used for both blob and queue. It is not recommended for production use, as it is not scalable, not fault-tolerant and not parallelizable.

Local Disk Blob uses a directory structure to store blobs. Each blob is stored in a file with the blob name as the file name. Lease is implemented with lock files. By default, files are stored in a directory relative to the command execution directory.

Local Disk Queue uses a SQLite database to store messages. Database is stored in the cache directory. SQL databases implement visibility timeout and deletion tokens to ensure consistency to the stateless queue services like Azure Queue Storage.
