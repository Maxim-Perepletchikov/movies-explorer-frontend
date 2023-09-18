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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // const [userInfo, setUserInfo] = useState({})

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getInfoProfile()
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch(console.log);
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
    console.log(values);
    mainApi
      .authorize(values.email, values.password)
      .then((res) => {
        console.log(res);
        localStorage.setItem('jwt', res.jwt);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
        console.log('Успешно');
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
      console.log('Успешный вход');
    });
  }

  function handleUpdateUser(userInfo) {
    mainApi
      .setInfoProfile(userInfo)
      .then(({ data }) => setCurrentUser(data))
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
                <ProtectedRoute component={Movies} loggedIn={loggedIn} />
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
              <ProtectedRoute
                component={Profile}
                loggedIn={loggedIn}
                onLogout={handleLogout}
                onEditProfile={handleUpdateUser}
              />
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
