import { Link } from 'react-router-dom';
import { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import React from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-transparent  z-50 backdrop-blur-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-10xl mx-auto flex items-center justify-between py-4">
          <div className>
            <Link
              to="/"
              className="text-xl font-bold text-black "
            >
              CryptoDash
            </Link>
          </div>

          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex space-x-4 bg-white  rounded-full px-4 py-2 shadow-lg">
              <Link
                to="/"
                className="px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/watchlist"
                className="px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-white transition"
              >
                WatchList
              </Link>
              <Link
                to="/about"
                className="px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-white transition"
              >
                About
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex flex-shrink-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded-full text-black hover:bg-gray-600"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-black text-2xl ml-4"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center space-y-4 bg-white  py-4 rounded-lg mx-4 shadow-lg mt-2">
            <Link
              to="/"
              className="text-black  px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/watchlist"
              className="text-black  px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              WatchList
            </Link>
            <Link
              to="/about"
              className="text-black  px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded-full text-black hover:bg-gray-600"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
