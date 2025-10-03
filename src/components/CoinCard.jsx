import { Link } from "react-router-dom";
import { WatchlistContext } from "../context/WatchlistContext";
import { useContext } from "react";
import React from "react";


export default function CoinCard({ coin }) {
  const { watchlist, toggleWatchlist } = useContext(WatchlistContext);

  if (!coin) {
    return <div className="p-4 text-red-500">Invalid coin data</div>;
  }

  const containedInWatchList =
    watchlist?.some((c) => c.id === coin.id) || false;

    const handleWatchList=(e)=>{
        e.preventDefault();
        toggleWatchlist(coin)
    }
  return (
    <>
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4">
      <Link to={`/coin/${coin.id}`} className="flex items-center space-x-3">
        <img src={coin.image} alt={coin.name} className="w-10 h-10" />
        <div>
          <h2 className="font-semibold text-lg dark:text-white">{coin.name}</h2>
          <p className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</p>
          <p className="mt-3 text-xl font-bold">${coin.current_price.toLocaleString()}</p>
        </div>
      </Link>
    <p className={ `mt-1 font-bold ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"} `}>  {coin.price_change_percentage_24h?.toFixed(2)}%</p>
    <button onClick={handleWatchList}  className={`w-24 h-10 mt-1 rounded-2xl text-xs text-white ${
  containedInWatchList ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
}`}
>{containedInWatchList ? "Remove from WatchList" : "Add to WatchList"}
</button>
     
    </div>



    </>
  );
}
