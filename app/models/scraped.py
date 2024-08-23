from datetime import UTC, datetime

from pydantic import BaseModel, Field


class ScrapedUrlModel(BaseModel):
    """
    Scraped result with content and links.
    """

    content: str | None = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
    etag: str | None
    links: list[str] = []
    network_used_mb: float = 0.0
    raw: str | None = None
    redirect: str | None = None
    status: int
    title: str | None = None
    url: str
    valid_until: datetime | None


class ScrapedQueuedModel(BaseModel):
    """
    Queued URL with depth.
    """

    depth: int
    referrer: str
    url: str

    def __hash__(self) -> int:
        return self.url.__hash__()

    def __eq__(self, other) -> bool:
        if not isinstance(other, ScrapedQueuedModel):
            return False
        return self.url == other.url
