// src/app/components/LayoutWrapper.jsx
"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import SideDrawer from "./SIdeDrawer";

const LayoutWrapper = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // toggleDrawer toggles the sidebar drawer open or closed
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <SideDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className="main-content">{children}</div>
    </>
  );
};

export default LayoutWrapper;
