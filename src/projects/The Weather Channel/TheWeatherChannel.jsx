import { useState } from "react";

const TheWeatherChannel = () => {
  const [cityInput, setCityInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`;
    await fetch(url)
      .then((resp) => {
        if (resp.status >= 400 && resp.status < 600) {
          throw new Error("Bad response from server");
        }
        return resp.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error.message);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-bl from-[#62b8f5] to-[#4475ef]">
      <div className="text-[14px] md:text-[16px] w-[90vw] max-w-[28em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm">
        <div className="absolute bg-white/25 backdrop-blur-[1.2em] border-[2px] border-white/10 rounded-full h-[13em] w-[13em] -right-[1em] md:-right-[6.5em] top-[1.8em]"></div>
        <div className="absolute bg-white/25 backdrop-blur-[1.2em] border-[2px] border-white/10 rounded-full h-[11em] w-[11em] -bottom-[3.7em] -left-[2.5em]"></div>
        <div className="w-full bg-white/10 py-[3em] px-[1.8em] border-[2px] border-white/10 backdrop-blur-[10px] rounded-[0.6em] shadow-[0_1.8em_3.7em_#032e5733] text-center">
          <div className="text-[1em] grid grid-cols-[9fr_3fr] gap-[1.25em]">
            <input
              className="outline-none text-[1em] p-[0.7em] bg-transparent border-b-[2px] border-b-white/25 text-white font-[300] placeholder:text-[#e5e5e5] focus:border-white"
              type="text"
              placeholder="Enter a city name"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
            />
            <button
              className="outline-none text-[1em] border-none text-[#4475ef] bg-white rounded-[0.3em]"
              onClick={getWeatherData}
            >
              Search
            </button>
          </div>
          <div id="result">
            {cityInput.length === 0 && (
              <h3 className="mt-[1.8em] text-white font-[500] uppercase tracking-[0.1em]">
                Please enter a city name
              </h3>
            )}

            {isError && cityInput.length !== 0 && (
              <h3 className="mt-[1.8em] text-white font-[500] uppercase tracking-[0.1em]">
                City not found
              </h3>
            )}

            {weatherData && (
              <div className="flex flex-col items-center justify-center mt-5">
                <h2 className="text-white uppercase tracking-[0.2em] text-[22px] font-[600] leading-[2em] my-[1.25em] mx-0">
                  {weatherData?.name}
                </h2>
                <h4 className="text-[#e5e5e5] uppercase tracking-[0.2em] text-[0.9em] font-[500] leading-[2em] -mt-[0.7em]">
                  {weatherData?.weather[0].main}
                </h4>
                <h4 className="text-[#e5e5e5] uppercase tracking-[0.2em] text-[0.9em] font-[500] leading-[2em]">
                  {weatherData?.weather[0].description}
                </h4>
                <img
                  src={`https://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`}
                  alt={weatherData?.name}
                  className="mt-[0.6em] w-[6.2em] drop-shadow-md"
                />
                <h1 className="text-[4em] mt-[0.3em] mb-[0.7em] mx-0 font-[400] text-white">
                  {weatherData?.main.temp} &#176;
                </h1>
                <div className="flex justify-center">
                  <div className="py-[0.3em] px-[1em] border-r-[1px] border-r-white/25">
                    <h4 className="title font-[600] text-white">min</h4>
                    <h4 className="temp font-[300] text-[#e5e5e5]">
                      {weatherData?.main.temp_min}
                    </h4>
                  </div>
                  <div className="py-[0.3em] px-[1em]">
                    <h4 className="title font-[600] text-white">max</h4>
                    <h4 className="temp font-[300] text-[#e5e5e5]">
                      {weatherData?.main.temp_max}
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheWeatherChannel;
