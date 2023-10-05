import { useEffect, useRef, useState } from "react";
import "../App.css";
import autoAnimate from "@formkit/auto-animate";
import { Link } from "react-router-dom";
import { useProjectsContext } from "../context/ProjectsContextProvider";
import Navbar from "./Navbar";

const Projects = () => {
  const { results: projects, hashtags } = useProjectsContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const parent = useRef(null);

  const search_parameters = Object.keys(Object.assign({}, ...projects));
  const search = (data) => {
    var retval = data.filter((item) =>
      searchTerm !== ""
        ? search_parameters.some((parameter) =>
            item[parameter].toString().toLowerCase().includes(searchTerm)
          )
        : activeTag !== "all"
        ? item.hashtags.find((hashtag) => hashtag.name === activeTag)
        : search_parameters.flat()
    );
    return retval;
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        hashtags={hashtags}
      />
      <div
        className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        ref={parent}
      >
        {search(projects).map((proj) => (
          <Link to={`/projects/${proj.id}`} key={proj.id}>
            <div className="flex flex-col tracking-widest items-center border rounded-lg shadow-md h-[200px] max-h-[200px] md:flex-row md:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold text-white">
                  {proj.id}. {proj.title}
                </h5>
                <div className="px-6 pt-4 pb-2">
                  {proj.hashtags.map((tag) => (
                    <span
                      className="inline-block px-3 py-1 mb-2 mr-2 text-base font-semibold text-gray-700 bg-gray-200 rounded-full"
                      key={tag.id}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;
