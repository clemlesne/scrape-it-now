.PHONY: version version-full install upgrade test dev build lint

# Versioning
version_full ?= $(shell $(MAKE) --silent version-full)
version_small ?= $(shell $(MAKE) --silent version)
# App location
default_location := swedencentral
openai_location := swedencentral
search_location := westeurope
# Container configuration
container_name := ghcr.io/microsoft/scrape-it-now
# Bicep outputs
api_url ?= $(shell az deployment sub show --name $(name) | yq '.properties.outputs["apiUrl"].value')
blob_account_name ?= $(shell az deployment sub show --name $(name) | yq '.properties.outputs["blobAccountName"].value')
front_url ?= $(shell az deployment sub show --name $(name) | yq '.properties.outputs["frontUrl"].value')
static_url ?= $(shell az deployment sub show --name $(name) | yq '.properties.outputs["staticUrl"].value')

version:
	@bash ./cicd/version/version.sh -g . -c

version-full:
	@bash ./cicd/version/version.sh -g . -c -m

brew:
	@echo "➡️ Installing Syft..."
	brew install syft

	@echo "➡️ Installing uv..."
	brew install uv

install:
	@echo "➡️ Installing venv..."
	uv venv --python 3.13 --allow-existing

	$(MAKE) install-deps

install-deps:
	@echo "➡️ Syncing dependencies..."
	uv sync --extra dev

	@echo "➡️ Installing Playwright dependencies..."
	uv run playwright install chromium --with-deps --no-shell

upgrade:
	@echo "➡️ Updating Git submodules..."
	git submodule update --init --recursive

	@echo "➡️ Compiling requirements..."
	uv lock --upgrade

	@echo "➡️ Updating DNS blocklist..."
	curl -sSfL https://blocklistproject.github.io/Lists/alt-version/ads-nl.txt > src/scrape_it_now/resources/ads-nl.txt

test:
	$(MAKE) test-static
	$(MAKE) run-test-servers
	$(MAKE) test-unit-simple
	$(MAKE) kill-test-servers

test-static:
	@echo "➡️ Test dependencies issues (deptry)..."
	uv run deptry src

	@echo "➡️ Test code smells (Ruff)..."
	uv run ruff check

	@echo "➡️ Test types (Pyright)..."
	uv run pyright

run-test-servers:
	@echo "➡️ Starting local static server..."
	uv run -m http.server -d ./tests/websites 8000 & echo "$$!" > .static_server.pid

kill-test-servers:
	@echo "➡️ Killing local static server..."
	kill -s SIGKILL $(shell cat .static_server.pid)

test-unit-simple:
	@echo "➡️ Unit tests with no extra (Pytest)..."
	uv run pytest \
		--junit-xml=test-reports/$(version_full)-simple.xml \
		--log-file=test-reports/$(version_full)-simple.log \
		--maxprocesses=4 \
		-n=logical \
		tests/*.py

test-unit-profiling:
	@echo "➡️ Unit tests with profiling (Pytest)..."
	uv run scalene \
		--json \
		--outfile test-reports/$(version_full)-profiling.json \
		--- -m pytest \
			--junit-xml=test-reports/$(version_full)-profiling.xml \
			--log-file=test-reports/$(version_full)-profiling.log \
			-k "_profiling" \
			tests/*.py

dev:
	uv pip install --editable .
	@echo "Now you can run 'scrape-it-now' CLI!"

build:
	@echo "➡️ Building app..."
	uv build

lint:
	@echo "➡️ Fix with formatter..."
	uv run ruff format

	@echo "➡️ Lint with linter..."
	uv run ruff check --fix

sbom:
	@echo "🔍 Generating SBOM..."
	syft scan \
		--source-version $(version_full)  \
		--output spdx-json=./sbom-reports/$(version_full).json \
		dist
