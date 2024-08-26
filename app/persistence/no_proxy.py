from typing import Any

from app.helpers.logging import logger
from app.models.proxy import Proxy
from app.persistence.iproxy import IProxy


class NoProxy(IProxy):
    def __init__(self) -> None:
        logger.info("No Proxy is configured")

    async def get_list(self) -> list[Proxy]:
        return []

    async def __aenter__(self) -> "NoProxy":
        return self

    async def __aexit__(self, *exc: Any) -> None:
        pass
