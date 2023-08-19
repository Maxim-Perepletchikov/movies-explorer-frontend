import './Promo.css';
import promoLogo from '../../images/landing-logo.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="promo__button" href="#TODO">Узнать больше</button>
      </div>
      <img className="promo__logo" src={promoLogo} alt="Логотип" />
    </section>
  );
};

export default Promo;
