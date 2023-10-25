import './Register.css';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Register = ({ onRegister }) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  const errorUser = errors.text ? 'form__error_visible' : '';
  const errorEmail = errors.email ? 'form__error_visible' : '';
  const errorPassword = errors.password ? 'form__error_visible' : '';
  // console.log(values);

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
          pattern="[a-zA-Z0-9А-я]+"
          placeholder="Виталий"
          required
        />
        <p className={`form__error ${errorUser}`}>{errors.text || 'Что то пошло не так...'}</p>
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
          pattern='^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$'
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
          placeholder="••••••••••••••"
          pattern="^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? ]).*$"
          required
        />
        <p className={`form__error ${errorPassword}`}>
          {errors.password || 'Что то пошло не так...'}
        </p>
      </label>
    </Form>
  );
};

export default Register;
