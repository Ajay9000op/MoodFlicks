import os
from typing import List, Optional, Tuple

import numpy as np

from .model import load_artifacts, train_tfidf_model, save_artifacts, build_text_for_movie
from .data_loader import load_or_create_movie_dataset, Movie


def recommend(
    project_root: str,
    query_text: str,
    mood: str,
    language: str,
    top_k: int = 12,
    force_rebuild_dataset: bool = False,
) -> List[Movie]:
    """Recommend movies based on TF-IDF cosine similarity.

    Mood/language filtering is applied after scoring.
    """
    artifacts_dir = os.path.join(project_root, "ml_model", "artifacts")

    # Load dataset
    movies = load_or_create_movie_dataset(project_root, force_rebuild=force_rebuild_dataset)

    # Load or train model
    artifacts = load_artifacts(artifacts_dir)
    if artifacts is None:
        artifacts = train_tfidf_model(movies)
        save_artifacts(artifacts, artifacts_dir)

    vectorizer = artifacts.vectorizer
    tfidf_matrix = artifacts.tfidf_matrix

    # Score query
    q = vectorizer.transform([query_text])
    # Cosine similarity for TF-IDF with normalized vectors:
    # sklearn TfidfVectorizer already uses l2 normalization by default.
    scores = (q @ tfidf_matrix.T).toarray().ravel()

    # Apply filters
    candidates = []
    for idx, m in enumerate(movies):
        if mood != "all" and m.mood != mood:
            continue
        if language != "all" and m.language != language:
            continue
        candidates.append((idx, scores[idx]))

    candidates.sort(key=lambda x: x[1], reverse=True)
    top_idxs = [idx for idx, _ in candidates[:top_k]]
    return [movies[i] for i in top_idxs]

