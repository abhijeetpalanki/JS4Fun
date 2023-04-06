import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const WikiSeeker = () => {
  const { showBoundary } = useErrorBoundary();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();

    if (search === "") return;

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

    const response = await fetch(endpoint);
    if (!response.ok) {
      showBoundary(response.statusText);
      throw Error(response.statusText);
    }

    const json = await response.json();
    setResults(json.query.search);
    setSearchInfo(json.query.searchinfo);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-['Fira_Sans'] bg-black">
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-[#888] text-[42px] uppercase text-center mb-4">
          Wiki Seeker
        </h1>
        <form
          className="flex items-center justify-center rounded-2xl overflow-hidden w-[480px] max-w-[480px] mb-4 duration-[0.4s] focus-within:shadow-[3px_3px_6px_rgba(0,0,0,0.2)]"
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

      <div className="max-w-[768px] w-[768px] my-0 mx-auto">
        {results.map((result, index) => {
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

          return (
            <div
              key={index}
              className="w-full p-4 mb-4 bg-white rounded-2xl duration-[0.4s] hover:shadow-[3px_3px_6px_rgba(0,0,0,0.2)]"
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
                className="inline-block py-3 px-4 bg-[#a84fff] text-white font-[700] no-underline rounded-xl duration-[0.4s] hover:bg-[#ff4fa8]"
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
