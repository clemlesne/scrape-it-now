from http import HTTPStatus
from typing import Any, ClassVar

from aiohttp import ClientSession
from pydantic import BaseModel, ValidationError

from app.helpers.logging import logger
from app.models.proxy import Proxy
from app.persistence.iproxy import IProxy


class Config(BaseModel):
    url: str = (
        "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks5.txt"
    )


class ThespeedxProxyList(IProxy):
    _config: Config
    _proxies: ClassVar[list[Proxy]] = []

    def __init__(
        self,
        config: Config,
    ) -> None:
        logger.info("TheSpeedX PROXY-LIST is configured")
        self._config = config

    async def get_list(self) -> list[Proxy]:
        return self._proxies

    async def _load_list(self) -> None:
        async with ClientSession() as session:
            # Dowwnload the proxy list
            async with session.get(self._config.url) as response:
                if response.status != HTTPStatus.OK:
                    logger.error("Cannot download proxy list: %s", response.status)
                    return
                data = await response.text()

            # Parse the proxy list
            for line in data.splitlines():
                if not line:
                    continue
                host, port = line.split(":")
                # Validate the model
                try:
                    model = Proxy(
                        host=host,
                        port=int(port),
                    )
                    self._proxies.append(model)
                except ValidationError as e:  # In case of invalid data, only log it
                    logger.warning("Cannot parse proxy: %s", e)

    async def __aenter__(self) -> "ThespeedxProxyList":
        await self._load_list()
        return self

    async def __aexit__(self, *exc: Any) -> None:
        pass
