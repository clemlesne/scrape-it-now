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
	python3 -m pip install --upgrade pip wheel setuptools

	@echo "➡️ Upgrading pip-tools..."
	python3 -m pip install --upgrade pip-tools

	@echo "➡️ Compiling app requirements..."
	pip-compile \
		--output-file requirements.txt \
		pyproject.toml

	@echo "➡️ Compiling dev requirements..."
	pip-compile \
		--extra dev \
		--output-file requirements-dev.txt \
		pyproject.toml

	@echo "➡️ Updating DNS blocklist..."
	curl -sSfL https://blocklistproject.github.io/Lists/alt-version/ads-nl.txt > resources/ads-nl.txt

test:
	@echo "➡️ Test generic formatter (Black)..."
	python3 -m black --check .

	@echo "➡️ Test import formatter (isort)..."
	python3 -m isort --jobs -1 --check .

	@echo "➡️ Test dependencies issues (deptry)..."
	python3 -m deptry .

	@echo "➡️ Test code smells (Pylint)..."
	python3 -m pylint .

	@echo "➡️ Test types (Pyright)..."
	python3 -m pyright .

dev:
	python3 -m pip install --editable .
	@echo "Now you can run 'scrape-it-now' CLI!"

build:
	@echo "➡️ Building app..."
	pyinstaller \
		--add-data resources:resources \
		--clean \
		--icon resources/logo.ico \
		--name scrape-it-now \
		--onefile \
		--optimize 2 \
		app/app.py

lint:
	@echo "➡️ Fix with generic formatter (Black)..."
	python3 -m black .

	@echo "➡️ Fix with import formatter (isort)..."
	python3 -m isort --jobs -1 .

sbom:
	@echo "🔍 Generating SBOM..."
	syft scan \
		--source-version $(version_full)  \
		--output spdx-json=./sbom-reports/$(version_full).json \
		.
