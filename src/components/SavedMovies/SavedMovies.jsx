import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
// import movies from '../../utils/moviesList';

const SavedMovies = ({ movies, onFavoriteMovieDelete, savedMovies }) => {
  // const saveMovies = movies.slice(0, 3);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [checkbox, setCheckbox] = useState(
    localStorage.checkbox === 'false' ? false : true
    // false
  );

  function handleCheckbox() {
    if (!localStorage.checkbox) {
      localStorage.setItem('checkbox', false);
    }

    // return localStorage.checkbox === 'false' ? false : true
    console.log(checkbox);
    if (checkbox) {
      // setFilteredPosts(JSON.parse(localStorage.getItem('filteredPosts')));
      localStorage.setItem('checkbox', true);
      console.log('localStorage => true');
    } else {
      // setPosts(JSON.parse(localStorage.getItem('posts')));
      localStorage.setItem('checkbox', false);
      console.log('localStorage => false');
    }
  }

  function handleGetMovies() {
    // localStorage.removeItem('checkbox');
    // localStorage.removeItem('posts');
    // localStorage.removeItem('filteredPosts');
    // localStorage.removeItem('search');

    let filtered = movies;

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter((movie) =>
        movie.nameRU.toLowerCase().includes(s)
      );
    }

    setPosts(() => {
      // localStorage.setItem('posts', JSON.stringify(filtered));

      return filtered;
    });

    // newFunction(filtered);

    // setFilteredPosts(() => {
    //   localStorage.setItem('filteredPosts', JSON.stringify(filtered));
    //   return filtered;
    // });

    // let qwer;

    if (checkbox) {
      filtered = filtered.filter((movie) => movie.duration < 40);
      console.log(filtered);
      localStorage.setItem('checkbox', true);
    } else {
      localStorage.setItem('checkbox', false);
    }

    setFilteredPosts(() => {
      // localStorage.setItem('filteredPosts', JSON.stringify(filtered));
      console.log(filtered);
      return filtered;
    });

    // localStorage.setItem('checkbox', checkbox);
    // localStorage.setItem('search', JSON.stringify(search));
  }

  function newFunction(filtered) {
    if (checkbox) {
      filtered = filtered.filter((movie) => movie.duration < 40);
      // localStorage.setItem('checkbox', true);
      setFilteredPosts(filtered);
    } else {
      // localStorage.setItem('checkbox', false);
      // console.log(filtered);
      // setPosts(filtered);
    }

    // setFilteredPosts(() => {
    //   localStorage.setItem('filteredPosts', JSON.stringify(filtered));
    //   return filtered;
    // });
    // setFilteredPosts(filtered)
  }

  useEffect(() => {
    newFunction(posts);
    // handleGetMovies()
  }, [checkbox]);

  useEffect(() => {
    // setSearch(JSON.parse(localStorage.search)); // Поправить при
    // handleCheckbox(); // первой инициализации
    setPosts(movies)
  }, [movies]);

  return (
    <>
      <main>
        <section className="saved-movies">
          <SearchForm
            search={search}
            setSearch={setSearch}
            checkbox={checkbox}
            setCheckbox={setCheckbox}
            filteredPosts={filteredPosts}
            handleGetMovies={handleGetMovies}
          />
          <MoviesCardList
            movies={posts}
            filteredPosts={filteredPosts}
            checkbox={checkbox}
            onFavoriteMovieDelete={onFavoriteMovieDelete}
            savedMovies={savedMovies}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
