import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProjectsContextProvider } from "./context/ProjectsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProjectsContextProvider>
      <App />
    </ProjectsContextProvider>
  </BrowserRouter>
);
