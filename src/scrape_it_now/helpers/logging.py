from logging import DEBUG, INFO, Logger

import click
from structlog import (
    PrintLoggerFactory,
    configure,
    configure_once,
    get_logger as structlog_get_logger,
    make_filtering_bound_logger,
)
from structlog.contextvars import merge_contextvars
from structlog.dev import ConsoleRenderer
from structlog.processors import (
    StackInfoRenderer,
    TimeStamper,
    UnicodeDecoder,
    add_log_level,
    format_exc_info,
)
from structlog.stdlib import PositionalArgumentsFormatter

configure_once(
    cache_logger_on_first_use=True,
    context_class=dict,
    logger_factory=PrintLoggerFactory(click.get_text_stream("stdout")),
    wrapper_class=make_filtering_bound_logger(INFO),
    processors=[
        # Add contextvars support
        merge_contextvars,
        # Add log level
        add_log_level,
        # Enable %s-style formatting
        PositionalArgumentsFormatter(),
        # Add timestamp
        TimeStamper(fmt="iso", utc=True),
        # Add exceptions info
        StackInfoRenderer(),
        format_exc_info,
        # Decode Unicode to str
        UnicodeDecoder(),
        # Pretty printing in a terminal session
        ConsoleRenderer(),
    ],
)

# Framework does not exactly expose Logger, but that's easier to work with
logger: Logger = structlog_get_logger("scrape-it-now")


def enable_debug_logging() -> None:
    configure(
        wrapper_class=make_filtering_bound_logger(DEBUG),
    )
