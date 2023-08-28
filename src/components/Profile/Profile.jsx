import './Profile.css';

const Profile = () => {
  return (
    <section className="profile">
      <form className="profile__form">
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
      </form>
      <div className="profile__container-buttons">
        <button className="profile__button">Редактировать</button>
        <button className="profile__button">Выйти из аккаунта</button>
      </div>
    </section>
  );
};

export default Profile;
