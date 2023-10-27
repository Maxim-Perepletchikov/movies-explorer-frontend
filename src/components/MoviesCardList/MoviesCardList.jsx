import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import spinner from '../../images/loading-loading-forever.gif';

const MoviesCardList = ({
  movies,
  filteredPosts,
  checkbox,
  onCardClick,
  onFavoriteMovie,
  onFavoriteMovieDelete,
  savedMovies,
  // numberOfCards,
  // setNumberOfCards,
}) => {
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [addCards, setAddCards] = useState(0)

  const { pathname } = useLocation();

  function initialCard() {
    if (windowWidth >= 1235) {
      setNumberOfCards(16);
      setAddCards(4)
    } else if (windowWidth <= 1234 && windowWidth >= 951) {
      setNumberOfCards(12);
      setAddCards(3)
    } else if (windowWidth <= 950 && windowWidth >= 730) {
      setNumberOfCards(8);
      setAddCards(2)
    } else if (windowWidth <= 729) {
      setNumberOfCards(5);
      setAddCards(2)
    }
  }

  function handleMoreButton() {
    setNumberOfCards(numberOfCards + addCards);
  }

  const invisible =
    pathname === '/saved-movies' ||
    numberOfCards >= movies.length ||
    (checkbox && numberOfCards >= savedMovies.length)
      ? 'cards__more-button_invisible'
      : '';

  useEffect(() => {
    // initialCard();
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    initialCard();
    // console.log(numberOfCards);
  }, [windowWidth, movies, filteredPosts]);

  return (
    <section
      className="cards"
    >
      <article className="cards__movies-list">
        {checkbox
          ? filteredPosts
              .slice(0, numberOfCards)
              .map((movie) => (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  onCardClick={onCardClick}
                  onFavoriteMovie={onFavoriteMovie}
                  onFavoriteMovieDelete={onFavoriteMovieDelete}
                  savedMovies={savedMovies}
                />
              ))
          : movies
              .slice(0, numberOfCards)
              .map((movie) => (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  onCardClick={onCardClick}
                  onFavoriteMovie={onFavoriteMovie}
                  onFavoriteMovieDelete={onFavoriteMovieDelete}
                  savedMovies={savedMovies}
                />
              ))}
      </article>
      <div className="cards__container-button">
        <button
          className={`cards__more-button ${invisible}`}
          onClick={handleMoreButton}
        >
          Ещё
        </button>
      </div>
    </section>
  );
};

export default MoviesCardList;
