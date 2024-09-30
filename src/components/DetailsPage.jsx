import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../css/detailsPage.css";

function DetailsPage() {
  const [country, setCountry] = useState(null);
  const [bordersData, setBordersData] = useState(null);
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

  const getBorders = async (borders) => {
    try {
      const borderRequests = borders.map(async (border) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}`
        );
        return response.json();
      });
      const results = await Promise.all(borderRequests);
      const neighboringCountries = results.map(
        (result) => result[0].name.common
      );
      setBordersData(neighboringCountries);
    } catch (error) {
      setError("Failed to fetch neighboring countries.");
    }
  };
  useEffect(() => {
    getCountry();
  }, [cca3]);

  useEffect(() => {
    if (country && country.borders) {
      getBorders(country.borders);
    }
  }, [country]);

  if (isLoading) {
    return <p>Fetching data......</p>;
  }

  if (error) {
    return <p>{`Failed to fetch country details: ${error}`}</p>;
  }

  if (!country) {
    return <p>Loading.....</p>;
  }

  // Check for nativeName to avoid errors
  const nativeNamesObj = country.name.nativeName || {};
  const firstLanguageKey = Object.keys(nativeNamesObj)[0];
  const nativeOfficialName = nativeNamesObj[firstLanguageKey].official;

  // Optional chaining or default values for other fields
  const capital = country.capital ? country.capital[0] : "N/A";
  const tld = country.tld ? country.tld[0] : "N/A";

  const currencyObj = country.currencies || {};
  const firstCurrencyKey = Object.keys(currencyObj)[0];
  const currency = currencyObj[firstCurrencyKey].name || "N/A";

  const languagesList = Object.entries(country.languages);

  return (
    <section className="details-page-wrapper">
      <div className="details-inner">
        <Link to={`/`} type="button" className="back-btn">
          <KeyboardBackspaceIcon fontSize="large" /> Back
        </Link>
        <div className="details-page-container">
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
                <li className="detail native">
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
                  Top Level Domain: <span className="value">{tld}</span>
                </li>
                <li className="detail">
                  Currencies: <span className="value">{currency}</span>
                </li>
                <ul className="currency-wrapper">
                  <li className="detail">Languages: </li>
                  {languagesList.map(([key, value]) => (
                    <li
                      key={key.toUpperCase()}
                      className="value currency"
                    >{`${value} ${languagesList.length > 1 && ","}`}</li>
                  ))}
                </ul>
              </ul>
            </article>
            {bordersData && bordersData.length > 0 && (
              <ul className="borders-wrapper">
                <li className="detail">Border Countries: </li>
                {bordersData.map((border, i) => {

                  return (
                    <li key={i} className="border-link-item">
                      <Link to={`/details/${country.borders[i]}`}>{border}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsPage;
