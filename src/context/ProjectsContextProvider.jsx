import { createContext, useContext, useEffect, useState } from "react";
import { projects } from "../data/projects";

const ProjectsContext = createContext();

export const ProjectsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setResults(projects);

    let tags = [];
    let tabs = [];
    projects.forEach((project) => {
      project.hashtags.map((tag) => tags.push(tag.name));
      tabs.push(project.tab);
    });
    tags.unshift("all");
    tabs.unshift("all");
    setHashtags([...new Set(tags)]);
    setTabs([...new Set(tabs)]);
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        results,
        hashtags,
        tabs,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);
