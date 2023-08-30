import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({ movies }) => {
  const { pathname } = useLocation();

  const invisible = pathname === '/saved-movies' ? 'cards__more-button_invisible' : '';

  return (
    <section className="cards">
      <article className="cards__movies-list">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
        {/* <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard /> */}
      </article>
      <div className="cards__container-button">
        <button className={`cards__more-button ${invisible}`}>Ещё</button>
      </div>
    </section>
  );
};

export default MoviesCardList;
