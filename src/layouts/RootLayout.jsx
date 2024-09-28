// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import "../App.css"

// const RootLayout = () => {
//   // Theme state and logic (moved here from App.jsx)
//   const [isDark, setDark] = useState(() => {
//     const savedTheme = localStorage.getItem("theme");
//     return savedTheme !== null ? JSON.parse(savedTheme) : false;
//   });

//   useEffect(() => {
//     localStorage.setItem("theme", JSON.stringify(isDark));
//   }, [isDark]);

//   const toggleTheme = () => {
//     setDark(!isDark);
//   };

//   return (
//     <>
//       {/* Shared header, passing props */}
//       <Header onToggle={toggleTheme} isDark={isDark} />

//       {/* Main content with Outlet */}
//       <main className={`outer-container ${isDark && "bg-dark"}`}>
//         <div className="inner-container">
//           <Outlet />  {/* This renders the nested route components like Hero */}
//         </div>
//       </main>
//     </>
//   );
// };

// export default RootLayout;