import './Header.css';
import logo from '../../images/logo.svg';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  const auth = pathname !== '/' ? 'header_type_auth' : '';
  const form =
    pathname === '/signup' || pathname === '/signin' ? 'header_type_form' : '';
  const notFound = pathname === '*' ? 'header_type_error' : '';
  console.log(pathname);

  return (
    <header className={`header ${auth} ${form} ${notFound}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип"></img>
      </Link>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link
                to={'/signup'}
                className="header__link header__link_type_main"
              >
                Регистрация
              </Link>
              <Link
                to={'/signin'}
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
              <div >
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
                <Link
                  to={'/movies'}
                  className="header__link header__link_font_regular"
                >
                  Фильмы
                </Link>
                <Link to={'/saved-movies'} className="header__link">
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
                <Link
                  to={'/movies'}
                  className="header__link header__link_font_regular"
                >
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
          path="/signup"
          element={<h2 className="header__title">Добро пожаловать!</h2>}
        />
        <Route
          path="/signin"
          element={<h2 className="header__title">Рады видеть!</h2>}
        />
      </Routes>
    </header>
  );
}

export default Header;
