import './Login.css'; 

import Form from '../Form/Form';

const Login = () => {
  return (
    <Form
      submit="Войти"
      text="Ещё не зарегистрированы?"
      path="/signup"
      link="Регистрация"
    >
      <label className='form__item'>
        <p className='form__item-text'>E-mail</p>
        <input className='form__input' type="email" placeholder='pochta@yandex.ru' required />
        <p className='form__error'>Что-то пошло не так...</p>
      </label>
      <label className='form__item'>
        <p className='form__item-text'>Пароль</p>
        <input className='form__input' type="password" placeholder='••••••••••••••' required />
        <p className='form__error'>Что-то пошло не так...</p>
      </label>
    </Form>
  );
};

export default Login;