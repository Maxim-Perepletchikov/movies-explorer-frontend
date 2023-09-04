import './Portfolio.css';
import arrowLink from '../../images/arrow-link.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio-title">Портфолио</h3>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/Maxim-Perepletchikov/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__arrow-link"
            href="https://github.com/Maxim-Perepletchikov/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio__arrow-image"
              src={arrowLink}
              alt="Стрелка"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/Maxim-Perepletchikov/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__arrow-link"
            href="https://github.com/Maxim-Perepletchikov/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio__arrow-image"
              src={arrowLink}
              alt="Стрелка"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/Maxim-Perepletchikov/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__arrow-link"
            href="https://github.com/Maxim-Perepletchikov/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio__arrow-image"
              src={arrowLink}
              alt="Стрелка"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
