import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
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
      <div className='cards__container-button'>
        <button className='cards__more-button'>Ещё</button>
      </div>
    </section>
  );
};

export default MoviesCardList;
