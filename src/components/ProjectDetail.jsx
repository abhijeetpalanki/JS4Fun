import { Link, useParams } from "react-router-dom";
import { useProjectsContext } from "../context/ProjectsContextProvider";
import Error from "./Error";
import { ErrorBoundary } from "react-error-boundary";

const ProjectDetail = () => {
  const { results: projects } = useProjectsContext();
  const { projectId } = useParams();

  const findProject = projects.find(
    (project) => parseInt(project.id, 10) === parseInt(projectId, 10)
  );

  return (
    <>
      {findProject ? (
        <div key={findProject?.id}>
          <ErrorBoundary
            onError={(error) => error.message}
            fallback={
              <div className="flex flex-col items-center justify-center text-3xl font-bold text-red-500">
                Something Went Wrong! Refresh the page to try again.
              </div>
            }
          >
            {findProject?.component}
          </ErrorBoundary>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default ProjectDetail;
