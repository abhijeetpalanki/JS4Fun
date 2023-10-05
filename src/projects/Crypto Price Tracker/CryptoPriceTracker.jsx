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
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#1a1a1c] text-white">
      <div className="flex flex-col items-center pt-16">
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="mb-8 text-3xl text-center">Search a currency</h1>
          <form>
            <input
              type="text"
              className="pl-4 w-[300px] h-[50px] rounded-md border-none bg-[linear-gradient(-225deg,#ac32e4_0%,#7910f2_48%,#4a01ff_100%)] text-[#e2e2e2] placeholder:text-[#e2e2e2]"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>
        </div>
        {/* Coin Container */}
        {filteredCoins.map((coin) => (
          <div key={coin.id} className="flex justify-center">
            {/* Coin Row */}
            <div className="flex flex-row justify-start items-center h-[80px] border-b-[#d7d7d7] w-[900px]">
              {/* Coin */}
              <div className="flex items-center pr-6 min-w-[300px]">
                <img
                  className="h-[30px] w-[30px] mr-[10px]"
                  src={coin.image}
                  alt={coin.name}
                />
                <h1 className="text-base w-[150px]">{coin.name}</h1>
                <p className="uppercase">{coin.symbol}</p>
              </div>
              {/* Coin Data */}
              <div className="flex justify-between w-full text-center">
                <p className="w-[110px]">${coin.current_price}</p>
                <p className="w-[200px]">
                  ${coin.total_volume.toLocaleString()}
                </p>
                {coin.price_change_percentage_24h < 0 ? (
                  <p className="w-[80px] text-[#f00606]">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : (
                  <p className="w-[80px] text-[#11d811]">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                )}
                <p className="w-[240px]">
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
