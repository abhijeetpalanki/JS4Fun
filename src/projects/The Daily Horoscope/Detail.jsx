import React, { useEffect, useState } from "react";
import { useProjectsContext } from "../../context/ProjectsContextProvider";

const Detail = ({ sign, timeframe }) => {
  const { getHoroscope } = useProjectsContext();
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

  useEffect(() => {
    getHoroscope(sign, timeframe).then((data) => setHoroscopeObj(data));
  }, [sign, timeframe]);

  return (
    <div className="detail p-[10px]">
      <h2 className="text-[20px] font-bold">
        {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}: {date}, your
        horoscope for {sign}:
      </h2>
      <p className="text-justify">{horoscopeObj.horoscope}</p>
    </div>
  );
};

export default Detail;
