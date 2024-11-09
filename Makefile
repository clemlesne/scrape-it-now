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

install:
	$(MAKE) install-deps

	@echo "➡️ Installing Playwright dependencies..."
	python3 -m playwright install chrome --with-deps

install-deps:
	@echo "➡️ Installing pip-tools..."
	python3 -m pip install pip-tools

	@echo "➡️ Syncing dependencies..."
	pip-sync --pip-args "--no-deps" requirements-dev.txt

upgrade:
	@echo "➡️ Updating Git submodules..."
	git submodule update --init --recursive

	@echo "➡️ Upgrading pip..."
	python3 -m pip install --upgrade pip wheel setuptools build

	@echo "➡️ Upgrading pip-tools..."
	python3 -m pip install --upgrade pip-tools

	@echo "➡️ Compiling app requirements..."
	pip-compile \
		--output-file requirements.txt \
		--upgrade \
		pyproject.toml

	@echo "➡️ Compiling dev requirements..."
	pip-compile \
		--extra dev \
		--output-file requirements-dev.txt \
		--upgrade \
		pyproject.toml

	@echo "➡️ Updating DNS blocklist..."
	curl -sSfL https://blocklistproject.github.io/Lists/alt-version/ads-nl.txt > src/scrape_it_now/resources/ads-nl.txt

test:
	$(MAKE) test-static
	$(MAKE) test-unit

test-static:
	@echo "➡️ Test dependencies issues (deptry)..."
	python3 -m deptry src

	@echo "➡️ Test code smells (Ruff)..."
	python3 -m ruff check --select I,PL,RUF,UP,ASYNC,A,DTZ,T20,ARG,PERF

	@echo "➡️ Test types (Pyright)..."
	python3 -m pyright .

test-unit:
	bash cicd/test-unit-ci.sh

test-static-server:
	@echo "➡️ Starting local static server..."
	python3 -m http.server -d ./tests/websites 8000

test-unit-run:
	@echo "➡️ Unit tests (Pytest)..."
	python3 -m pytest \
		--junit-xml=test-reports/$(version_full).xml \
		--maxprocesses=4 \
		-n=logical \
		tests/*.py

dev:
	python3 -m pip install --editable .
	@echo "Now you can run 'scrape-it-now' CLI!"

build:
	@echo "➡️ Building app..."
	python3 -m build

lint:
	@echo "➡️ Fix with formatter..."
	python3 -m ruff format

	@echo "➡️ Lint with linter..."
	python3 -m ruff check --select I,PL,RUF,UP,ASYNC,A,DTZ,T20,ARG,PERF --fix

sbom:
	@echo "🔍 Generating SBOM..."
	syft scan \
		--source-version $(version_full)  \
		--output spdx-json=./sbom-reports/$(version_full).json \
		dist
