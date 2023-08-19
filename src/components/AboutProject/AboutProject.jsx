import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <article className="two-columns">
        <div className="two-columns__info">
          <h3 className="two-columns__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="two-columns__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="two-columns__info">
          <h3 className="two-columns__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="two-columns__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>
      <div className="two-columns">
        <div className="two-columns__dev-time">
          <h3 className='two-columns__dev-time-title'>1 неделя</h3>
          <p className='two-columns__dev-time-text'>Back-end</p>
        </div>
        <div className="two-columns__dev-time">
          <h3 className='two-columns__dev-time-title two-columns__dev-time-title_color_light'>4 недели</h3>
          <p className='two-columns__dev-time-text'>Front-end</p>
        </div>
        
      </div>
    </section>
  );
};

export default AboutProject;
