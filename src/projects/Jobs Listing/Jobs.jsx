import { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords }) => {
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
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
    modifiedData();
  }, [data, keywords]);

  return (
    <div className="flex flex-col items-center mt-[calc(2vw+2rem)]">
      {filteredData.map((d) => {
        return <Job key={d.id} data={d} setkeywords={setKeywords} />;
      })}
    </div>
  );
};

export default Jobs;
