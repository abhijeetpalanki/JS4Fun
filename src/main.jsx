import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProjectsContextProvider } from "./context/ProjectsContextProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProjectsContextProvider>
      <App />
    </ProjectsContextProvider>
  </BrowserRouter>,
);
