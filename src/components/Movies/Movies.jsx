import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
// import moviesApi from '../../utils/MoviesApi';

const Movies = ({
  movies,
  onCardClick,
  onFavoriteMovie,
  savedMovies,
  onFavoriteMovieDelete,
}) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [checkbox, setCheckbox] = useState(
    // localStorage.checkbox === 'false' ? false : true
    !localStorage.checkbox || localStorage.checkbox === 'false' ? false : true
  );

  function handleGetMovies() {
    let filtered = movies;
    let filteredPost = movies;

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter((movie) =>
        movie.nameRU.toLowerCase().includes(s)
      );
    } else {
      // setPosts([]);
      // setFilteredPosts([]);
      return;
    }

    setPosts(() => {
      localStorage.setItem('posts', JSON.stringify(filtered));

      return filtered;
    });

    if (checkbox) {
      filteredPost = filtered.filter((movie) => movie.duration < 40);
      console.log(filteredPost);
      localStorage.setItem('checkbox', true);
    } else {
      localStorage.setItem('checkbox', false);
    }

    setFilteredPosts(() => {
      localStorage.setItem('filteredPosts', JSON.stringify(filteredPost));
      // console.log(filtered);
      return filteredPost;
    });

    localStorage.setItem('checkbox', checkbox);
    // localStorage.setItem('search', JSON.stringify(search));
    localStorage.setItem('search', search);
  }

  useEffect(() => {
    console.log(localStorage.search);
    if (
      localStorage.search &&
      localStorage.posts &&
      localStorage.filteredPosts
    ) {
      setSearch(localStorage.search);
      setPosts(JSON.parse(localStorage.posts));
      setFilteredPosts(JSON.parse(localStorage.filteredPosts));
      console.log(posts);
    }
  }, []);

  useEffect(() => {
    // newFunction(posts);
    handleGetMovies();
  }, [checkbox]);

  return (
    <>
      <main>
        <section className="movies">
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
            savedMovies={savedMovies}
            filteredPosts={filteredPosts}
            checkbox={checkbox}
            onCardClick={onCardClick}
            onFavoriteMovie={onFavoriteMovie}
            onFavoriteMovieDelete={onFavoriteMovieDelete}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
