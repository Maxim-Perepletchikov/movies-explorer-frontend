import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({ movies, filteredPosts, checkbox }) => {
  const { pathname } = useLocation();

  const invisible =
    pathname === '/saved-movies' ? 'cards__more-button_invisible' : '';

  // console.log(movies);

  return (
    <section className="cards">
      <article className="cards__movies-list">
        {checkbox
          ? filteredPosts.map((movie) => <MoviesCard key={movie.id} movie={movie} />)
          : movies.map((movie) => (
              <MoviesCard key={movie.id} movie={movie} />
            ))}
      </article>
      <div className="cards__container-button">
        <button className={`cards__more-button ${invisible}`}>Ещё</button>
      </div>
    </section>
  );
};

export default MoviesCardList;
