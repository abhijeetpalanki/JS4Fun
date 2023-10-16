import { AnimatePresence } from "framer-motion";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const PageTransitions = () => {
  return (
    <div className="h-screen bg-[#c6d5c6]">
      <NavBar />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const NavBar = () => {
  const { projectId } = useParams();

  return (
    <div className="fixed flex justify-between w-full">
      <div className="m-8 font-semibold text-[1.5vw]">
        <NavLink className="nav-link" to={`/projects/${projectId}/`}>
          Page Transitions
        </NavLink>
      </div>
      <div className="flex">
        <div className="m-8 font-semibold text-[1.5vw]">
          <NavLink className="nav-link" to={`/projects/${projectId}/`}>
            Home
          </NavLink>
        </div>
        <div className="m-8 font-semibold text-[1.5vw]">
          <NavLink className="nav-link" to={`/projects/${projectId}/about`}>
            About
          </NavLink>
        </div>
        <div className="m-8 font-semibold text-[1.5vw]">
          <NavLink className="nav-link" to={`/projects/${projectId}/contact`}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PageTransitions;
