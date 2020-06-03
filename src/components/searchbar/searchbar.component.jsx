import React from "react";

import "./searchbar.styles.scss";

const SearchBar = () => {
  return (
    <form className="search-form" action="#">
      <input className="search-form__input" type="text" required />
      <button className="search-form__btn">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
