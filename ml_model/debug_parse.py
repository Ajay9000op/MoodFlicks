import os
import re

from ml_model.data_loader import _extract_movie_db_from_script_js

root = r"d:\Users\Ajay Reddy\OneDrive\Desktop\MoodFlicks"

with open(os.path.join(root, "Script.js"), "r", encoding="utf-8") as f:
    text = f.read()

m = re.search(
    r"const\s+movieDatabase\s*=\s*(\{[\s\S]*?\})\s*;\s*\n\s*\n\s*//\s*Language translations",
    text,
)
print('top regex match:', bool(m))
if m:
    print('matched length:', len(m.group(1)))
    # Try first 500 chars
    print('head:', m.group(1)[:500])

try:
    db = _extract_movie_db_from_script_js(text)
    print('moods parsed:', list(db.keys())[:10], 'count', len(db))
    any_mood = next(iter(db))
    print('sample mood:', any_mood, 'movies', len(db[any_mood]))
except Exception as e:
    print('parse error:', type(e), e)

