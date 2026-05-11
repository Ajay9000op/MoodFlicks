from typing import Any, Dict, List


def extract_movie_database(script_js_text: str) -> Dict[str, List[Dict[str, Any]]]:
    """Extract movieDatabase from Script.js.

    Robust strategy:
    1) Find `const movieDatabase = {` and then extract until the matching closing
       `};` that ends the object.
    2) Parse mood arrays at top-level: `<mood>: [ ... ]` using bracket-depth.
    3) Parse movie objects inside each mood array by scanning for top-level
       `{ ... }` blocks using brace-depth.

    This avoids relying on the exact presence/formatting of the
    `// Language translations` marker.
    """

    # 1) isolate movieDatabase object text body
    start_m = re.search(r"const\s+movieDatabase\s*=\s*\{", script_js_text)
    if not start_m:
        raise RuntimeError("Could not find movieDatabase declaration in Script.js")

    start_idx = start_m.end()  # position right after the opening '{'

    depth = 1
    i = start_idx
    while i < len(script_js_text) and depth > 0:
        ch = script_js_text[i]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
        i += 1

    if depth != 0:
        raise RuntimeError("Unbalanced braces while extracting movieDatabase")

    obj_body = script_js_text[start_idx : i - 1]

    # 2) find moods at top-level within obj_body
    movies_by_mood: Dict[str, List[Dict[str, Any]]] = {}

    for mood_match in re.finditer(r"(\w+)\s*:\s*\[", obj_body):
        mood = mood_match.group(1)
        start = mood_match.end()  # right after '['

        # bracket-depth scan to matching ']'
        bdepth = 1
        j = start
        while j < len(obj_body) and bdepth > 0:
            ch = obj_body[j]
            if ch == "[":
                bdepth += 1
            elif ch == "]":
                bdepth -= 1
            j += 1

        if bdepth != 0:
            continue

        array_body = obj_body[start : j - 1]

        # 3) parse top-level movie objects inside the array
        objects: List[str] = []
        brace_depth = 0
        obj_start = None

        for idx, ch in enumerate(array_body):
            if ch == "{":
                if brace_depth == 0:
                    obj_start = idx
                brace_depth += 1
            elif ch == "}":
                brace_depth -= 1
                if brace_depth == 0 and obj_start is not None:
                    objects.append(array_body[obj_start : idx + 1])
                    obj_start = None

        parsed_movies: List[Dict[str, Any]] = []
        for otext in objects:
            title = _get_quoted_string(otext, "title")
            poster = _get_quoted_string(otext, "poster")
            language = _get_quoted_string(otext, "language")
            description = _get_quoted_string(otext, "description")
            year = _get_int(otext, "year")

            if title and poster and language and description is not None and year is not None:
                parsed_movies.append(
                    {
                        "title": title,
                        "year": year,
                        "language": language,
                        "poster": poster,
                        "description": description,
                        "mood": mood,
                    }
                )

        if parsed_movies:
            movies_by_mood[mood] = parsed_movies

    if not movies_by_mood:
        raise RuntimeError("No moods parsed from movieDatabase")

    return movies_by_mood


def _get_quoted_string(text: str, key: str) -> str | None:
    # Match: key: "..." (supports newlines via DOTALL)
    # Values in your Script.js use double quotes.
    m = re.search(rf"{key}:\s*\"([^\"]*)\"", text, flags=re.S)
    return m.group(1) if m else None


def _get_int(text: str, key: str) -> int | None:
    m = re.search(rf"{key}:\s*(\d+)", text)
    return int(m.group(1)) if m else None

