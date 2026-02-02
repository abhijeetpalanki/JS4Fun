import { useEffect, useState } from "react";
import { data } from "./data";
import headerDesktop from "./images/bg-header-desktop.svg";
import close from "./images/icon-remove.svg";
import Jobs from "./Jobs";

const JobsListing = () => {
  const [filterKeywords, setFilterKeywords] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
    const modifiedData = () => {
      if (filterKeywords.length > 0) {
        const newData = filteredData.filter((d) => {
          return filterKeywords.every((key) => {
            return (
              d.role === key ||
              d.level === key ||
              d.languages.includes(key) ||
              d.tools.includes(key)
            );
          });
        });
        setfilteredData(newData);
      } else {
        setfilteredData(data);
      }
    };
    modifiedData();
  }, [filterKeywords, filteredData]);

  const addFilteredKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setFilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setFilterKeywords([]);
  };

  return (
    <div className="text-xs md:text-[15px] font-medium bg-[#effafa]">
      <div
        className="w-full h-40 bg-[#5ba4a4]"
        style={{ backgroundImage: `url(${headerDesktop})` }}
      ></div>

      {filterKeywords.length > 0 && (
        <div className="flex flex-col items-center mt-[calc(2vw-4rem)]">
          <ul className="relative w-[80vw] md:w-[70vw] bg-white flex flex-wrap md:flex-nowrap items-start md:items-center py-4 md:py-6 px-8 rounded-[5px] -mb-8 md:mb-0 my-[1.3rem] shadow-[0_4px_6px_4px_#5ba4a433]">
            {filterKeywords.map((key, id) => {
              return (
                <li
                  key={id}
                  className="flex items-center mb-2 md:mb-0 mr-4 last:mr-0 bg-[#effafa] text-[#5ba4a4] font-bold rounded-[5px] cursor-pointer pr-2"
                >
                  {key}
                  <button
                    className="bg-[#5ba4a4] hover:bg-[#2c3a3a] border-none rounded-tr-[5px] rounded-br-[5px] ml-2 transition-all duration-200"
                    onClick={() => deleteKeyword(key)}
                  >
                    <img src={close} alt="" className="p-2" />
                  </button>
                </li>
              );
            })}
            <button
              className="text-[#2c3a3a] absolute right-6 hover:text-[#5ba4a4] hover:underline"
              onClick={() => clearAll()}
            >
              Clear
            </button>
          </ul>
        </div>
      )}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilteredKeywords}
      />
    </div>
  );
};

export default JobsListing;
