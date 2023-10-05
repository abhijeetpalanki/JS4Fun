import { useState, useEffect } from "react";

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
      console.log(error.message);
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
    <div className="flex flex-col h-screen overflow-hidden">
      <nav className="w-full bg-[#333] py-5 px-0 flex items-center justify-center">
        <div className="mx-auto my-0">
          <form onSubmit={searchScreenshots}>
            <input
              autoFocus
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-black border-none outline-none py-0 px-[10px] h-[34px]"
            />
            <button
              type="submit"
              className="bg-[#5486e0] text-white cursor-pointer border-none outline-none py-0 px-[10px] h-[34px]"
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
                  className="object-contain w-full h-full lg:max-h-[500px]"
                />
              </a>
            )}
          </div>
        ) : !error && loading ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[10px] bg-[#3498db] rounded-md animate-spinner before:absolute before:content-[''] before:animate-spinner before:h-[10px] before:rounded-[5px] before:left-[10px] before:-top-[20px] before:w-10 before:bg-[#ef4836] after:absolute after:content-[''] after:animate-spinner after:h-[10px] after:rounded-[5px] after:-bottom-[20px] after:w-[35px] after:bg-[#f5ab35]"></div>
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
