import './Header.css'
import logo from '../../images/logo.svg'
import { Routes, Route, Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип"></img>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to={'/sign-up'} className="header__link">
                Регистрация
              </Link>
              <Link to={'/sign-in'} className="header__link">
              Войти
            </Link>
            </div>
          }
        />
      </Routes>
    </header>
  )
}

export default Header
