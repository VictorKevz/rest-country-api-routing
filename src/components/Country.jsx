import React, { useEffect, useState } from "react";
import "../css/country.css"
function Country({ country }) {
  return (
    <div className="country-card">
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="flag-img"
      />
      <article className="country-details">
        <h2 className="country-name">{country.name.common}</h2>
        <ul className="other-details">
          <li className="detail">
            Population:<span className="value">{country.population}</span>
          </li>
          <li className="detail">
            Region:<span className="value">{country.region}</span>
          </li>
          <li className="detail">
            Capital:<span className="value">{country.capital[0]}</span>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Country;
