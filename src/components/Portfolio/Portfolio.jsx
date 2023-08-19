import './Portfolio.css';
import arrowLink from '../../images/arrow-link.svg'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio-title'>Портфолио</h3>
      <ul className='portfolio__items'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="#!">Статичный сайт</a>
          <a className='portfolio__arrow-link' href="#!"><img className='portfolio__arrow-image' src={arrowLink} alt="Стрелка" /></a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="#!">Адаптивный сайт</a>
          <a className='portfolio__arrow-link' href="#!">
          <img className='portfolio__arrow-image' src={arrowLink} alt="Стрелка" />
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="#!">Одностраничное приложение</a>
          <a className='portfolio__arrow-link' href="#!">
            <img className='portfolio__arrow-image' src={arrowLink} alt="Стрелка" />
          </a>
        </li>
        
      </ul>
    </section>
  )
}

export default Portfolio;
