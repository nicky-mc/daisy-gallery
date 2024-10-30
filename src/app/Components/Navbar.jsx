// Navbar.jsx
"use client";
import React from "react";
import ThemeSelector from "./ThemeSelector"; // Importing ThemeSelector component for theme selection

const Navbar = ({ toggleDrawer }) => {
  return (
    <div className="navbar bg-base-200">
      {/* navbar: DaisyUI component for navigation bar, bg-base-200: Sets a light background color */}

      <div className="flex-1">
        {/* flex-1: Makes this section take up as much space as possible, for left alignment */}
        <a className="btn btn-ghost normal-case text-xl">MyApp</a>
        {/* btn btn-ghost: DaisyUI button with no background, normal-case: Removes automatic capitalization, text-xl: Large text */}
      </div>

      <div className="flex-none">
        {/* flex-none: Ensures that this section does not grow or shrink in width */}

        {/* Drawer toggle button, visible on all screen sizes */}
        <button className="btn btn-square btn-ghost" onClick={toggleDrawer}>
          {/* btn-square: DaisyUI square button, btn-ghost: Removes background/shadow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* SVG icon for menu (hamburger style) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>

        {/* Theme Selector Button on far right */}
        <ThemeSelector />
      </div>
    </div>
  );
};

export default Navbar;
