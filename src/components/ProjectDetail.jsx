import { useParams } from "react-router-dom";
import { useProjectsContext } from "../context/ProjectsContextProvider";
import Error from "./Error";

const ProjectDetail = () => {
  const { results: projects } = useProjectsContext();
  const { projectId } = useParams();

  const findProject = projects.find(
    (project) => parseInt(project.id, 10) === parseInt(projectId, 10)
  );

  return (
    <>
      {findProject ? (
        <div key={findProject?.id}>{findProject?.component}</div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default ProjectDetail;
