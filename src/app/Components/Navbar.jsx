"use client";
import React from "react";
import ThemeSelector from "./ThemeSelector";

const Navbar = ({ toggleDrawer }) => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <button
          className="btn btn-ghost normal-case text-xl text-black"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Text shadow for visibility
          }}
          onClick={toggleDrawer} // Sets button as sidebar toggle
        >
          The Daisy Gallery
        </button>
      </div>
      <div className="flex-none">
        <ThemeSelector />
      </div>
    </div>
  );
};

export default Navbar;
