import React, { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import CoinCard from '../components/CoinCard';

export default function WatchList() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <>
      <div>
        <p className="font-bold text-2xl  mb-12 text-center">Your WatchList</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {watchlist.length === 0 ? (
            <p className="text-center dark:text-white">
              Your watchlist is empty
            </p>
          ) : (
            watchlist.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          )}
        </div>
      </div>
    </>
  );
}
