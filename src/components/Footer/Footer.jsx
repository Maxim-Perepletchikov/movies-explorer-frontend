import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__items">
          <li className="footer__item">
            <a className="footer__link" href="#1">Яндекс.Практикум</a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#1">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
