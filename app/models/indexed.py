from datetime import datetime

from pydantic import BaseModel, Field


class IndexedSearchModel(BaseModel):
    chunck_number: int
    content: str | None = None
    created_at: datetime
    indexed_id: str = Field(
        serialization_alias="id",  # Compatibility with v1, don't override a built-in function
    )
    title: str | None = None
    url: str


class IndexedIngestModel(IndexedSearchModel):
    vectors: list[float]
