import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useCallback, useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';

const Movies = ({ movies }) => {
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

    if (checkbox) {
      setFilteredPosts(JSON.parse(localStorage.getItem('filteredPosts')));
      localStorage.setItem('checkbox', true);
    } else {
      setPosts(JSON.parse(localStorage.getItem('posts')));
      console.log(JSON.parse(localStorage.getItem('posts')));
      localStorage.setItem('checkbox', false);
    }
  }

  function handleGetMovies() {
    // console.log(movies);
    // localStorage.removeItem('checkbox');
    localStorage.removeItem('posts');
    // localStorage.removeItem('filteredPosts');

    let filtered = movies;

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter((movie) =>
        movie.nameRU.toLowerCase().includes(s)
      );
    }

    setPosts(filtered);
    console.log(filtered);

    if (checkbox) {
      filtered = filtered.filter((movie) => movie.duration < 60);
    }

    // console.log(filtered);
    setFilteredPosts(filtered);

    localStorage.setItem('checkbox', checkbox);
    localStorage.setItem('posts', JSON.stringify(posts));
    localStorage.setItem('filteredPosts', JSON.stringify(filteredPosts));
  }

  useEffect(() => {
    handleCheckbox();
    // handleGetMovies();
    // JSON.parse(localStorage.getItem('filteredPosts'))
    // console.log(localStorage.posts);
    // console.log(JSON.parse(localStorage.posts));
    // setFilteredPosts(JSON.parse(localStorage.posts))
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
            filteredPosts={filteredPosts}
            checkbox={checkbox}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
