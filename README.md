# MoodFlix (Streamlit ML)

MoodFlix is a Streamlit app that recommends movies based on **mood** and **language** using a **TF‑IDF + cosine similarity** model over `title + description`.

## Quick start (Windows)

### 1) Create/activate a virtual environment
```bat
python -m venv .venv
.
.venv\Scripts\activate
```

### 2) Install dependencies
```bat
pip install -r requirements.txt
```

### 3) Run the app
```bat
streamlit run streamlit_app.py --server.port 8501
```

Open:
- http://localhost:8501
- http://192.168.1.43:8501 (network URL, if your machine allows it)

## How it works
- The movie dataset is stored in `movie_data.json`.
- `ml_model/model.py` builds/loads a TF‑IDF model.
- `ml_model/recommender.py` computes similarity to a query like:
  - `"happy mood movies"`
- Results are then filtered by:
  - selected **mood**
  - selected **language**

## Notes
- You may see `InconsistentVersionWarning` from scikit-learn when loading cached artifacts created with a different scikit-learn version.
- If recommendations look off, consider retraining/rebuilding model artifacts.

