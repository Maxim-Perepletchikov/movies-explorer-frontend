import React, { useContext } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from "../../utils/MainApi";

const MoviesCard = ({ movie, onCardClick, onFavoriteMovie, onFavoriteMovieDelete }) => {
  const [favoriteMovie, setFavoriteMovie] = React.useState(false);

  function handleClick() {
    // onCardClick(movie);
    console.log(movie);
  }

  function handleFavoriteMovieDelete() {
    onFavoriteMovieDelete(movie)
  }

  function handleFavoriteMovie2() {
    setFavoriteMovie(!favoriteMovie);
  }

  function getTime(minutes) {
    const hours = Math.trunc(minutes / 60);
    const mins = minutes % 60;

    return `${hours ? hours + 'ч' : ''}${mins < 10 ? '0' + mins : mins}м`;
  }

  const { pathname } = useLocation();

  
  const currentUser = useContext(CurrentUserContext);
  
  const isOwn = movie.owner === currentUser._id;
  
  const cardFavoriteButton = favoriteMovie
    ? 'card__favorite-button card__favorite-button_active'
    : 'card__favorite-button';

  
    // function handleFavoriteMovie(movie) {
    //   mainApi.changeFavoriteMovieStatus(movie.id, !isOwn).then()
    // }

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
            onClick={handleFavoriteMovieDelete}
          ></button>
        ) : (
          <button
            className={cardFavoriteButton}
            onClick={() => {
              handleClick()
              handleFavoriteMovie2();
              onFavoriteMovie(movie)
              // console.log(movie);
            }}
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
