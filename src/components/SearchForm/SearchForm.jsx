import './SearchForm.css';
import '../../images/search-button.svg'

const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button
          className="search-form__button"
          type="submit"
          aria-label="Кнопка найти фильм"
        ></button>
      </div>
      <div className="search-form__toggle">
        <label className="search-form__switch">
          <input className="search-form__checkbox" type="checkbox" />
          <span className="search-form__slider"></span>
        </label>
        <p className="search-form__text">Короткометражки</p>
      </div>
    </form>
  );
};

export default SearchForm;
