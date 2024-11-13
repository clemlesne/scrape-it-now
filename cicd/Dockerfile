# Base container
FROM docker.io/library/python:3.12-slim-bookworm@sha256:541d45d3d675fb8197f534525a671e2f8d66c882b89491f9dda271f4f94dcd06 AS base

RUN rm -f /etc/apt/apt.conf.d/docker-clean \
    && echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache

# Build container
FROM base AS build

RUN --mount=target=/var/lib/apt/lists,type=cache,id=apt-lists-${TARGETPLATFORM},sharing=locked --mount=target=/root/.cache/pip,type=cache,id=pip-${TARGETPLATFORM},sharing=locked \
    apt-get update -q \
    && apt-get install -y -q --no-install-recommends \
        gcc \
        git \
        libc6 \
        python3-dev \
    && python3 -m pip \
        --disable-pip-version-check \
        --quiet \
        install \
            setuptools wheel

RUN python -m venv /venv
ENV PATH=/venv/bin:$PATH

COPY . .
RUN --mount=target=/root/.cache/pip,type=cache,id=pip-${TARGETPLATFORM},sharing=locked \
    python3 -m pip install .
RUN scrape-it-now version

# Output container
FROM base

RUN --mount=target=/var/lib/apt/lists,type=cache,id=apt-lists-${TARGETPLATFORM},sharing=locked \
    apt-get update -q \
    && apt-get install -y -q --no-install-recommends \
        # Deps for PyPandoc downloader bundled in the CLI
        binutils \
        # Deps for psutil
        libc6

COPY --from=build /venv /venv
ENV PATH=/venv/bin:$PATH

RUN --mount=target=/var/lib/apt/lists,type=cache,id=apt-lists-${TARGETPLATFORM},sharing=locked --mount=target=/root/.cache/scrape-it-now,type=cache,id=scrape-it-now-${TARGETPLATFORM},sharing=locked \
    scrape-it-now scrape install --with-deps --debug

CMD ["scrape-it-now", "scrape", "run"]
