from datetime import UTC, datetime

from pydantic import BaseModel, Field


class ScrapedAbstractModel(BaseModel):
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
    redirect: str | None = None
    status: int
    url: str


class ScrapedUrlModel(ScrapedAbstractModel):
    """
    Scraped HTML page with content and links.
    """

    content: str | None = None
    etag: str | None
    links: list[str] = []
    network_used_mb: float = 0.0
    raw: str | None = None
    title: str | None = None
    valid_until: datetime | None


class ScrapedImageModel(ScrapedAbstractModel):
    """
    Scraped image from a page.
    """

    pass


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
