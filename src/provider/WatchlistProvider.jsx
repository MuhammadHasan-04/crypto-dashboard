import { WatchlistContext } from '../context/WatchlistContext';
import useLocalStorage from '../hooks/useLocalStorage';
import React from 'react';

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useLocalStorage('watchlist', []);

  const toggleWatchlist = (coin) => {
    setWatchlist(
      (prev) =>
        prev.find((c) => c.id === coin.id)
          ? prev.filter((c) => c.id !== coin.id) // remove
          : [...prev, coin] // add
    );
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, toggleWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
