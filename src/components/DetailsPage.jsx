import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "../css/detailsPage.css";

function DetailsPage() {
  const [country, setCountry] = useState(null); // Change to null to handle loading better
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { cca3 } = useParams();


  const getCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${cca3}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCountry(data[0]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountry();
  }, [cca3]);

  if (isLoading) {
    return <p>Fetching data......</p>;
  }

  if (error) {
    return <p>{`Failed to fetch country details: ${error}`}</p>;
  }

  if (!country) {
    return <p>Loading.....</p>;
  }
  if (!cca3) {
    return <p>Undefined!</p>;
  }

  // Check for nativeName to avoid errors
  const nativeNamesObj = country.nativeName || {};
  const firstLanguageKey = Object.keys(nativeNamesObj)[0];
  const nativeOfficialName =
    firstLanguageKey && nativeNamesObj[firstLanguageKey].official;

  // Optional chaining or default values for other fields
  const capital = country.capital ? country.capital[0] : "N/A";
  const tld = country.tld ? country.tld[0] : "N/A";
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";

  return (
    
      <section className="details-page-wrapper">
        <Link to={"/"} type="button" className="back-btn">
          <KeyboardBackspaceIcon fontSize="large"/> Back
        </Link>
        <div className="details-inner-page">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="details-page-flag"
          />
          <div className="text-wrapper">
            <article className="main-details-wrapper">
              <ul className="other-details">
                <li className="detail">
                  <h1 className="details-country-name">
                    {country.name.common}
                  </h1>
                </li>
                <li className="detail">
                  Native Name:{" "}
                  <span className="value">{nativeOfficialName || "N/A"}</span>
                </li>
                <li className="detail">
                  Population:{" "}
                  <span className="value">{country.population}</span>
                </li>
                <li className="detail">
                  Region: <span className="value">{country.region}</span>
                </li>
                <li className="detail">
                  Sub Region:{" "}
                  <span className="value">{country.subregion || "N/A"}</span>
                </li>
                <li className="detail">
                  Capital: <span className="value">{capital}</span>
                </li>
              </ul>
              <ul className="minor-details-wrapper">
                <li className="detail">
                  Top Level Domain:{" "}
                  <span className="value">{tld}</span>
                </li>
                <li className="detail">
                  Currencies:{" "}
                  <span className="value">{currencies}</span>
                </li>
                {/* You can add other fields as needed */}
              </ul>
            </article>
          </div>
        </div>
      </section>
    
  );
}

export default DetailsPage;