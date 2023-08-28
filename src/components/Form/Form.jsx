import './Form.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Form = ({ title, children, submit, text, path, link }) => {
  return (
    <section className="form">
      <div className="form__container">
        <Link to="/" className="form__link">
          <img className="form__logo" alt="Логотип" src={logo}></img>
        </Link>
        <h2 className="form__title">{title}</h2>
        <form className="form__main">
          <div className="form__inputs">{children}</div>
          <button className="form__button" type="submit">
            {submit}
          </button>
        </form>
        <p className='form__text'>
          {text}
          <Link to={path} className='form__link'>
            {link}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Form;
