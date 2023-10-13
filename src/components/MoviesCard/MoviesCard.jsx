import React, { useContext } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

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

  const currentUser = useContext(CurrentUserContext);

  const isOwn = movie.owner === currentUser._id;

  // console.log(movie.owner, currentUser._id);

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
