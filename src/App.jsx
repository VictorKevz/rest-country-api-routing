import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
        <Header onToggle={toggleTheme} isDark={isDark}/>
        <Hero/>
      </div>
    </main>
  );
}

export default App;
