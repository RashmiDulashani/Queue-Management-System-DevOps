"use client";

import { useState } from "react";   // Manages mobile menu open/close state.
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-red-500">
          Q-Master
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-red-500 transition">
            Sign Up
          </Link>
          <Link href="/queue" className="hover:text-red-500 transition">
            Login
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <Link
            href="/"
            className="block px-6 py-3 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
          <Link
            href="/queue"
            className="block px-6 py-3 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
