import axios from "axios"

let baseUrl = "https://api.coingecko.com/api/v3";



export const getCoins = async () => {
  const res = await axios.get(`${baseUrl}/coins/markets`, {
    params: {
      vs_currency: "usd",
      per_page: 20,
    },
  });
  return res.data; 
};


export const getCoinDetail = async (id) => {
  const response = await axios.get(`${baseUrl}/coins/${id}`);
  return response.data;
};

export const getCoinMarketChart = async (id, days = 7) => {
  const response = await axios.get(`${baseUrl}/coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days,
    },
  });
  return response.data;
};