import logging

import click


class ClickHandler(logging.Handler):
    def emit(
        self,
        record: logging.LogRecord,
    ) -> None:
        try:
            formatted = self.format(record)
            is_error = record.levelno >= logging.ERROR
            color = (
                "red"
                if is_error
                else "yellow" if record.levelno >= logging.WARNING else None
            )
            click.secho(
                err=is_error,
                fg=color,
                message=formatted,
            )
        except Exception:
            self.handleError(record)


logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger("saai")
logger.propagate = False
logger.addHandler(ClickHandler())
logger.setLevel(logging.INFO)
