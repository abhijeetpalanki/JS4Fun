import { Routes, Route, Navigate } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import Projects from "./Projects";
import Error from "./Error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/projects" />}></Route>
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId/*" element={<ProjectDetail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
