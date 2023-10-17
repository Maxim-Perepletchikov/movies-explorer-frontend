import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({ movies, filteredPosts, checkbox, onCardClick, onFavoriteMovie, onFavoriteMovieDelete }) => {
  const { pathname } = useLocation();

  const invisible =
    pathname === '/saved-movies' ? 'cards__more-button_invisible' : '';

  return (
    <section className="cards">
      <article className="cards__movies-list">
        {checkbox
          ? filteredPosts.map((movie) => <MoviesCard key={movie.movieId} movie={movie} onCardClick={onCardClick} onFavoriteMovie={onFavoriteMovie} onFavoriteMovieDelete={onFavoriteMovieDelete} />)
          : movies.map((movie) => (
              <MoviesCard key={movie.movieId} movie={movie} onCardClick={onCardClick} onFavoriteMovie={onFavoriteMovie} onFavoriteMovieDelete={onFavoriteMovieDelete} />
            ))}
      </article>
      <div className="cards__container-button">
        <button className={`cards__more-button ${invisible}`}>Ещё</button>
      </div>
    </section>
  );
};

export default MoviesCardList;
