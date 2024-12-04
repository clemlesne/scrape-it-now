import re
from typing import Any


class Trie:
    """
    Regex::Trie in Python. Creates a Trie out of a list of words. The trie can be exported to a Regex pattern.
    The corresponding Regex should match much faster than a simple Regex union.

    See:
    - https://en.wikipedia.org/wiki/Trie
    - https://stackoverflow.com/a/42789508
    """

    data: dict[str, Any]

    def __init__(self):
        self.data = {}

    def add(self, word: str) -> None:
        """
        Add a word to the trie.
        """
        ref = self.data
        for char in word:
            ref[char] = (char in ref and ref[char]) or {}
            ref = ref[char]
        ref[""] = 1

    def _dump_dict(self) -> dict[str, Any]:
        return self.data

    def _quote(self, char: str) -> str:
        return re.escape(char)

    def _pattern_str(self, p_data: dict[str, Any]) -> str | None:
        data = p_data
        if "" in data and len(data.keys()) == 1:
            return

        alt = []
        cc = []
        q = 0

        for char in sorted(data.keys()):
            if not isinstance(data[char], dict):
                q = 1
                continue
            recurse = self._pattern_str(data[char])
            if not recurse:
                cc.append(self._quote(char))
                continue
            alt.append(self._quote(char) + recurse)

        cconly = len(alt) <= 0

        if len(cc) > 0:
            if len(cc) == 1:
                alt.append(cc[0])
            else:
                alt.append("[" + "".join(cc) + "]")

        if len(alt) == 1:
            result = alt[0]
        else:
            result = "(?:" + "|".join(alt) + ")"

        if q:
            if cconly:
                result += "?"
            else:
                result = f"(?:{result})?"
        return result

    def pattern(self) -> re.Pattern | None:
        """
        Return the Regex pattern corresponding to the trie.
        """
        pattern_str = self._pattern_str(self._dump_dict())
        # Skip if no pattern
        if not pattern_str:
            return
        return re.compile(r"\b" + pattern_str + r"\b", re.IGNORECASE)
