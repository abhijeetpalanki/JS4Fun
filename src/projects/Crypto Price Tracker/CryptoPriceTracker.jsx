import { useState, useEffect } from "react";
import axios from "axios";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const CryptoPriceTracker = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-[#1a1a1c] text-white">
      <div className="flex flex-col items-center pt-16">
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="mb-8 text-3xl text-center">Search a currency</h1>
          <form>
            <input
              type="text"
              className="pl-4 w-75 h-12.5 rounded-md border-none bg-[linear-gradient(-225deg,#ac32e4_0%,#7910f2_48%,#4a01ff_100%)] text-[#e2e2e2] placeholder:text-[#e2e2e2]"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>
        </div>
        {/* Coin Container */}
        {filteredCoins.map((coin) => (
          <div key={coin.id} className="flex justify-center">
            {/* Coin Row */}
            <div className="flex flex-row justify-start items-center h-20 border-b-[#d7d7d7] w-225">
              {/* Coin */}
              <div className="flex items-center pr-6 min-w-75">
                <img
                  className="h-7.5 w-7.5 mr-2.5"
                  src={coin.image}
                  alt={coin.name}
                />
                <h1 className="text-base w-37.5">{coin.name}</h1>
                <p className="uppercase">{coin.symbol}</p>
              </div>
              {/* Coin Data */}
              <div className="flex justify-between w-full text-center">
                <p className="w-27.5">${coin.current_price}</p>
                <p className="w-50">${coin.total_volume.toLocaleString()}</p>
                {coin.price_change_percentage_24h < 0 ? (
                  <p className="w-20 text-[#f00606]">
                    {(
                      Math.round(coin.price_change_percentage_24h * 100) / 100
                    ).toFixed(2)}
                    %
                  </p>
                ) : (
                  <p className="w-20 text-[#11d811]">
                    {(
                      Math.round(coin.price_change_percentage_24h * 100) / 100
                    ).toFixed(2)}
                    %
                  </p>
                )}
                <p className="w-60">
                  MKT Cap: ${coin.market_cap.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPriceTracker;
