import random
from abc import abstractmethod
from enum import Enum, unique
from typing import Any, ClassVar

from app.helpers.logging import logger
from app.models.proxy import Proxy


@unique
class Provider(str, Enum):
    NO_PROXY = "no_proxy"
    THESPEEDX_PROXY_LIST = "thespeedx_proxy_list"


class IProxy:
    _proxy_usage: ClassVar[dict[Proxy, int]] = {}

    async def get_one(self) -> Proxy | None:
        """
        Get one random proxy.

        The proxy will be with a weight based on the number of times it was used.
        """
        # Get the fresh list of proxies
        proxies_fresh = await self.get_list()
        # Skip and clear if there are no proxies
        if not proxies_fresh:
            self._proxy_usage.clear()
            return None
        # Remove the proxy if it's not in the fresh list
        for proxy in self._proxy_usage.keys():
            if proxy not in proxies_fresh:
                self._proxy_usage.pop(proxy)
        # Add the new proxies to the usage dict
        for proxy in proxies_fresh:
            if proxy not in self._proxy_usage:
                self._proxy_usage[proxy] = 0
        # Get the total weight
        total = sum(self._proxy_usage.values())
        # Get the proxy
        number = random.randint(0, total)
        for proxy, weight in self._proxy_usage.items():
            number -= weight
            if number <= 0:
                # Increase the weight
                self._proxy_usage[proxy] += 1
                # Return
                return proxy

    def report_failure(self, proxy: Proxy) -> None:
        """
        Report a failure for the proxy.

        This will increase the weight of the proxy to lower the chance of using it again. Proxy is not removed from the list.
        """
        # Skip if the proxy is not anymore registered
        if proxy not in self._proxy_usage:
            return
        # Increase enought compared to normal use
        logger.debug("Reporting failure for proxy %s", proxy)
        self._proxy_usage[proxy] += 10

    @abstractmethod
    async def get_list(
        self,
    ) -> list[Proxy]:
        """
        Get the list of proxies.
        """
        pass

    @abstractmethod
    async def __aenter__(self) -> "IProxy":
        pass

    @abstractmethod
    async def __aexit__(self, *exc: Any) -> None:
        pass
