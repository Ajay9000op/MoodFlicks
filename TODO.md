# TODO - ML + Streamlit upgrade (MoodFlix)

- [ ] Gather dataset: extract all movies from `Script.js` into a structured CSV/JSON.
- [ ] Build ML baseline model (TF-IDF + cosine similarity) over `title + description`.
- [ ] Create a Python package with:
  - [ ] `model.py` to train/load model artifacts
  - [ ] `recommender.py` to return top-N recommendations filtered by mood + language
- [ ] Add Streamlit app (`streamlit_app.py`) with UI:
  - mood buttons, language filters, search box
  - show recommended cards
- [ ] Add `requirements.txt`.
- [ ] Add `README_ML.md` with run instructions (local + Streamlit).
- [ ] (Optional) Add API endpoints later (FastAPI) if needed.

