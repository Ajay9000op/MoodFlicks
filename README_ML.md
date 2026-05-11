# MoodFlix ML + Streamlit (TF-IDF baseline)

This upgrade adds a real ML-style recommender backend using **TF-IDF + cosine similarity** over `title + description`.

## Files added
- `ml_model/data_loader.py` : extracts movie list from `Script.js` and generates `movie_data.json`
- `ml_model/model.py` : trains/loads TF-IDF model artifacts
- `ml_model/recommender.py` : recommendation function (supports mood + language filtering)
- `streamlit_app.py` : Streamlit UI

## Setup (Windows)
1. Open terminal in the project folder:  `d:/Users/Ajay Reddy/OneDrive/Desktop/MoodFlicks`
2. Create venv:
   ```bat
   python -m venv .venv
   ```
3. Activate venv:
   ```bat
   .venv\Scripts\activate
   ```
4. Install deps:
   ```bat
   pip install -r requirements.txt
   ```

## Run Streamlit
```bat
streamlit run streamlit_app.py
```
Then open the URL shown in terminal (usually http://localhost:8501).

## How recommendation works
- TF-IDF vectors are built from each movie’s **title + description**
- Similarity is cosine similarity between the user query and movie vectors
- Then results are filtered by the selected **mood** and **language**

