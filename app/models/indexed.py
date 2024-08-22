from pydantic import BaseModel, Field


class IndexedSearchModel(BaseModel):
    content: str | None = None
    indexed_id: str = Field(
        validation_alias="id",  # Compatibility with v1, don't override a built-in function
    )
    url: str


class IndexedIngestModel(IndexedSearchModel):
    vectors: list[float]
