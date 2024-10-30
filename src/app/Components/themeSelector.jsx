// src/app/components/ThemeSelector.jsx
"use client";
import React, { useState, useEffect } from "react";

// Array of available DaisyUI themes for selection
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const ThemeSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState("light"); // Default theme state

  // Function to apply the selected theme by setting `data-theme` on the root <html> element
  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme); // Changes theme across the app
    setSelectedTheme(theme); // Updates local component state with the selected theme
  };

  // useEffect hook: Runs only on initial render to load the saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Gets saved theme or defaults to 'light'
    applyTheme(savedTheme); // Applies the initial theme
  }, []);

  // useEffect hook: Saves the selected theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", selectedTheme); // Saves selected theme for persistence across sessions
  }, [selectedTheme]);

  return (
    <div className="dropdown dropdown-end">
      {/* Dropdown-triggering button, positioned to align right using `dropdown-end` */}
      <button className="btn btn-ghost">
        {/* btn btn-ghost: DaisyUI button style with no background or shadow */}
        Theme: {selectedTheme.charAt(0).toUpperCase() +
          selectedTheme.slice(1)}{" "}
        {/* Displays current theme */}
      </button>

      {/* Dropdown content: Contains the list of theme options */}
      <ul className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-48">
        {themes.map((theme) => (
          <li key={theme}>
            <button
              onClick={() => applyTheme(theme)} // Calls applyTheme function on click to change theme
              className={`w-full text-left ${
                theme === selectedTheme ? "font-bold" : ""
              }`}
              // w-full: full-width button, text-left: aligns text left, font-bold: highlights selected theme
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}{" "}
              {/* Capitalizes theme name for display */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;
