import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';
import CoinCard from '../components/CoinCard';
import React from 'react';
import { getCoins } from '../services/coinServices';

export default function Home() {
  const {
    data: coins,
    loading,
    error,
  } = useFetch(()=>getCoins());

  if (loading) return <Loader />;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Error Fetching Data</p>
    );

  return (
    <>
      <div className="mt-20 p-6">
        <h1 className="text-2xl font-bold mb-12 text-center">
          Top Crypto-Currencies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {coins && coins.length > 0 ? (
            coins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          ) : (
            <p>No coins available</p>
          )}
        </div>
      </div>
    </>
  );
}
