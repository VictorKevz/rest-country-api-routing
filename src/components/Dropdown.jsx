import React, { useState } from "react";
import "../css/dropDown.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Dropdown({ setSelectedRegion, selectedRegion, regions, isDark }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const updateRegion = (region) => {
    setSelectedRegion(region);
    setDropDownOpen(false);
  };
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className="dropDown-wrapper">
      <button
        className={`dropDown-btn ${isDark && "header-bg-dark"}`}
        onClick={toggleDropDown}
        type="button"
      >
        {dropDownOpen ? "Filter by Region" : selectedRegion}
        {dropDownOpen ? (
          <KeyboardArrowUpIcon
            fontSize="large"
            className={`dropDown-icon ${isDark && "text-dark-mode"}`}
          />
        ) : (
          <KeyboardArrowDownIcon
            fontSize="large"
            className={`dropDown-icon ${isDark && "text-dark-mode"}`}
          />
        )}
      </button>
      {dropDownOpen && (
        <ul className={`dropDown-items-wrapper ${isDark && "header-bg-dark"}`}>
          {regions.map((region, index) => {
            const isActive = selectedRegion === region;
            return (
              <li
                className={`dropDown-item ${isActive && "active"} ${isDark && "cursor-dark"}`}
                onClick={() => updateRegion(region)}
                key={index}
              >
                {region}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
