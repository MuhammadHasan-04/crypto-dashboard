---
# 🚀 React Crypto Dashboard

A responsive cryptocurrency dashboard built with **React**, **TailwindCSS**, and **React Router**, featuring real-time market data from the **CoinGecko API**, watchlist management with **Context + LocalStorage**, and interactive coin detail pages.
---

## 📌 Features

✅ Live market data from [CoinGecko API](https://www.coingecko.com/)
✅ Responsive design (mobile, tablet, desktop) with **TailwindCSS**
✅ Coin detail pages with price charts
✅ Watchlist support (saved in LocalStorage)
✅ Global state management with **React Context**
✅ Loading states & error handling
✅ Easy-to-extend modular structure

---

## 📂 Project Structure

```bash
crypto-dashboard/
 ┣ src/
 ┃ ┣ components/       # Reusable UI components
 ┃ ┃ ┣ Navbar.jsx
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┣ CoinCard.jsx
 ┃ ┃ ┣ Loader.jsx
 ┃ ┃ ┗ Chart.jsx
 ┃ ┣ pages/            # Application pages
 ┃ ┃ ┣ Home.jsx
 ┃ ┃ ┣ CoinDetail.jsx
 ┃ ┃ ┣ Watchlist.jsx
 ┃ ┃ ┗ About.jsx
 ┃ ┣ context/          # Context API
 ┃ ┃ ┗ WatchlistContext.jsx
 ┃ ┣ hooks/            # Custom hooks
 ┃ ┃ ┣ useFetch.js
 ┃ ┃ ┗ useLocalStorage.js
 ┃ ┣ utils/            # Helper functions
 ┃ ┃ ┗ formatters.js
 ┃ ┣ App.jsx           # Router setup
 ┃ ┣ main.jsx          # Entry point
 ┃ ┗ index.css         # Tailwind base styles
 ┣ tailwind.config.js
 ┣ package.json
 ┣ README.md
```

---

## ⚙️ Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/react-crypto-dashboard.git
   cd react-crypto-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open your browser at **[http://localhost:5173](http://localhost:5173)** 🎉

---

## 🌐 API Reference

This project uses the [CoinGecko API](https://www.coingecko.com/en/api).

- **Markets Data**:

  ```
  GET /coins/markets?vs_currency=usd&per_page=20
  ```

- **Coin Detail**:

  ```
  GET /coins/{id}
  ```

- **Coin Chart (7 days)**:

  ```
  GET /coins/{id}/market_chart?vs_currency=usd&days=7
  ```

---

---

## 🛠️ Tech Stack

- **React 18**
- **TailwindCSS**
- **React Router**
- **Axios** (for API calls)
- **Context API + LocalStorage** (for watchlist)
