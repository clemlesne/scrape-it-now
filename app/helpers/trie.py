import re


class Trie:
    """
    Regex::Trie in Python. Creates a Trie out of a list of words. The trie can be exported to a Regex pattern.
    The corresponding Regex should match much faster than a simple Regex union.

    See:
    - https://en.wikipedia.org/wiki/Trie
    - https://stackoverflow.com/a/42789508
    """

    def __init__(self):
        self.data = {}

    def add(self, word: str) -> None:
        ref = self.data
        for char in word:
            ref[char] = char in ref and ref[char] or {}
            ref = ref[char]
        ref[""] = 1

    def dump(self) -> dict:
        return self.data

    def quote(self, char: str) -> str:
        return re.escape(char)

    def _pattern(self, p_data: dict) -> str | None:
        data = p_data
        if "" in data and len(data.keys()) == 1:
            return None

        alt = []
        cc = []
        q = 0
        for char in sorted(data.keys()):
            if isinstance(data[char], dict):
                try:
                    recurse = self._pattern(data[char])
                    alt.append(self.quote(char) + recurse)
                except:
                    cc.append(self.quote(char))
            else:
                q = 1
        cconly = not len(alt) > 0

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

    def pattern(self) -> str | None:
        return self._pattern(self.dump())
