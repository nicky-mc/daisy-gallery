// src/app/components/ThemeSelector.jsx
"use client";
import React, { useState, useEffect, useCallback } from "react";

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

const ThemeSelector = ({ onThemeChange }) => {
  const [selectedTheme, setSelectedTheme] = useState("default"); // Default theme state

  // Function to apply the selected theme
  const applyTheme = useCallback(
    (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      setSelectedTheme(theme);
      if (onThemeChange) {
        onThemeChange(theme); // Notify parent component of theme change
      }
    },
    [onThemeChange]
  );

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default";
    applyTheme(savedTheme);
  }, [applyTheme]);

  // Save selected theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", selectedTheme);
  }, [selectedTheme]);

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
                value={theme}
                checked={selectedTheme === theme}
                onChange={() => applyTheme(theme)}
              />
              <span className="ml-2">
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;
