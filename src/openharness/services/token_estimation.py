"""Simple token estimation utilities.

Attempts to use the `tiktoken` tokenizer when available to provide
accurate token counts for a given model (useful for local OpenAI-compatible
backends such as Ollama). Falls back to a conservative character-based
heuristic when `tiktoken` is not installed or fails.
"""

from __future__ import annotations

from typing import Optional


def estimate_tokens(text: str, *, model: Optional[str] = None) -> int:
    """Estimate tokens from plain text.

    If `tiktoken` is installed, prefer the model-aware tokenizer. Otherwise
    fall back to a simple character heuristic (~4 chars per token).
    """
    if not text:
        return 0

    # Prefer tiktoken when available for more accurate counts
    try:
        import tiktoken  # type: ignore

        try:
            if model:
                enc = tiktoken.encoding_for_model(model)
            else:
                enc = tiktoken.get_encoding("cl100k_base")
        except Exception:
            enc = tiktoken.get_encoding("cl100k_base")
        # tiktoken returns a list of token IDs
        return len(enc.encode(text))
    except Exception:
        # Conservative fallback: ~4 chars per token
        return max(1, (len(text) + 3) // 4)


def estimate_message_tokens(messages: list[str], *, model: Optional[str] = None) -> int:
    """Estimate tokens for a collection of message strings.

    Accepts an optional `model` parameter which will be forwarded to the
    tokenizer when available (helps with Ollama/local model measurements).
    """
    total = 0
    for message in messages:
        total += estimate_tokens(message or "", model=model)
    return total
