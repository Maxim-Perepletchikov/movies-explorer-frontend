import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';

const Movies = ({ movies }) => {
  // const [films, setFilms] = useState(null);
  // const [filmsSwitch, setFilmsSwitch] = useState(false);
  // const [filmsInputSearch, setFilmsInputSearch] = useState('');

  // function handleGetMovies(inputSearch) {
  //   setFilmsSwitch(false);
  //   localStorage.getItem('filmsSwitch', false);

  //   moviesApi
  //     .getMovies()
  //     .then(({ nameRU }) => {
  //       nameRU.toLowerCase().includes(inputSearch.toLowerCase());
  //     })
  //     .then(filteredData => {
  //       console.log(filteredData);
  //       localStorage.setItem('films', filteredData)
  //       localStorage.setItem('filmsInputSearch', inputSearch)

  //     });
  // }

  const [ posts, setPosts ] = useState([]); // => movies
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  // useEffect(() => {
  //   let filtered = movies;

  //   if (search) {
  //     const s = search.toLowerCase();
  //     filtered = filtered.filter((movie) =>
  //       movie.nameRU.toLowerCase().includes(s)
  //     );
  //   }

  //   if (checkbox) {
  //     filtered = filtered.filter((movie) => movie.duration < 60);
  //   }

  //   setFilteredPosts(filtered);
  // }, [movies, search, checkbox]);

  function handleGetMovies() {
    console.log(movies);
    let filtered = movies;

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter((movie) =>
        movie.nameRU.toLowerCase().includes(s)
      );
    }

    setPosts(filtered)

    if (checkbox) {
      filtered = filtered.filter((movie) => movie.duration < 60);
    }

    console.log(filtered);
    setFilteredPosts(filtered);
  }

  useEffect(() => {
    handleGetMovies()
  }, [checkbox])

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
