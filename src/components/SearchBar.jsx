import React, { useState } from "react";
import Search from "@mui/icons-material/Search";
import "../css/searchBar.css";

function SearchBar({query,setQuery}) {

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form className="searchBar-wrapper" onSubmit={handleSubmit} autoComplete="off">
      <fieldset className="field">
        <label className="search-label" htmlFor="query">
          <input
            type="text"
            id="query"
            placeholder="Search for a country..."
            value={query}
            onChange={handleChange}
            className="search-input"
          />
        </label>
      </fieldset>
      <button type="submit" className="search-btn">
        <Search fontSize="large" className="search-icon" />
      </button>
    </form>
  );
}

export default SearchBar;
