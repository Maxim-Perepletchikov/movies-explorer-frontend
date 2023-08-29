import './Form.css';
import { Link, useLocation } from 'react-router-dom';

const Form = ({ children, submit, text, path, link }) => {
  const { pathname } = useLocation();
  const login = pathname === '/signin' ? 'form__button_pos_margin' : '';

  return (
    <section className="form">
      <div className="form__container">
        <form className="form__main">
          <div className="form__inputs">{children}</div>
          <button className={`form__button ${login}`} type="submit">
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
