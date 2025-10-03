// App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import React from 'react';
import CoinDetail from './pages/CoinDetail';
import Watchlist from './pages/WatchList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-10xl font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-10xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins/:id" element={<CoinDetail />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
