import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie }) => {
  const [favoriteMovie, setFavoriteMovie] = React.useState(false);

  function handleFavoriteMovie() {
    setFavoriteMovie(!favoriteMovie);
  }

  const { pathname } = useLocation();

  const cardFavoriteButton = favoriteMovie
    ? 'card__favorite-button card__favorite-button_active'
    : 'card__favorite-button';

  return (
    <article className="card">
      <img className="card__image" src={movie.image} alt="33 слова о дизайне" />
      <div className="card__panel">
        <h2 className="card__title">33 слова о дизайне</h2>
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
      <p className="card__duration">1ч42м</p>
    </article>
  );
};

export default MoviesCard;
