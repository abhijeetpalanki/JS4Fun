import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

import { useProjectsContext } from "../context/ProjectsContextProvider";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import "../App.css";

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
            item[parameter].toString().toLowerCase().includes(searchTerm),
          )
        : activeTag !== "all"
          ? item.hashtags.find((hashtag) => hashtag.name === activeTag)
          : search_parameters.flat(),
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
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,113,223,0.15),transparent_70%)] pointer-events-none"></div>

        <div
          ref={parent}
          className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {search(projects).map((proj) => (
            <ProjectCard
              key={proj.id}
              title={proj.title}
              tags={proj.hashtags.map((t) => t.name)}
              slug={proj.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
