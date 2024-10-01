import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Country from "./Country";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { AnimatePresence, motion } from "framer-motion";
import { childVariants, countryCardVariants } from "../variants";
import "../css/hero.css";

function Hero({ isDark }) {
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
        "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3"
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
        <SearchBar query={query} setQuery={setQuery} isDark={isDark} />
        <button
          type="button"
          className={`toggle-country-btn ${isDark && "header-bg-dark"}`}
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
          isDark={isDark}
        />
      </div>

      <motion.section
        className="country-wrapper"
        variants={countryCardVariants}
        initial="hidden"
        animate="visible"
        key={countryData}
      >
        {isLoading && <p>Fetching Data.....</p>}
        {error && <p>{`An error ocurred ${error}`}</p>}
        {countriesToShow.map((country, i) => {
          return (
            <AnimatePresence mode="wait" key={i}>
              <motion.div
                variants={childVariants}
                className={`country-card ${isDark && "header-bg-dark"}`}
              >
                <Country key={i} country={country} isDark={isDark} />
              </motion.div>
            </AnimatePresence>
          );
        })}
      </motion.section>
    </section>
  );
}

export default Hero;
