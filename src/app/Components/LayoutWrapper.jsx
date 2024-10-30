// src/app/components/LayoutWrapper.jsx
"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import SidebarDrawer from "./SIdeDrawer";

const LayoutWrapper = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // toggleDrawer toggles the sidebar drawer open or closed
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <SidebarDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {children}
    </>
  );
};

export default LayoutWrapper;
