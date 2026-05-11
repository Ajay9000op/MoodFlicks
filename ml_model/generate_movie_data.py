import json
import os

from ml_model.movie_db_parser import extract_movie_database


def main() -> None:
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    script_js_path = os.path.join(project_root, "Script.js")

    with open(script_js_path, "r", encoding="utf-8") as f:
        text = f.read()

    movies_by_mood = extract_movie_database(text)

    all_movies = []
    for mood, items in movies_by_mood.items():
        for it in items:
            all_movies.append(it)

    out_json = os.path.join(project_root, "movie_data.json")
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(all_movies, f, ensure_ascii=False, indent=2)

    print(f"Wrote {len(all_movies)} movies to {out_json}")


if __name__ == "__main__":
    main()

