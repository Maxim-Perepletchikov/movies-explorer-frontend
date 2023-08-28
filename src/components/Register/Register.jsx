import './Register.css';
import Form from '../Form/Form';

const Register = () => {
  return (
    <Form
      title="Добро пожаловать!"
      submit="Зарегистрироваться"
      text="Уже зарегистрированы"
      path="/signin"
      link="Войти"
    >
      <label className='form__item'>
        <p className='form__item-text'>Имя</p>
        <input className='form__input' type="text" placeholder='Виталий' required />
        <p className='form__error'>Что-то пошло не так...</p>
      </label>
      <label className='form__item'>
        <p className='form__item-text'>E-mail</p>
        <input className='form__input' type="email" placeholder='pochta@yandex.ru' required />
        <p className='form__error'>Что-то пошло не так...</p>
      </label>
      <label className='form__item'>
        <p className='form__item-text'>Пароль</p>
        <input className='form__input form__input_color-error' type="password" placeholder='••••••••••••••' required />
        <p className='form__error form__error_visible'>Что-то пошло не так...</p>
      </label>
      
    </Form>
  );
};

export default Register;
