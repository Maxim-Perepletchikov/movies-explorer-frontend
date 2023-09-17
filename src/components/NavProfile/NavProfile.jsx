import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const NavProfile = () => {
  return (
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
        <Navigation />
      </div>
    </>
  );
};

export default NavProfile;
