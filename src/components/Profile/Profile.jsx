import { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [activeButtons, setActiveButtons] = useState(false);

  function handleButtons() {
    setActiveButtons(!activeButtons);
  }

  return (
    <section className="profile">
      <form className="profile__form">
        <div>
          <h2 className="profile__name">Привет, Виталий!</h2>
          <div className="profile__inputs">
            <p className="profile__text">Имя</p>
            <input
              className="profile__edit-name"
              placeholder="Виталий"
              required
            ></input>
          </div>
          <div className="profile__inputs">
            <p className="profile__text">E-mail</p>
            <input
              className="profile__edit-name"
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
          type='submit'
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
        <button className={`profile__button ${
            activeButtons ? 'profile__button_invisible' : ''
          }`}>Выйти из аккаунта</button>
      </div>
    </section>
  );
};

export default Profile;
