//made for the personal testing of the card design

import CoinCard from '../components/CoinCard';
import React from 'react';

const mockCoin = {
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  image:
    'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
  current_price: 120078,
  market_cap: 2395003898153,
  market_cap_rank: 1,
  total_volume: 69079703471,
  high_24h: 120221,
  low_24h: 116853,
  price_change_24h: 2314.34,
  price_change_percentage_24h: 1.96523,
  circulating_supply: 19928203,
  total_supply: 19928203,
  max_supply: 21000000,
  ath: 124128,
  ath_change_percentage: -3.20183,
  ath_date: '2025-08-14T00:37:02.582Z',
  atl: 67.81,
  atl_change_percentage: 177094.28703,
  atl_date: '2013-07-06T00:00:00.000Z',
  last_updated: '2025-10-02T16:23:08.210Z',
};

export default function TestPage() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CoinCard coin={mockCoin} />
    </div>
  );
}
