from datetime import UTC, datetime

from pydantic import BaseModel, Field


class StateJobModel(BaseModel):
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
    last_updated: datetime = Field(default_factory=lambda: datetime.now(UTC))
    network_used_mb: float = 0.0
    processed: int = 0
    queued: int = 0

    @property
    def stats(self) -> dict[str, float]:
        """
        Computed statistics for the job.
        """
        return {
            "throughput_avg_items": self.processed
            / (self.last_updated - self.created_at).total_seconds(),
            "throughput_avg_mb": self.network_used_mb
            / (self.last_updated - self.created_at).total_seconds(),
            "time_elapsed": (self.last_updated - self.created_at).total_seconds(),
        }


class StateScrapedModel(BaseModel):
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
