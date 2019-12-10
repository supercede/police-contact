import React from "react";
import "./search.css";

const Search = ({ handleChange }) => {
  return (
    <div className="search">
      <input
        className="search-input"
        type="search"
        placeholder="search states"
        onChange={handleChange}
      />
      <button type="submit" className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
