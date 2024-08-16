from pydantic import BaseModel


class IndexedSearchModel(BaseModel):
    content: str | None = None
    id: str
    url: str


class IndexedIngestModel(IndexedSearchModel):
    vectors: list[float]
