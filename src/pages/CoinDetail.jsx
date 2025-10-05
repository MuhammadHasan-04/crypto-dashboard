import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';
import { getCoinDetail, getCoinMarketChart } from '../services/coinServices';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CoinDetail() {
  const { id } = useParams();

  const { data: coin, loading, error } = useFetch(() => getCoinDetail(id));

  const {
    data: marketChart,
    loading: chartLoading,
    error: chartError,
  } = useFetch(() => getCoinMarketChart(id, 7));

  if (loading || chartLoading) return <Loader />;
  if (error || chartError)
    return (
      <p className="text-center mt-10 text-red-500">Error fetching coin data</p>
    );
  if (!coin)
    return <p className="text-center mt-10 text-red-500">Coin not found</p>;

  const chartData = {
    labels: marketChart?.prices.map((p) => new Date(p[0]).toLocaleDateString()),
    datasets: [
      {
        label: `${coin.name} Price (USD)`,
        data: marketChart?.prices.map((p) => p[1]),
        borderColor: 'rgb(234, 179, 8)', // yellow line
        backgroundColor: 'rgba(234, 179, 8, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-500 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow md:col-span-2 transition-colors duration-500">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={coin.image?.large}
              alt={coin.name}
              className="w-16 h-16"
            />
            <h1 className="text-2xl font-bold">
              {coin.name} ({coin.symbol.toUpperCase()})
            </h1>
          </div>

          <Line data={chartData} />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow md:col-span-1 transition-colors duration-500">
          <h2 className="text-2xl font-bold text-center mb-6 border-b pb-2 font-sans tracking-wide">
            Key Statistics
          </h2>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 font-medium text-base">
            <div className="pb-2 border-b">
              Current Price:{' '}
              <span className="font-semibold">
                ${coin.market_data?.current_price?.usd}
              </span>
            </div>
            <div className="pb-2 border-b">
              Market Cap:{' '}
              <span className="font-semibold">
                ${coin.market_data?.market_cap?.usd}
              </span>
            </div>
            <div className="pb-2 border-b">
              24h High:{' '}
              <span className="font-semibold">
                ${coin.market_data?.high_24h?.usd}
              </span>
            </div>
            <div className="pb-2 border-b">
              24h Low:{' '}
              <span className="font-semibold">
                ${coin.market_data?.low_24h?.usd}
              </span>
            </div>
            <div className="pb-2">
              24h Change:{' '}
              <span
                className={`font-semibold ${
                  coin.market_data?.price_change_percentage_24h > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {coin.market_data?.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
