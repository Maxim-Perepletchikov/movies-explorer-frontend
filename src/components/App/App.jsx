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

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getInfoProfile()
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch(console.log);

      moviesApi.getMovies().then((data) => {
        // console.log(data);
        // console.log(data, typeof data, data[0].description);
        setMoviesCardList(
          data.map((card) => ({
            id: card.id,
            description: card.description,
            duration: card.duration,
            nameEN: card.nameEN,
            nameRU: card.nameRU,
            trailerLink: card.trailerLink,
            url: 'https://api.nomoreparties.co' + card.image.url
          }))
        );
        // console.log(moviesCardList);
      }).catch(console.log);
    }
  }, [loggedIn]);

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getContent(jwt)
        .then(() => {
          setLoggedIn(true);
          // setUserEmail(res.data.email)
          // navigate('/', { replace: true });
        })
        .catch(console.log);
    }
  }, []);

  useEffect(() => tokenCheck(), []);

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
    localStorage.removeItem('jwt');
    navigate('/');
    console.log('Успешный выход');
  }

  function handleRegister(values) {
    console.log(values);
    mainApi.register(values.text, values.email, values.password).then(() => {
      navigate('/movies');
      console.log('Успешная регистрация');
    });
  }

  function handleUpdateUser(userInfo) {
    mainApi
      .setInfoProfile(userInfo)
      .then(({ data }) => setCurrentUser(data))
      .catch(console.log);
    console.log('Успешная редактирование профиля');
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
                <ProtectedRoute component={Movies} loggedIn={loggedIn} movies={moviesCardList} />
              ) : (
                <Main />
              )
            } // Заменить Main
          />
          <Route
            path="/saved-movies"
            element={
              loggedIn ? (
                <ProtectedRoute component={SavedMovies} loggedIn={loggedIn} />
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
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
