import { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords }) => {
  // console.log(data);
  const [filteredData, setfilteredData] = useState([]);

  const modifiedData = () => {
    if (keywords) {
      const newData = data.filter((d) => {
        return keywords.every((key) => {
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

  useEffect(() => {
    modifiedData();
  }, [keywords]);

  return (
    <div className="flex flex-col items-center mt-[calc(2vw+2rem)]">
      {filteredData.map((d) => {
        return <Job key={d.id} data={d} setkeywords={setKeywords} />;
      })}
    </div>
  );
};

export default Jobs;
