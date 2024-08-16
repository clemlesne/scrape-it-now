from datetime import datetime, UTC
from pydantic import BaseModel, Field


class StateJobModel(BaseModel):
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
    last_updated: datetime = Field(default_factory=lambda: datetime.now(UTC))
    processed: int = 0
    queued: int = 0


class StateScrapedModel(BaseModel):
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
