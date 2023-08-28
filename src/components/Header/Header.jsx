import './Header.css';
import logo from '../../images/logo.svg';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname !== '/' ? 'header_type_auth' : ''}`}>
      <img className="header__logo" src={logo} alt="Логотип"></img>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link
                to={'/sign-up'}
                className="header__link header__link_type_main"
              >
                Регистрация
              </Link>
              <Link
                to={'/sign-in'}
                className="header__link header__link_type_main"
              >
                Войти
              </Link>
            </div>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <div>
                <Link to={'/movies'} className="header__link">
                  Фильмы
                </Link>
                <Link
                  to={'/saved-movies'}
                  className="header__link header__link_font_regular"
                >
                  Сохранённые фильмы
                </Link>
              </div>
              <div className="header__link-auth">
                <Link to={'/profile'} className="header__link">
                  Аккаунт
                </Link>
                <Link to={'/profile'} className="header__link-button"></Link>
              </div>
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <div>
                <Link to={'/movies'} className="header__link header__link_font_regular">
                  Фильмы
                </Link>
                <Link
                  to={'/saved-movies'}
                  className="header__link"
                >
                  Сохранённые фильмы
                </Link>
              </div>
              <div className="header__link-auth">
                <Link to={'/profile'} className="header__link">
                  Аккаунт
                </Link>
                <Link to={'/profile'} className="header__link-button"></Link>
              </div>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <div>
                <Link to={'/movies'} className="header__link header__link_font_regular">
                  Фильмы
                </Link>
                <Link
                  to={'/saved-movies'}
                  className="header__link header__link_font_regular"
                >
                  Сохранённые фильмы
                </Link>
              </div>
              <div className="header__link-auth">
                <Link to={'/profile'} className="header__link">
                  Аккаунт
                </Link>
                <Link to={'/profile'} className="header__link-button"></Link>
              </div>
            </>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
