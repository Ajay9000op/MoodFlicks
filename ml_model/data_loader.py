import json
import os
import re
from dataclasses import dataclass
from typing import Any, Dict, List


@dataclass
class Movie:
    title: str
    year: int
    language: str
    poster: str
    description: str
    mood: str


def _extract_movie_db_from_script_js(script_js_text: str) -> Dict[str, List[Dict[str, Any]]]:
    """Extract movieDatabase from Script.js.

    Assumes structure:
      const movieDatabase = { happy: [ {..}, ... ], sad: [ ... ], ... };
    """

    m = re.search(
        r"const\s+movieDatabase\s*=\s*(\{[\s\S]*?\})\s*;\s*\n\s*\n\s*//\s*Language translations",
        script_js_text,
    )
    if not m:
        raise RuntimeError("Could not locate `movieDatabase = {...}` in Script.js")

    obj_text = m.group(1)

    movies_by_mood: Dict[str, List[Dict[str, Any]]] = {}

    # Extract each mood array by locating `<mood>:[ ... ]` at top level.
    # We'll do this with a regex that finds `<mood>:` followed by `[`, then brace-depth scan for the matching `]`.
    mood_regex = re.finditer(r"(\w+)\s*:\s*\[", obj_text)

    for mood_match in mood_regex:
        mood = mood_match.group(1)

        start = mood_match.end()  # at char after '['
        depth = 1
        i = start
        while i < len(obj_text) and depth > 0:
            if obj_text[i] == "[":
                depth += 1
            elif obj_text[i] == "]":
                depth -= 1
            i += 1
        if depth != 0:
            continue

        array_body = obj_text[start : i - 1]

        # Split top-level objects by brace depth.
        objs: List[str] = []
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
                    objs.append(array_body[obj_start : idx + 1])
                    obj_start = None

        parsed: List[Dict[str, Any]] = []
        for otext in objs:
            def get_quoted(key: str) -> str | None:
                # key: "..."
                mm = re.search(rf"{key}:\\s*\"([^\"]*)\"", otext, flags=re.S)
                if mm:
                    return mm.group(1)
                # key: '...'
                mm = re.search(rf"{key}:\\s*'([^']*)'", otext, flags=re.S)
                if mm:
                    return mm.group(1)
                return None

            def get_number(key: str) -> int | None:
                mm = re.search(rf"{key}:\\s*(\\d+)", otext)
                if mm:
                    return int(mm.group(1))
                return None

            title = get_quoted("title")
            poster = get_quoted("poster")
            language = get_quoted("language")
            description = get_quoted("description")
            year = get_number("year")

            if title and poster and language and description is not None and year is not None:
                parsed.append(
                    {
                        "title": title,
                        "year": year,
                        "language": language,
                        "poster": poster,
                        "description": description,
                    }
                )

        if parsed:
            movies_by_mood[mood] = parsed

    if not movies_by_mood:
        raise RuntimeError("Failed to parse movieDatabase from Script.js")

    return movies_by_mood


def load_movies_from_script_js(script_js_path: str) -> List[Movie]:
    with open(script_js_path, "r", encoding="utf-8") as f:
        text = f.read()

    movies_by_mood = _extract_movie_db_from_script_js(text)

    movies: List[Movie] = []
    for mood, items in movies_by_mood.items():
        for it in items:
            movies.append(
                Movie(
                    title=it["title"],
                    year=it["year"],
                    language=it["language"],
                    poster=it["poster"],
                    description=it["description"],
                    mood=mood,
                )
            )

    return movies


def load_or_create_movie_dataset(project_root: str, force_rebuild: bool = False) -> List[Movie]:
    """Creates/loads a JSON dataset next to the project.

    Prefer reading the generated `movie_data.json`.
    """

    out_json = os.path.join(project_root, "movie_data.json")

    if not os.path.exists(out_json):
        raise FileNotFoundError(
            "movie_data.json not found. Run: python ml_model/generate_movie_data.py"
        )

    if os.path.exists(out_json) and (not force_rebuild):
        with open(out_json, "r", encoding="utf-8") as f:
            raw = json.load(f)
        return [Movie(**m) for m in raw]

    # If force_rebuild=True, regenerate and load.
    from .generate_movie_data import main as _gen_main  # type: ignore
    _gen_main()

    with open(out_json, "r", encoding="utf-8") as f:
        raw = json.load(f)
    return [Movie(**m) for m in raw]


