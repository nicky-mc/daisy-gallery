// src/app/components/SidebarDrawer.jsx
"use client";
import React from "react";
import Link from "next/link";

// SideDrawer component, a collapsible sidebar for navigation
function SideDrawer({ isOpen, toggleDrawer }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-base-300 w-64 p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out z-40`}
    >
      {/* Sidebar styles: fixed position, background color, width, padding, smooth transition */}
      <button
        className="btn btn-square btn-ghost"
        onClick={toggleDrawer}
        aria-label="Close Sidebar"
        tabIndex={0}
      >
        ✕{/* Close button to hide the drawer */}
      </button>

      <nav className="mt-4">
        {/* Navigation links: full-width, text aligned left */}
        <Link href="/" className="btn btn-ghost w-full text-left">
          Home
        </Link>
        <Link href="/Street-Photos" className="btn btn-ghost w-full text-left">
          Street Photos
        </Link>
        <Link href="/Retro-Photos" className="btn btn-ghost w-full text-left">
          Retro Photos
        </Link>

        <Link href="/You-Choose" className="btn btn-ghost w-full text-left">
          You Choose
        </Link>
      </nav>
    </div>
  );
}

export default SideDrawer;
