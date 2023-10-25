import './Login.css';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Login = ({ onLogin }) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  const errorEmail = errors.email ? 'form__error_visible' : '';
  const errorPassword = errors.password ? 'form__error_visible' : '';

  return (
    <Form
      submit="Войти"
      text="Ещё не зарегистрированы?"
      path="/signup"
      link="Регистрация"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input
          className={`form__input ${errorEmail ? `form__input_color-error` : ''}`}
          type="email"
          id="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          pattern='^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$'
          placeholder="pochta@yandex.ru"
          required
        />
        <p className={`form__error ${errorEmail}`}>{errors.email || 'Что то пошло не так...'}</p>
      </label>
      <label className="form__item">
        <p className="form__item-text">Пароль</p>
        <input
          className="form__input"
          type="password"
          id="password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          // pattern="^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? ]).*$"
          placeholder="••••••••••••••"
          required
        />
        <p className={`form__error ${errorPassword}`}>Что-то пошло не так...</p>
      </label>
    </Form>
  );
};

export default Login;
