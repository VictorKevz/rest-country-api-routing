import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../css/header.css";

function Header({ onToggle, isDark }) {
  return (
    <header className={`header-wrapper ${isDark && "header-bg-dark"}`}>
      <nav className="nav-container">
        <h1 className="home-title">Where in the world?</h1>
        <button className="theme-btn" type="button" onClick={onToggle}>
          {isDark ? (
            <LightModeIcon className="sun-icon" fontSize="large" />
          ) : (
            <DarkModeIcon className="moon-icon" fontSize="large" />
          )}
          <span className={`theme-text ${isDark ? "light": "dark"}`}>{isDark ? "Light Mode": "Dark Mode"}</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
