import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie }) => {
  const [favoriteMovie, setFavoriteMovie] = React.useState(false);

  function handleFavoriteMovie() {
    setFavoriteMovie(!favoriteMovie);
  }

  function getTime(minutes) {
    const hours = Math.trunc(minutes / 60);
    const mins = minutes % 60;

    return `${hours ? hours + 'ч' : ''}${mins < 10 ? '0' + mins : mins}м`;
  }

  const { pathname } = useLocation();

  const cardFavoriteButton = favoriteMovie
    ? 'card__favorite-button card__favorite-button_active'
    : 'card__favorite-button';

  return (
    <article className="card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="card__image" src={movie.url} alt={movie.description} />
      </a>
      <div className="card__panel">
        <h2 className="card__title">{movie.description}</h2>
        {pathname === '/saved-movies' ? (
          <button
            className="card__delete-button"
            type="button"
            aria-label="Избранное"
          ></button>
        ) : (
          <button
            className={cardFavoriteButton}
            onClick={handleFavoriteMovie}
            type="button"
            aria-label="Избранное"
          ></button>
        )}
      </div>
      <p className="card__duration">{getTime(movie.duration)}</p>
    </article>
  );
};

export default MoviesCard;
