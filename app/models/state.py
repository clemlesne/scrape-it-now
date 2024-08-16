from datetime import UTC, datetime

from pydantic import BaseModel, Field


class StateJobModel(BaseModel):
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
    last_updated: datetime = Field(default_factory=lambda: datetime.now(UTC))
    network_used_mb: float = 0.0
    processed: int = 0
    queued: int = 0


class StateScrapedModel(BaseModel):
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
