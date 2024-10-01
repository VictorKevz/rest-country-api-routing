import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "../css/country.css";
import { countryCardVariants } from "../variants";
function Country({ country, isDark }) {
  return (
    <Link
      className={`country-card ${isDark && "header-bg-dark"}`}
      to={`details/${country.cca3}`}
    >
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="flag-img"
      />
      <article className="country-details">
        <h2 className="country-name">{country.name.common}</h2>
        <ul className="other-details">
          <li className="detail">
            Population: <span className="value">{country.population}</span>
          </li>
          <li className="detail">
            Region: <span className="value">{country.region}</span>
          </li>
          <li className="detail">
            Capital: <span className="value">{country.capital[0]}</span>
          </li>
        </ul>
      </article>
    </Link>
  );
}

export default Country;
