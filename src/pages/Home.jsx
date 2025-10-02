import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import CoinCard from "../components/CoinCard";

export default function Home() {
  const { data: coins, loading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20"
  );

  if (loading) return <Loader />;
  if (error) return <p className="text-center mt-10 text-red-500">Error Fetching Data</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Top Cryptocurrencies</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {coins && coins.length > 0 ? (
          coins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
        ) : (
          <p>No coins available</p>
        )}
      </div>
    </div>
  );
}
