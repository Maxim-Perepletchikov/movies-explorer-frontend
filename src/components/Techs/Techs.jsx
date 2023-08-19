import './Techs.css';

const Techs = () => {
  return (
    <section className='techs'>
      <h3 className="techs__title">Технологии</h3>
      <div className="techs__container">
        <h2 className='techs__main-title'>7 технологий</h2>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__items'>
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li> 
        </ul>
      </div>
    </section>
  )
}

export default Techs;
