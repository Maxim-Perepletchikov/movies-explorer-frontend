import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import movies from '../../utils/moviesList';
import Footer from '../Footer/Footer';

const Movies = ({ movies }) => {
  return (
    <>
      <main>
        <section className="movies">
          <SearchForm />
          <MoviesCardList movies={movies} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
