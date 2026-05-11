import os
from dataclasses import dataclass
from typing import List, Optional, Tuple

import joblib
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer


@dataclass
class ModelArtifacts:
    vectorizer: TfidfVectorizer
    tfidf_matrix: any


def build_text_for_movie(movie) -> str:
    # movie is Movie dataclass from data_loader
    return f"{movie.title} {movie.description}"


def train_tfidf_model(movies) -> ModelArtifacts:
    texts = [build_text_for_movie(m) for m in movies]

    vectorizer = TfidfVectorizer(
        lowercase=True,
        stop_words="english",
        ngram_range=(1, 2),
        max_features=50000,
    )

    tfidf_matrix = vectorizer.fit_transform(texts)
    return ModelArtifacts(vectorizer=vectorizer, tfidf_matrix=tfidf_matrix)


def save_artifacts(artifacts: ModelArtifacts, artifacts_dir: str) -> None:
    os.makedirs(artifacts_dir, exist_ok=True)
    joblib.dump(artifacts.vectorizer, os.path.join(artifacts_dir, "vectorizer.joblib"))
    joblib.dump(artifacts.tfidf_matrix, os.path.join(artifacts_dir, "tfidf_matrix.joblib"))


def load_artifacts(artifacts_dir: str) -> Optional[ModelArtifacts]:
    v_path = os.path.join(artifacts_dir, "vectorizer.joblib")
    m_path = os.path.join(artifacts_dir, "tfidf_matrix.joblib")
    if not (os.path.exists(v_path) and os.path.exists(m_path)):
        return None

    vectorizer = joblib.load(v_path)
    tfidf_matrix = joblib.load(m_path)
    return ModelArtifacts(vectorizer=vectorizer, tfidf_matrix=tfidf_matrix)

