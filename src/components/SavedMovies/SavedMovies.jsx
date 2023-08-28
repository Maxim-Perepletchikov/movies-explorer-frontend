import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import movies from '../../utils/moviesList';

const SavedMovies = () => {
  const saveMovies = movies.slice(0, 3);

  return (
    <>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList movies={saveMovies} />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
