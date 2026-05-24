"""Module entry point for ``python -m ohmo``.

Load environment variables from a local .env file when available before
initializing the CLI application.
"""

try:
    # Prefer python-dotenv if available so `.env` in the project root is loaded.
    from dotenv import load_dotenv, find_dotenv
    load_dotenv(find_dotenv())
except Exception:
    # If python-dotenv isn't installed or loading fails, continue without failing.
    pass

from ohmo.cli import app


if __name__ == "__main__":
    app()

