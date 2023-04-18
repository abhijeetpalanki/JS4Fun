import { createContext, useContext, useEffect, useState } from "react";
import { projects } from "./../data/projects";

const ProjectsContext = createContext();

export const ProjectsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    setResults(projects);

    let tags = [];
    projects.forEach((project) => {
      project.hashtags.map((tag) => tags.push(tag.name));
    });
    tags.unshift("all");
    setHashtags([...new Set(tags)]);
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        results,
        hashtags,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);
