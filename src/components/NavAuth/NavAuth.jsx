import { Link } from 'react-router-dom';

const NavAuth = () => {
  return (
    <div>
      <Link
        to={'/signup'}
        className="header__link header__link_type_main header__link_active"
      >
        Регистрация
      </Link>
      <Link
        to={'/signin'}
        className="header__link header__link_type_main header__link_active"
      >
        Войти
      </Link>
    </div>
  );
};

export default NavAuth;
