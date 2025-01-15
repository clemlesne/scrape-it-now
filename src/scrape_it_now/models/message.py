from pydantic import BaseModel


class Message(BaseModel):
    content: str
    delete_token: str | None
    dequeue_count: int | None
    message_id: str
