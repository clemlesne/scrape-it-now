from pydantic import BaseModel


class Proxy(BaseModel, frozen=True):
    host: str
    password: str | None = None
    port: int
    protocol: str = "socks5"
    username: str | None = None
