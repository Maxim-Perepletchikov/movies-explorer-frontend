import './AboutMe.css';
import avatar from '../../images/avatar.jpg'

const AboutMe = () => {
  return (
    <section className="about-me">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__container">
        <div className="about-me__info">
          <h2 className="about-me__title-name">Виталий</h2>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. &emsp;&emsp;С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__link" href="#1">Github</a>
        </div>
        <img className='about-me__avatar' src={avatar} alt="Мое фото" />
      </div>
    </section>
  );
};

export default AboutMe;
