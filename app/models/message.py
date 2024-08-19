from pydantic import BaseModel


class Message(BaseModel):
    content: str
    delete_token: str | None
    message_id: str
