import React, { useContext, useEffect } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({
  movie,
  onCardClick,
  onFavoriteMovie,
  onFavoriteMovieDelete,
  savedMovies,

  setLoaded
}) => {
  const isFavorite = savedMovies.some((m) => m.nameRU === movie.nameRU);
  const movieDel = savedMovies.filter((m) => m.nameRU === movie.nameRU);

  function handleClick() {
    // onCardClick(movie);
    console.log(movie);
  }

  function handleFavoriteMovieDelete() {
    onFavoriteMovieDelete(movieDel[0]);
  }

  function handleFavoriteMovie() {
    onFavoriteMovie(movie);
  }

  function getTime(minutes) {
    const hours = Math.trunc(minutes / 60);
    const mins = minutes % 60;

    return `${hours ? hours + 'ч' : ''}${mins < 10 ? '0' + mins : mins}м`;
  }

  const { pathname } = useLocation();

  const cardFavoriteButton = isFavorite
    ? 'card__favorite-button card__favorite-button_active'
    : 'card__favorite-button';

  return (
    <article className="card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          src={movie.image}
          alt={movie.description}
        />
      </a>
      <div className="card__panel">
        <h2 className="card__title">{movie.nameRU}</h2>
        {pathname === '/saved-movies' ? (
          <button
            className="card__delete-button"
            type="button"
            aria-label="Избранное"
            onClick={handleFavoriteMovieDelete}
          ></button>
        ) : (
          <button
            className={cardFavoriteButton}
            onClick={() => {
              isFavorite ? handleFavoriteMovieDelete() : handleFavoriteMovie();
            }}
            type="button"
            aria-label="Удаление из избранного"
          ></button>
        )}
      </div>
      <p className="card__duration">{getTime(movie.duration)}</p>
    </article>
  );
};

export default MoviesCard;
