import React, { useState, useEffect } from "react";

const Screenshot = () => {
  const [search, setSearch] = useState("https://github.com/abhijeetpalanki");
  const [img, setImg] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const URL = `https://api.apiflash.com/v1/urltoimage?access_key=${process.env.REACT_APP_SCREENSHOT_KEY}&url=${search}&full_page="true"&fresh="true"`;

  const getScreenshots = async () => {
    setSearch("");
    setError(false);
    setLoading(true);

    const response = await fetch(URL);
    if (response.ok) {
      setImg(response);
      setLoading(false);
    } else {
      setError(true);
    }
  };

  const searchScreenshots = (e) => {
    e.preventDefault();
    getScreenshots();
  };

  useEffect(() => {
    setSearch("");
    getScreenshots();
  }, []);

  return (
    <div className="flex flex-col">
      <nav className="w-full bg-[#333] py-5 px-0">
        <div className="w-[1400px] my-0 mx-auto">
          <form className="h-[34px] ml-5" onSubmit={searchScreenshots}>
            <input
              autoFocus
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" border-none outline-none py-0 px-[10px] h-full"
            />
            <button
              type="submit"
              className="bg-[#5486e0] text-white cursor-pointer border-none outline-none py-0 px-[10px] h-full"
            >
              Take screenshot
            </button>
          </form>
        </div>
      </nav>

      <div className="w-full py-[30px] px-[10px] h-[calc(100vh-74px)] relative">
        {!loading && !error ? (
          <div className="">
            {img && (
              <a href={img.url} target="_blank" rel="noreferrer">
                <img
                  src={img.url}
                  alt="background"
                  className="object-contain w-full h-full lg:h-[800px]"
                />
              </a>
            )}
          </div>
        ) : !error && loading ? (
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[50px] h-[10px] bg-[#3498db] rounded-md animate-[spinner_1.8s_ease-in-out_infinite] spinner"></div>
        ) : error ? (
          <div className="">
            <h2 className="text-red-500 text-[30px] leading-4">
              Please enter a valid URL
            </h2>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Screenshot;
