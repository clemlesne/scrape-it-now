from datetime import datetime
from uuid import uuid4

from pydantic import BaseModel, Field


class LeaseModel(BaseModel):
    lease_id: str = Field(default_factory=lambda: str(uuid4()))
    until: datetime
