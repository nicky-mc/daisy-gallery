// src/app/components/Navbar.jsx
"use client";
import React, { useState } from "react";
import ThemeSelector from "./ThemeSelector";

const Navbar = ({ toggleDrawer }) => {
  const [theme, setTheme] = useState("default");

  // Function to handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  // Determine text color based on the theme
  const textColor =
    theme === "dark" || theme === "black" ? "text-white" : "text-black";

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <button
          className={`btn btn-ghost normal-case text-xl ${textColor}`}
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Text shadow for visibility
          }}
          onClick={toggleDrawer} // Sets button as sidebar toggle
        >
          The Daisy Gallery
        </button>
      </div>
      <div className="flex-none">
        <ThemeSelector onThemeChange={handleThemeChange} />
      </div>
    </div>
  );
};

export default Navbar;
