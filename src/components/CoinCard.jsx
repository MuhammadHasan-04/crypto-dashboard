import { Link } from "react-router-dom";
import { WatchlistContext } from "../context/WatchlistContext";
import { useContext } from "react";
import React from "react";

export default function CoinCard({ coin }) {
  const { watchlist, toggleWatchlist } = useContext(WatchlistContext);

  if (!coin) {
    return <div className="p-4 text-red-500">Invalid coin data</div>;
  }

  const containedInWatchList = watchlist?.some((c) => c.id === coin.id) || false;

  const handleWatchList = (e) => {
    e.preventDefault();
    toggleWatchlist(coin);
  };

  return (
    <div className="rounded-xl p-4 shadow-md border border-gray-200 bg-white text-gray-900 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 dark:bg-gray-800 dark:border-yellow-400 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:shadow-lg dark:hover:shadow-yellow-400/30">
      <Link to={`/coins/${coin.id}`} className="flex items-center space-x-3">
        <img src={coin.image} alt={coin.name} className="w-10 h-10" />
        <div>
          <h2 className="font-semibold text-lg">{coin.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {coin.symbol?.toUpperCase()}
          </p>
          <p className="mt-3 text-xl font-bold">
            ${coin.current_price?.toLocaleString() || "N/A"}
          </p>
        </div>
      </Link>

      <p className={`mt-1 font-bold ${ (coin.price_change_percentage_24h ?? 0) >= 0 ? "text-green-500" : "text-red-500"}`}>
        {coin.price_change_percentage_24h != null
          ? coin.price_change_percentage_24h.toFixed(2) + "%"
          : "N/A"}
      </p>


<button
  onClick={handleWatchList}
  className="mt-2 rounded-2xl text-xs font-semibold px-4 py-2 transition-all duration-300 
             border-2 border-yellow-400 text-yellow-400 
             hover:bg-yellow-400 hover:text-white shadow-md dark:hover:bg-yellow-500 dark:hover:text-white"
>
  {containedInWatchList ? "Remove from WatchList" : "Add to WatchList"}
</button>


    </div>
  );
}
