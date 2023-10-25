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

  // const [numberOfCards, setNumberOfCards] = useState(0);

  function handleCheckbox() {
    if (!localStorage.checkbox) {
      localStorage.setItem('checkbox', false);
    }

    // return localStorage.checkbox === 'false' ? false : true
    console.log(checkbox);
    if (checkbox) {
      setFilteredPosts(JSON.parse(localStorage.getItem('filteredPosts')));
      localStorage.setItem('checkbox', true);
      console.log('localStorage => true');
    } else {
      setPosts(JSON.parse(localStorage.getItem('posts')));
      localStorage.setItem('checkbox', false);
      console.log('localStorage => false');
    }
  }

  function handleGetMovies() {
    let filtered = movies;
    let filteredPost = movies;

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter((movie) =>
        movie.nameRU.toLowerCase().includes(s)
      );
    }

    setPosts(() => {
      localStorage.setItem('posts', JSON.stringify(filtered));

      return filtered;
    });

    // newFunction(filtered);

    // setFilteredPosts(() => {
    //   localStorage.setItem('filteredPosts', JSON.stringify(filtered));
    //   return filtered;
    // });

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
    localStorage.setItem('search', JSON.stringify(search));
    // setNumberOfCards()
  }

  function newFunction(filtered) {
    if (checkbox) {
      filtered = filtered.filter((movie) => movie.duration < 40);
      localStorage.setItem('checkbox', true);
      setFilteredPosts(filtered);
      // setFilteredPosts(() => {
      //   localStorage.setItem('filteredPosts', JSON.stringify(filtered));
      //   console.log(filtered);
      //   return filtered;})
    } else {
      localStorage.setItem('checkbox', false);
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
    if (
      localStorage.search &&
      localStorage.posts &&
      localStorage.filteredPosts
    ) {
      setSearch(JSON.parse(localStorage.search));
      setPosts(JSON.parse(localStorage.posts));
      setFilteredPosts(JSON.parse(localStorage.filteredPosts));
    }

    // handleCheckbox();
  }, []);

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
            // numberOfCards={numberOfCards}
            // setNumberOfCards={setNumberOfCards}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
