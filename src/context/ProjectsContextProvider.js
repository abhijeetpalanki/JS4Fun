import { createContext, useContext, useEffect, useState } from "react";
import { projects } from "./../data/projects";

const ProjectsContext = createContext();

export const ProjectsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(projects);
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        results,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);
