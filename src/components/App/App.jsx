import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [moviesCardList, setMoviesCardList] = useState([]);
  const [savedMoviesCardList, setSavedMoviesCardList] = useState([]);

  // const [selectedCard, setSelectedCard] = useState({}); // проверить

  const navigate = useNavigate();

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getContent(jwt)
        .then(() => {
          setLoggedIn(true);
          // navigate('/', { replace: true });
        })
        .catch(console.log);
    }
  }, []);

  useEffect(() => tokenCheck(), []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getInfoProfile()
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch(console.log);

      moviesApi
        .getMovies()
        .then((data) => {
          setMoviesCardList(
            data.map((card) => ({
              movieId: card.id,
              country: card.country,
              director: card.director,
              description: card.description,
              duration: String(card.duration),
              nameEN: card.nameEN,
              nameRU: card.nameRU,
              trailerLink: card.trailerLink,
              image: 'https://api.nomoreparties.co' + card.image.url,
              thumbnail: 'https://api.nomoreparties.co' + card.image.url,
              year: card.year,
            }))
          );
        })
        .catch(console.log);

      mainApi
        .getMovies()
        .then(({ data }) => {
          // console.log(data);
          setSavedMoviesCardList(
            data.map((card) => ({
              movieId: card._id,
              country: card.country,
              director: card.director,
              description: card.description,
              duration: String(card.duration),
              nameEN: card.nameEN,
              nameRU: card.nameRU,
              trailerLink: card.trailerLink,
              thumbnail: card.image,
              image: card.image,
              owner: card.owner,
              year: card.year,
            }))
          );
        })
        .catch(console.log);
      // console.log(savedMoviesCardList);
      // navigate('/movies', { replace: true });
    }
  }, [loggedIn]);

  function handleLogin(values) {
    mainApi
      .authorize(values.email, values.password)
      .then((res) => {
        localStorage.setItem('jwt', res.jwt);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
        console.log('Успешный вход');
      })
      .catch(console.log);
  }

  function handleLogout() {
    setLoggedIn(false);
    // localStorage.removeItem('jwt');
    localStorage.clear();
    navigate('/');
    console.log('Успешный выход');
  }

  function handleRegister(values) {
    // console.log(values);
    mainApi
      .register(values.text, values.email, values.password)
      .then(() => {
        handleLogin(values);
        console.log('Успешная регистрация');
      })
      .catch(console.log);
  }

  function handleUpdateUser(userInfo) {
    mainApi
      .setInfoProfile(userInfo)
      .then(({ data }) => setCurrentUser(data))
      .catch(console.log);
    console.log('Успешная редактирование профиля');
  }

  // temp
  function handleCardClick(card) {
    // console.log(selectedCard);
  }

  function handleFavoriteMovie(movie) {
    // console.log(movie);

    mainApi
      .createMovie(movie)
      .then((movie) =>
        setSavedMoviesCardList([...savedMoviesCardList, movie.data])
      )
      .catch(console.log);

    // const isFavored = movie.owner === currentUser._id;
    // mainApi
    //   .changeFavoriteMovieStatus(movie.movieId, !isFavored)
    //   // .then()
    //   .catch(console.log);
  }

  function handleFavoriteMovieDelete(movie) {
    console.log(movie);

    mainApi
      .deleteMovie(movie._id || movie.movieId)
      .then(() => {
        setSavedMoviesCardList((state) =>
          state.filter(
            (m) => m._id !== movie._id || m.movieId !== movie.movieId
          )
        );
      })
      .catch(console.log);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              loggedIn ? (
                <ProtectedRoute
                  component={Movies}
                  loggedIn={loggedIn}
                  movies={moviesCardList}
                  savedMovies={savedMoviesCardList}
                  onCardClick={handleCardClick}
                  onFavoriteMovie={handleFavoriteMovie}
                  onFavoriteMovieDelete={handleFavoriteMovieDelete}
                />
              ) : (
                <Main />
              )
            } // Заменить Main
          />
          <Route
            path="/saved-movies"
            element={
              loggedIn ? (
                <ProtectedRoute
                  component={SavedMovies}
                  loggedIn={loggedIn}
                  movies={savedMoviesCardList}
                  onFavoriteMovieDelete={handleFavoriteMovieDelete}
                  savedMovies={savedMoviesCardList}
                />
              ) : (
                <Main />
              )
            }
          />
          <Route
            path="/profile"
            element={
              loggedIn ? (
                <ProtectedRoute
                  component={Profile}
                  loggedIn={loggedIn}
                  onLogout={handleLogout}
                  onEditProfile={handleUpdateUser}
                />
              ) : (
                <Main />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !loggedIn ? (
                <Register onRegister={handleRegister} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/signin"
            element={
              !loggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
