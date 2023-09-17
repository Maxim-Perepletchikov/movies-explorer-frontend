import './Header.css';
import logo from '../../images/logo.svg';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import NavAuth from '../NavAuth/NavAuth';
import NavProfile from '../NavProfile/NavProfile';

function Header({ loggedIn }) {
  const { pathname } = useLocation();

  const auth = pathname !== '/' && loggedIn ? 'header_type_auth' : '';
  const form =
    pathname === '/signup' || pathname === '/signin'
      ? 'header_type_auth header_type_form'
      : '';

  return (
    <header className={`header ${auth} ${form}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип"></img>
      </Link>
      <Routes>
        <Route path="/" element={loggedIn ? <NavProfile /> : <NavAuth />} />
        <Route
          path="/movies"
          element={loggedIn ? <NavProfile /> : <NavAuth />}
        />
        <Route
          path="/saved-movies"
          element={loggedIn ? <NavProfile /> : <NavAuth />}
        />
        <Route
          path="/profile"
          element={loggedIn ? <NavProfile /> : <NavAuth />}
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
