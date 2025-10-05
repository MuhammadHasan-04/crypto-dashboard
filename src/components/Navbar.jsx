import { Link } from "react-router-dom";
import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import React from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        darkMode
          ? "dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-950"
          : "bg-white"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-10xl mx-auto flex items-center justify-between py-4">
          <div>
            <Link
              to="/"
              className="text-xl font-bold text-black dark:text-yellow-300 transition-colors duration-300"
            >
              CryptoDash
            </Link>
          </div>

          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex space-x-4 rounded-full px-4 py-2 shadow-lg bg-white dark:bg-gray-800 transition-colors duration-500">
              <Link
                to="/"
                className="px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-white dark:text-yellow-300 dark:hover:bg-yellow-500 dark:hover:text-white transition-all duration-300"
              >
                Home
              </Link>
              <Link
                to="/watchlist"
                className="px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-white dark:text-yellow-300 dark:hover:bg-yellow-500 dark:hover:text-white transition-all duration-300"
              >
                WatchList
              </Link>
              <Link
                to="/about"
                className="px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-white dark:text-yellow-300 dark:hover:bg-yellow-500 dark:hover:text-white transition-all duration-300"
              >
                About
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex flex-shrink-0 ml-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded-full text-black dark:bg-gray-700 dark:text-yellow-300 dark:hover:bg-yellow-500 dark:hover:text-white hover:bg-gray-600 transition-all duration-300"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-2xl ml-4 text-black dark:text-yellow-300"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center space-y-4 py-4 rounded-lg shadow-lg mx-4 mt-2 bg-white dark:bg-gray-800 transition-colors duration-300">
            <Link
              to="/"
              className="px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-white dark:text-yellow-300 dark:hover:bg-yellow-500 dark:hover:text-white transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/watchlist"
              className="px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-white dark:text-yellow-300 dark:hover:bg-yellow-500 dark:hover:text-white transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              WatchList
            </Link>
            <Link
              to="/about"
              className="px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-white dark:text-yellow-300 dark:hover:bg-yellow-500 dark:hover:text-white transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded-full text-black dark:bg-gray-700 dark:text-yellow-300 dark:hover:bg-yellow-500 dark:hover:text-white hover:bg-gray-600 transition-all duration-300"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
