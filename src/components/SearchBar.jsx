import React, { useState } from "react";
import Search from "@mui/icons-material/Search";
import "../css/searchBar.css";

function SearchBar({ query, setQuery, isDark }) {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={`searchBar-wrapper ${isDark && "header-bg-dark"}`}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <fieldset className="field">
        <label className="search-label" htmlFor="query">
          <input
            type="text"
            id="query"
            placeholder="Search for a country..."
            value={query}
            onChange={handleChange}
            className={`search-input ${isDark && "text-dark-mode"}`}
          />
        </label>
      </fieldset>
      <button type="submit" className="search-btn">
        <Search
          fontSize="large"
          className={`search-icon ${isDark && "text-dark-mode"}`}
        />
      </button>
    </form>
  );
}

export default SearchBar;
