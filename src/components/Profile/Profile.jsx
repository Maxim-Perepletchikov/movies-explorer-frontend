import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Profile = ({ onLogout, onEditProfile }) => {
  const [activeButtons, setActiveButtons] = useState(false);
  const { values, errors, isValid, setValues, handleChange } =
    useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);

  console.log(currentUser);

  const handleButtons = () => {
    setActiveButtons(!activeButtons);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfile({
      name: values.text,
      email: values.email,
    });
  };

  useEffect(() => {
    setValues({ ...values, text: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <div>
          <h2 className="profile__name">Привет, {currentUser.name}!</h2>
          <div className="profile__inputs">
            <p className="profile__text">Имя</p>
            <input
              className="profile__edit-name"
              type="text"
              id="text"
              name="text"
              value={values.text || ''}
              onChange={handleChange}
              placeholder="Виталий"
              required
            ></input>
          </div>
          <div className="profile__inputs">
            <p className="profile__text">E-mail</p>
            <input
              className="profile__edit-name"
              type="email"
              id="email"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              placeholder="pochta@yandex.ru"
              required
            ></input>
          </div>
        </div>
        <button
          className={`profile_save-button ${
            activeButtons ? 'profile_save-button_visible' : ''
          }`}
          onClick={handleButtons}
          type="submit"
        >
          Сохранить
        </button>
      </form>
      <div className="profile__container-buttons">
        <button
          className={`profile__button ${
            activeButtons ? 'profile__button_invisible' : ''
          }`}
          onClick={handleButtons}
        >
          Редактировать
        </button>
        <button
          className={`profile__button ${
            activeButtons ? 'profile__button_invisible' : ''
          }`}
          onClick={onLogout}
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
};

export default Profile;
