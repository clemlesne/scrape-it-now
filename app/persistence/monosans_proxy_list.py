from http import HTTPStatus
from typing import Any, ClassVar

from aiohttp import ClientSession, ClientTimeout
from pydantic import BaseModel, ValidationError

from app.helpers.logging import logger
from app.models.proxy import Proxy
from app.persistence.iproxy import IProxy


class Config(BaseModel):
    url: str = (
        "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/socks5.txt"
    )


class MonosansProxyList(IProxy):
    _config: Config
    _proxies: ClassVar[list[Proxy]] = []

    def __init__(
        self,
        config: Config,
    ) -> None:
        self._config = config

    async def get_list(self) -> list[Proxy]:
        return self._proxies

    async def _load_list(self) -> None:
        async with ClientSession(
            timeout=ClientTimeout(total=30),  # 30 secs
            trust_env=True,  # Allow to configure HTTP proxies from env
        ) as session:
            # Dowwnload the proxy list
            async with session.get(self._config.url) as response:
                if response.status != HTTPStatus.OK:
                    logger.error("Cannot download proxy list: %s", response.status)
                    return
                data = await response.text()

            # Parse the proxy list
            for line in data.splitlines():
                # Skip empty lines
                if not line:
                    continue
                # Parse line per line, format should be [host]:[port]
                try:
                    host, port = line.split(":")
                except ValueError:  # In case of invalid data, only log it
                    logger.debug("Cannot parse proxy: %s", line)
                    continue
                # Validate the model
                try:
                    model = Proxy(
                        host=host,
                        port=int(port),
                    )
                    self._proxies.append(model)
                except ValidationError as e:  # In case of invalid data, only log it
                    logger.debug("Cannot parse proxy: %s", e)

    async def __aenter__(self) -> "MonosansProxyList":
        await self._load_list()
        logger.info("monosans proxy-list is configured (%i loaded)", len(self._proxies))
        return self

    async def __aexit__(self, *exc: Any) -> None:
        pass
