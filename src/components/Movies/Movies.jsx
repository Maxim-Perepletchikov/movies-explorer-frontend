import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/moviesList';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </section>
  );
};

export default Movies;

// SearchForm — форма поиска, куда пользователь будет вводить запрос. Обратите внимание на фильтр с чекбоксом «Только короткометражки». Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.
// Preloader — отвечает за работу прелоадера.
// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
// MoviesCard — компонент одной карточки фильма.
