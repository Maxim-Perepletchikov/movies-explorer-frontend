import './Register.css';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Register = ({ onRegister }) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  const errorEmail = errors.email ? 'form__error_visible' : '';
  const errorPassword = errors.password ? 'form__error_visible' : '';

  return (
    <Form
      submit="Зарегистрироваться"
      text="Уже зарегистрированы?"
      path="/signin"
      link="Войти"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="form__item">
        <p className="form__item-text">Имя</p>
        <input
          className="form__input"
          type="text"
          id="text"
          name="text"
          value={values.text || ''}
          onChange={handleChange}
          // pattern=''
          placeholder="Виталий"
          required
        />
        <p className="form__error">Что-то пошло не так...</p>
      </label>
      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input
          className={`form__input ${errorEmail ? `form__input_color-error` : ''}`}
          type="email"
          id="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          placeholder="pochta@yandex.ru"
          required
        />
        <p className={`form__error ${errorEmail}`}>{errors.email || 'error'}</p>
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
          placeholder="••••••••••••••"
          required
        />
        <p className="form__error">
          {errors.name || ''}
        </p>
      </label>
    </Form>
  );
};

export default Register;
