import './Navigation.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import picAcc from '../../images/Account-icon.svg';

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleMenu = () => setShowSidebar(!showSidebar);

  const setActiveMovies = ({ isActive }) =>
    isActive ? 'navigation__link navigation__link_active' : 'navigation__link';

  const setActiveAccount = ({ isActive }) =>
    isActive
      ? 'navigation__link navigation__link_active navigation__link_type_profile'
      : 'navigation__link navigation__link_type_profile';

  return (
    <nav className="navigation">
      <button
        className="navigation__btn-menu"
        type="button"
        onClick={handleToggleMenu}
      ></button>
      <div
        className={`navigation__container ${
          showSidebar ? 'navigation__container_visible' : ''
        }`}
      >
        <div className="navigation__sidebar">
          <div className="navigation__list-container">
            <button
              className="navigation__btn-close"
              type="button"
              onClick={handleToggleMenu}
            ></button>
            <ul className="navigation__list">
              <li className="navigation__list-item navigation__list-item_type_main">
                <Link to="/" className="navigation__link">
                  Главная
                </Link>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/movies" className={setActiveMovies}>
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/saved-movies" className={setActiveMovies}>
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/profile" className={setActiveAccount}>
            Аккаунт
            <div className="navigation__link-button"></div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
