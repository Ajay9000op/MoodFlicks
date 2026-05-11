import os

import streamlit as st

from ml_model.recommender import recommend


PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))


MOODS = [
    "happy",
    "sad",
    "excited",
    "relaxed",
    "romantic",
    "scared",
    "thriller",
    "horror",
    "thoughtful",
    "nostalgic",
    "all",
]

LANGUAGES = ["all", "english", "hindi", "telugu", "tamil"]


def mood_label(m):
    # simple labels for streamlit
    return m.capitalize() if m != "all" else "All Movies"


def language_label(l):
    return l.capitalize() if l != "all" else "All Languages"


st.set_page_config(page_title="MoodFlix ML", layout="wide")

# Netflix-like dark theme background
st.markdown(
    """
    <style>
      body {
        background-color: #050505;
      }
      /* Subtle Netflix-style gradient */
      .stApp {
        background: radial-gradient(ellipse at top, rgba(229,9,20,0.20) 0%, rgba(5,5,5,1) 55%),
                    linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.8) 100%);
        color: #ffffff;
      }
      header[data-testid="stHeader"] {
        background: rgba(0,0,0,0.2) !important;
      }
      .sidebar .sidebar-content {
        background: rgba(0,0,0,0.35) !important;
      }
      .block-container {
        padding-top: 1rem;
      }
      .recommend-card {
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.10);
        border-radius: 12px;
        padding: 12px;
      }
    </style>
    """,
    unsafe_allow_html=True,
)

st.title("MoodFlix - ML Movie Recommendations")


with st.sidebar:
    mood = st.selectbox("Mood", options=MOODS, format_func=mood_label, index=0)
    language = st.selectbox("Language", options=LANGUAGES, format_func=language_label, index=0)

    st.caption("TF-IDF (title + description) cosine similarity")

# Recommend button will use a query seed based on the selected mood.
query_text = f"{mood} mood movies"


if st.button("Recommend", type="primary"):

    movies = recommend(
        project_root=PROJECT_ROOT,
        query_text=query_text,

        mood=mood,
        language=language,
        top_k=1000,
    )

    cols = st.columns(3)
    for i, movie in enumerate(movies):
        c = cols[i % 3]
        with c:
            st.markdown(f"**{movie.title}** ({movie.year})")
            st.caption(f"{movie.language.capitalize()} • {movie.mood.capitalize()}")
            # Display poster if path exists
            poster_path = os.path.join(PROJECT_ROOT, "movieimages", movie.poster)
            if os.path.exists(poster_path):
                st.image(poster_path, width=180)
            else:
                # Fallback placeholder so card still renders when poster filename doesn't exist
                st.markdown(
                    """
                    <div class='recommend-card'>
                        <div style='color: rgba(255,255,255,0.7); font-size: 14px;'>Poster not found</div>
                    </div>
                    """,
                    unsafe_allow_html=True,
                )


            st.write(movie.description)

    if not movies:
        st.warning("No movies found for the selected filters.")

