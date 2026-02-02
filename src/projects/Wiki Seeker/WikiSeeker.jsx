import { useState } from "react";

const WikiSeeker = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();

    if (search === "") return;

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

    const response = await fetch(endpoint);
    if (!response.ok) {
      console.log(response.statusText);
      throw Error(response.statusText);
    }

    const json = await response.json();
    setResults(json.query.search);
    setSearchInfo(json.query.searchinfo);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-[#888] text-[30px] md:text-[42px] uppercase text-center mb-4">
          Wiki Seeker
        </h1>
        <form
          className="flex items-center justify-center rounded-2xl overflow-hidden w-60 md:w-120 max-w-120 mb-4 duration-[0.4s] focus-within:shadow-[3px_3px_6px_#00000033]"
          onSubmit={handleSearch}
        >
          <input
            type="search"
            placeholder="What are you looking for?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block text-black appearance-none outline-none border-none p-4 w-full duration-[0.4s]"
          />
        </form>
        {searchInfo.totalhits ? (
          <p>Search Results: {searchInfo.totalhits}</p>
        ) : (
          ""
        )}
      </header>

      <div className="max-w-3xl w-100 md:w-3xl my-0 mx-auto">
        {results.map((result, index) => {
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

          return (
            <div
              key={index}
              className="w-full p-4 mb-4 bg-white rounded-2xl duration-[0.4s] hover:shadow-[3px_3px_6px_#00000033]"
            >
              <h3 className="text-[#aaa] text-[28px] mb-4">{result.title}</h3>
              <p
                className="text-[#313131] text-lg mb-4"
                dangerouslySetInnerHTML={{ __html: result.snippet }}
              ></p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-block py-3 px-4 bg-[#a84fff] text-white font-bold no-underline rounded-xl duration-[0.4s] hover:bg-[#ff4fa8]"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WikiSeeker;
