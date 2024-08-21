import asyncio, random, string
from os import environ as env

import pytest

from app.helpers.logging import logger
from app.helpers.persistence import queue_client
from app.persistence.iqueue import MessageNotFoundError, Provider as QueueProvider


@pytest.mark.parametrize(
    "provider",
    [
        QueueProvider.AZURE_QUEUE_STORAGE,
        QueueProvider.LOCAL_DISK,
    ],
    ids=lambda x: x.value,
)
@pytest.mark.asyncio(scope="session")
@pytest.mark.repeat(10)  # Catch multi-threading and concurrency issues
async def test_acid(provider: QueueProvider) -> None:
    # Init values
    queue_name = _random_name()
    first_content = _random_content()
    second_content = _random_content()

    # Debug
    logger.info("Queue name: %s", queue_name)

    # Init client
    async with queue_client(
        azure_storage_connection_string=env["AZURE_STORAGE_CONNECTION_STRING"],
        provider=provider,
        queue=queue_name,
    ) as client:
        # Check not exists
        async for _ in client.receive_messages(
            max_messages=1,
            visibility_timeout=5,
        ):
            raise AssertionError("Queue should be empty")

        # Send test messages
        await client.send_message(first_content)
        await client.send_message(second_content)

        # Receive test message
        i = 0
        received_message = None
        async for message in client.receive_messages(
            max_messages=10,
            visibility_timeout=5,
        ):
            # Check message content
            if i == 0:
                assert message.content == first_content, "Message content mismatch"
                received_message = message
            elif i == 1:
                assert message.content == second_content, "Message content mismatch"
            else:
                raise AssertionError("Too many messages received")
            i += 1

        # Check if messages count is correct
        if i != 2 or not received_message:
            raise AssertionError("Not enough messages received")

        # Check if messages are invisible for the rest of the clients
        async for message in client.receive_messages(
            max_messages=1,
            visibility_timeout=5,
        ):
            if message.message_id == received_message.message_id:
                raise AssertionError("Message should be invisible")

        # Check if messages are visible after visibility timeout
        await asyncio.sleep(5)
        async for message in client.receive_messages(
            max_messages=1,
            visibility_timeout=5,
        ):
            if message.message_id != received_message.message_id:
                raise AssertionError("Message should be visible")

        # Check deletions
        async for message in client.receive_messages(
            max_messages=1,
            visibility_timeout=5,
        ):
            # Delete test message
            await client.delete_message(message)

            # Check if raise when delete again
            with pytest.raises(MessageNotFoundError):
                await client.delete_message(message)

        # Check not exists
        async for _ in client.receive_messages(
            max_messages=1,
            visibility_timeout=5,
        ):
            raise AssertionError("Queue should be empty")

        # Clean up
        await client.delete_queue()


@pytest.mark.parametrize(
    "provider",
    [
        QueueProvider.AZURE_QUEUE_STORAGE,
        QueueProvider.LOCAL_DISK,
    ],
    ids=lambda x: x.value,
)
@pytest.mark.asyncio(scope="session")
@pytest.mark.repeat(10)  # Catch multi-threading and concurrency issues
async def test_send_many(provider: QueueProvider) -> None:
    # Init values
    queue_name = _random_name()

    messages: list[tuple[bool, str]] = []
    for _ in range(100):
        message_content = _random_content()
        messages.append((False, message_content))

    # Debug
    logger.info("Queue name: %s", queue_name)

    # Init client
    async with queue_client(
        azure_storage_connection_string=env["AZURE_STORAGE_CONNECTION_STRING"],
        provider=provider,
        queue=queue_name,
    ) as client:

        # Send test messages
        tasks = [client.send_message(content) for _, content in messages]
        await asyncio.gather(*tasks)

        # Receive test messages
        async for message in client.receive_messages(
            max_messages=len(messages) + 1,  # +1 to catch extra messages
            visibility_timeout=5,
        ):
            # Search for message; order nor duplicates are guaranteed
            found = False
            for i, (_, content) in enumerate(messages):
                if content == message.content:
                    # Mark as found
                    found = True
                    messages[i] = (True, content)
                    break
            # Raise if not found
            if not found:
                raise AssertionError("Message content mismatch")

        # Check if all messages were found
        if not all(found for found, _ in messages):
            raise AssertionError("Not all messages were found")

        # Clean up
        await client.delete_queue()


def _random_name() -> str:
    return "".join(
        random.choice(string.ascii_lowercase + string.digits) for _ in range(32)
    )


def _random_content() -> str:
    return "".join(
        random.choice(string.printable) for _ in range(random.randint(1, 512))
    )
