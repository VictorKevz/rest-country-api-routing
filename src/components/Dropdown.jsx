import React, { useState } from "react";
import "../css/dropDown.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Dropdown({ setSelectedRegion, selectedRegion,regions }) {
  const [dropDownOpen, setDropDownOpen] = useState(true);
  
  const updateRegion = (region) => {
    setSelectedRegion(region);
    setDropDownOpen(false);
  };
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className="dropDown-wrapper">
      <button className="dropDown-btn" onClick={toggleDropDown} type="button">
        {dropDownOpen ? "Filter by Region" : selectedRegion}
        {dropDownOpen ? (
          <KeyboardArrowUpIcon fontSize="large" className="dropDown-icon" />
        ) : (
          <KeyboardArrowDownIcon fontSize="large" className="dropDown-icon" />
        )}
      </button>
      {dropDownOpen && (
        <ul className="dropDown-items-wrapper">
          {regions.map((region, index) => {
            const isActive = selectedRegion === region;
            return (
              <li
                className={`dropDown-item ${isActive && "active"}`}
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
