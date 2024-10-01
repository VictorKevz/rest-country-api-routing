import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import DetailsPage from "./components/DetailsPage";


// CSS.....
import "./App.css";

function App() {
  const [isDark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
  });
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);
  const toggleTheme = () => {
    setDark(!isDark);
  };
  return (
    <main className={`outer-container ${isDark && "bg-dark"}`}>
      <div className={`inner-container`}>
        <Header onToggle={toggleTheme} isDark={isDark} />
        <Routes>
        <Route path="/" element={<Hero isDark={isDark}/>} />
        <Route path="/details/:cca3" element={<DetailsPage isDark={isDark}/>} />
          
        </Routes>
      </div>
    </main>
  );
}

export default App;
