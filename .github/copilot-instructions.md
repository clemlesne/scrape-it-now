# Copilot Instructions for scrape-it-now

## Architecture Overview

This is a **decoupled web scraper** with two distinct phases:

1. **Scraping**: Extract content from websites (`scrape.py`) → Queue messages → Store in blob
2. **Indexing**: Process scraped content (`index.py`) → AI embeddings → Azure AI Search

The architecture uses **provider abstraction** for storage backends:

- **Azure**: Queue Storage + Blob Storage + AI Search (production)
- **Local**: SQLite + File System (development/testing)

## Key Patterns & Conventions

### Provider Pattern for Storage

All persistence uses interfaces with swappable implementations:

```python
# Interface definitions in persistence/i*.py
from scrape_it_now.persistence.iblob import IBlob, Provider as BlobProvider
from scrape_it_now.persistence.iqueue import IQueue, Provider as QueueProvider

# Get clients via helpers/persistence.py factory functions
async with blob_client(...) as blob:
    await blob.upload_blob(...)
```

### Async/Parallel Processing

- Use `aiojobs` for parallel workers: `await run_workers(worker_func, workers_count)`
- Always use `async/await` for I/O operations (web requests, storage, etc.)
- Bind context variables for logging: `bind_contextvars(process=f"scrape-{job_name}-{worker_id}")`

### Resource & State Management

- URL hashing for consistent IDs: `hash_url(url)` → deterministic page identifiers
- Job containers follow pattern: `{job_name}-scraping/` for blob storage
- State files in `state/` subdirectory prevent duplicate processing
- Use `file_lock()` context manager for concurrent access protection

### CLI & Configuration

- All commands use Click decorators with environment variable binding
- Configuration helpers in `cli.py`: `@azure_storage_params`, `@common_params`
- Environment variables follow pattern: `AZURE_STORAGE_ACCESS_KEY`, `BLOB_PROVIDER`, etc.

## Development Workflows

### Essential Commands

```bash
# Setup (uses uv for fast Python package management)
make install dev          # Install deps + playwright + editable install

# Testing (requires local test server)
make test                  # Full test suite with static analysis
make run-test-servers      # Start local HTTP server for tests (port 8000)
make kill-test-servers     # Stop test servers

# Development
make lint                  # Ruff formatter + linter fixes
make upgrade              # Update dependencies + DNS blocklist
```

### Testing Setup

Tests require local static server for scraping test websites in `tests/websites/`:

- Server runs on `localhost:8000` via `http.server`
- Use `conftest.py` browser fixture for Playwright tests
- Install browser deps: `playwright install chromium --with-deps`

### Data Models & Validation

All data structures are Pydantic models in `models/`:

- `ScrapedUrlModel`: Main page data with content, links, metadata
- `ScrapedImageModel`: Image data and metadata
- `IndexedIngestModel`: AI Search document format
- Models include `model_id` property using URL hash for consistent IDs

## Integration Points

### Storage Abstraction

Switch between Azure and Local via environment variables:

```bash
# Azure (production)
export AZURE_STORAGE_ACCESS_KEY=xxx
export AZURE_STORAGE_ACCOUNT_NAME=xxx

# Local (development)
export BLOB_PROVIDER=local_disk
export QUEUE_PROVIDER=local_disk
```

### Browser Automation

- Uses Playwright with Chromium for dynamic content
- Browser install path managed by `helpers.resources.browsers_install_path()`
- Random user agents and viewport sizes for anonymity
- Ad blocking via `resources/ads-nl.txt` (updated in `make upgrade`)

### AI/Search Integration

- OpenAI embeddings via Azure OpenAI service
- Chunking with tiktoken for token counting
- Azure AI Search for semantic search capabilities
- Authentication via Azure Identity or API keys

## Critical File Locations

- **Core logic**: `src/scrape_it_now/{scrape,index,cli}.py`
- **Persistence**: `src/scrape_it_now/persistence/` - all storage abstractions
- **Models**: `src/scrape_it_now/models/` - Pydantic data structures
- **Helpers**: `src/scrape_it_now/helpers/` - utilities for logging, threading, resources
- **Tests**: `tests/` with local website fixtures in `tests/websites/`
- **Config**: `pyproject.toml` for dependencies, `Makefile` for commands

## Common Pitfalls

- Always use `await` with storage operations - they're async by design
- Queue messages need explicit deletion after processing: `await queue.delete_message(message.id, message.receipt)`
- Use `blob.lease_blob()` context manager for exclusive access during writes
- Environment variables are primary config method - CLI args are secondary
- Local disk storage is SQLite-based, not suitable for production scale
