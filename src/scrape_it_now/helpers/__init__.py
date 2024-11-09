from dotenv import find_dotenv, load_dotenv

load_dotenv(
    find_dotenv(
        # Use the current working directory from where the command is run
        usecwd=True,
    )
)
