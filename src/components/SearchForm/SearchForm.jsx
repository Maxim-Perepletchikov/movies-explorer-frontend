import './SearchForm.css';
import '../../images/search-button.svg';
import { useEffect, useState } from 'react';

const SearchForm = ({
  search,
  setSearch,
  checkbox,
  setCheckbox,
  handleGetMovies,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    handleGetMovies(search);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          minLength={1}
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
          <input
            className="search-form__checkbox"
            type="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
          <span className="search-form__slider"></span>
        </label>
        <p className="search-form__text">Короткометражки</p>
      </div>
    </form>
  );
};

export default SearchForm;
