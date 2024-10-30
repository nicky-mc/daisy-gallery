// src/app/components/SIdeDrawer.jsx
"use client";
import React from "react";
import Link from "next/link";

// SidebarDrawer component, a collapsible sidebar for navigation
const SidebarDrawer = ({ isOpen, toggleDrawer }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-base-300 w-64 p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out z-40`}
    >
      {/* 
      fixed: positions sidebar in a fixed location, inset-y-0: stretches vertically, left-0: places it on the left
      bg-base-300: sets background color, w-64: sets width to 16rem, p-4: padding around content
      transform: enables transition effects, translate-x-0/-translate-x-full: toggles visibility with translation,
      transition-transform: smooth animation for opening/closing, duration-200: sets animation speed, ease-in-out: smooth transition curve,
      z-40: makes the drawer overlay above other content
      */}
      <button className="btn btn-square btn-ghost" onClick={toggleDrawer}>
        ✕{/* Close button to hide the drawer */}
      </button>

      <nav className="mt-4">
        {/* mt-4: adds top margin for spacing */}
        <Link href="/" className="btn btn-ghost w-full text-left">
          Home
        </Link>
        <Link href="/about" className="btn btn-ghost w-full text-left">
          About
        </Link>
        <Link href="/services" className="btn btn-ghost w-full text-left">
          Services
        </Link>
        <Link href="/contact" className="btn btn-ghost w-full text-left">
          Contact
        </Link>
        {/* Navigation links: full-width, text aligned left */}
      </nav>
    </div>
  );
};

export default SidebarDrawer;
