import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Country from "./Country";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "../css/hero.css";

function Hero() {
  const [countryData, setCountryData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [showAllCountries, setShowAllCountries] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name&fields=population&fields=region&fields=capital&fields=flags"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
      const data = await response.json();
      setCountryData(data);
      setLoading(false);

      const uniqueRegions = [
        "All",
        ...new Set(data.map((country) => country.region)),
      ];
      setRegions(uniqueRegions);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const sortedData = countryData.sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });

  const filteredData = sortedData.filter((country) => {
    const matchesQuery = country.name.common
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesRegion =
      selectedRegion === "All" || country.region === selectedRegion;

    return matchesQuery && matchesRegion;
  });
  const toggleCountries = () => {
    setShowAllCountries(!showAllCountries);
  };
  const limitedCountries = filteredData.slice(0, 8);
  const countriesToShow = showAllCountries ? filteredData : limitedCountries;
  return (
    <section className="hero-wrapper">
      <div className="filters-inner-container">
        <SearchBar query={query} setQuery={setQuery} />
        <button
          type="button"
          className="toggle-country-btn"
          onClick={toggleCountries}
        >
          {showAllCountries ? "Collapse Countries" : "Show All Countries"}
          {showAllCountries ? (
            <CloseFullscreenIcon
              fontSize="large"
              className="country-toggle-icon"
            />
          ) : (
            <OpenInFullIcon fontSize="large" className="country-toggle-icon" />
          )}
        </button>
        <Dropdown
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          regions={regions}
        />
      </div>

      <section className="country-wrapper">
        {isLoading && <p>Fetching Data.....</p>}
        {error && <p>{`An error ocurred ${error}`}</p>}
        {countriesToShow.map((country, i) => {
          return <Country key={i} country={country} />;
        })}
      </section>
    </section>
  );
}

export default Hero;
