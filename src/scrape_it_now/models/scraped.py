from datetime import UTC, datetime

from pydantic import BaseModel, Field

from scrape_it_now.helpers.resources import hash_url


class UrlAbstractModel(BaseModel):
    url: str

    @property
    def model_id(self) -> str:
        return hash_url(self.url)

    @property
    def model_short_id(self) -> str:
        return self.model_id[:7]

    def __hash__(self) -> int:
        return self.url.__hash__()

    def __eq__(self, other) -> bool:
        if not isinstance(other, ScrapedQueuedModel):
            return False
        return self.url == other.url


class ScrapedAbstractModel(UrlAbstractModel):
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
    redirect: str | None = None
    status: int


class ScrapedUrlModel(ScrapedAbstractModel):
    """
    Scraped HTML page with content and links.
    """

    content: str | None = None
    etag: str | None
    links: list[str] = []
    metas: dict[str, str | None] = {}
    network_used_mb: float = 0.0
    raw: str | None = None
    title: str | None = None
    valid_until: datetime | None


class ScrapedImageModel(ScrapedAbstractModel):
    """
    Scraped image from a page.
    """

    pass


class ScrapedQueuedModel(UrlAbstractModel):
    """
    Queued URL with depth.
    """

    depth: int
    referrer: str
