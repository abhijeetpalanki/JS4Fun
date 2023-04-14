import { useEffect, useState } from "react";

const Detail = ({ sign, timeframe }) => {
  const [horoscopeObj, setHoroscopeObj] = useState({});
  let date;
  const today = new Date().getDate();
  const yesterday = new Date(new Date()).getDate() - 1;
  const tomorrow = new Date(new Date()).getDate() + 1;

  if (timeframe === "today") {
    date = today;
  } else if (timeframe === "yesterday") {
    date = yesterday;
  } else if (timeframe === "tomorrow") {
    date = tomorrow;
  }

  const getHoroscope = async (sign, timeframe) => {
    const response = await fetch(
      `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}`
    );
    return await response.json();
  };

  useEffect(() => {
    getHoroscope(sign, timeframe).then((data) => setHoroscopeObj(data));
  }, [sign, timeframe]);

  return (
    <div className="p-[10px] w-[350px] md:w-[500px]">
      <h2 className="text-[20px] font-bold">
        {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}: {date}, your
        horoscope for {sign}:
      </h2>
      <p className="text-justify">{horoscopeObj.horoscope}</p>
    </div>
  );
};

export default Detail;
