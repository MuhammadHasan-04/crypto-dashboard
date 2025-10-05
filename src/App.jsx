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
    <div className="flex flex-col min-h-screen max-w-10xl transition-colors duration-500 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 mt-24 transition-colors duration-500">
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
