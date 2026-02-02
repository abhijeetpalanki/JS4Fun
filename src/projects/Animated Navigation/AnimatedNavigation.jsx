import { useState } from "react";
import {
  logo,
  HomeLogo,
  TeamLogo,
  CalendarLogo,
  DocumentsLogo,
  ProjectsLogo,
  PowerOffLogo,
} from "./assets";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <motion.h1
      initial={{ y: 500 }}
      animate={{ y: 0, transition: { duration: 0.5, type: "spring" } }}
      exit={{
        y: -500,
        transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
      }}
      className="text-6xl font-bold"
    >
      Home
    </motion.h1>
  );
};

const Team = () => {
  return (
    <motion.h1
      initial={{ y: 500 }}
      animate={{ y: 0, transition: { duration: 0.5, type: "spring" } }}
      exit={{
        y: -500,
        transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
      }}
      className="text-6xl font-bold"
    >
      Team
    </motion.h1>
  );
};

const Calendar = () => {
  return (
    <motion.h1
      initial={{ y: 500 }}
      animate={{ y: 0, transition: { duration: 0.5, type: "spring" } }}
      exit={{
        y: -500,
        transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
      }}
      className="text-6xl font-bold"
    >
      Calendar
    </motion.h1>
  );
};

const Documents = () => {
  return (
    <motion.h1
      initial={{ y: 500 }}
      animate={{ y: 0, transition: { duration: 0.5, type: "spring" } }}
      exit={{
        y: -500,
        transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
      }}
      className="text-6xl font-bold"
    >
      Documents
    </motion.h1>
  );
};

const Projects = () => {
  return (
    <motion.h1
      initial={{ y: 500 }}
      animate={{ y: 0, transition: { duration: 0.5, type: "spring" } }}
      exit={{
        y: -500,
        transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
      }}
      className="text-6xl font-bold"
    >
      Projects
    </motion.h1>
  );
};

const AnimatedNavigation = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);

  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const handleProfileClick = () => setIsProfileClicked(!isProfileClicked);
  const { projectId } = useParams();

  return (
    <div className="h-screen">
      <div className="fixed">
        <button
          className={`bg-[#09090c] border-none w-[2.5rem] h-[2.5rem] rounded-full my-[0.5rem] mx-1 flex justify-center items-center relative after:transition-all after:duration-[0.3s] after:content-[''] after:absolute after:bg-white after:h-[2px] after:w-[1rem] before:content-[''] before:bg-white before:h-[2px] before:w-[1rem] before:absolute before:transition-all before:duration-[0.3s] ${
            isClicked
              ? "before:top-[1.2rem] before:rotate-[135deg] after:-rotate-[135deg] after:top-[1.2rem]"
              : "before:top-[1rem] before:rotate-[0deg] after:rotate-[0deg] after:top-[1.5rem]"
          }`}
          onClick={handleClick}
        ></button>
        <div className="bg-[#09090c] w-[3.5rem] h-[80vh] mt-4 rounded-[0_30px_30px_0] py-4 px-0 flex flex-col items-center justify-between relative">
          <div className="w-8">
            <img
              src={logo}
              alt="logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <ul
            className={`text-white list-none flex flex-col items-center bg-[#09090c] py-8 px-0 absolute top-24 left-0 transition-all duration-[0.5s] rounded-[0_30px_30px_0] ${
              isClicked ? "w-48" : "w-14"
            }`}
          >
            <NavLink
              to={`/projects/${projectId}/`}
              style={({ isActive }) => {
                return { borderRight: isActive ? "4px solid white" : "" };
              }}
              className="flex w-full px-0 py-4 pl-4 cursor-pointer hover:border-r-4 hover:border-r-white"
              onClick={() => setIsClicked(false)}
            >
              <img
                src={HomeLogo}
                alt="Home"
                className="w-[1.2rem] h-auto invert-[92%] sepia-[4%] saturate-[1033%] hue-rotate-[169deg] brightness-[78%] contrast-[85%] hover:invert-[100%] hover:sepia-[0%] hover:saturate-[0%] hover:hue-rotate-[93deg] hover:brightness-[103%] hover:contrast-[103%]"
                loading="lazy"
              />
              <span
                className={`overflow-hidden transition-all ${
                  isClicked ? "w-full ml-6" : "w-0 ml-0"
                }`}
              >
                Home
              </span>
            </NavLink>
            <NavLink
              to={`/projects/${projectId}/team`}
              style={({ isActive }) => {
                return { borderRight: isActive ? "4px solid white" : "" };
              }}
              className="flex w-full px-0 py-4 pl-4 cursor-pointer hover:border-r-4 hover:border-r-white"
              onClick={() => setIsClicked(false)}
            >
              <img
                src={TeamLogo}
                alt="Team"
                className="w-[1.2rem] h-auto invert-[92%] sepia-[4%] saturate-[1033%] hue-rotate-[169deg] brightness-[78%] contrast-[85%]  hover:invert-[100%] hover:sepia-[0%] hover:saturate-[0%] hover:hue-rotate-[93deg] hover:brightness-[103%] hover:contrast-[103%]"
                loading="lazy"
              />
              <span
                className={`overflow-hidden transition-all ${
                  isClicked ? "w-full ml-6" : "w-0 ml-0"
                }`}
              >
                Team
              </span>
            </NavLink>
            <NavLink
              to={`/projects/${projectId}/calendar`}
              style={({ isActive }) => {
                return { borderRight: isActive ? "4px solid white" : "" };
              }}
              className="flex w-full px-0 py-4 pl-4 cursor-pointer hover:border-r-4 hover:border-r-white"
              onClick={() => setIsClicked(false)}
            >
              <img
                src={CalendarLogo}
                alt="Calendar"
                className="w-[1.2rem] h-auto invert-[92%] sepia-[4%] saturate-[1033%] hue-rotate-[169deg] brightness-[78%] contrast-[85%]  hover:invert-[100%] hover:sepia-[0%] hover:saturate-[0%] hover:hue-rotate-[93deg] hover:brightness-[103%] hover:contrast-[103%]"
                loading="lazy"
              />
              <span
                className={`overflow-hidden transition-all ${
                  isClicked ? "w-full ml-6" : "w-0 ml-0"
                }`}
              >
                Calendar
              </span>
            </NavLink>
            <NavLink
              to={`/projects/${projectId}/documents`}
              style={({ isActive }) => {
                return { borderRight: isActive ? "4px solid white" : "" };
              }}
              className="flex w-full px-0 py-4 pl-4 cursor-pointer hover:border-r-4 hover:border-r-white"
              onClick={() => setIsClicked(false)}
            >
              <img
                src={DocumentsLogo}
                alt="Documents"
                className="w-[1.2rem] h-auto invert-[92%] sepia-[4%] saturate-[1033%] hue-rotate-[169deg] brightness-[78%] contrast-[85%]  hover:invert-[100%] hover:sepia-[0%] hover:saturate-[0%] hover:hue-rotate-[93deg] hover:brightness-[103%] hover:contrast-[103%]"
                loading="lazy"
              />
              <span
                className={`overflow-hidden transition-all ${
                  isClicked ? "w-full ml-6" : "w-0 ml-0"
                }`}
              >
                Documents
              </span>
            </NavLink>
            <NavLink
              to={`/projects/${projectId}/projects`}
              style={({ isActive }) => {
                return { borderRight: isActive ? "4px solid white" : "" };
              }}
              className="flex w-full px-0 py-4 pl-4 cursor-pointer hover:border-r-4 hover:border-r-white"
              onClick={() => setIsClicked(false)}
            >
              <img
                src={ProjectsLogo}
                alt="Projects"
                className="w-[1.2rem] h-auto invert-[92%] sepia-[4%] saturate-[1033%] hue-rotate-[169deg] brightness-[78%] contrast-[85%]  hover:invert-[100%] hover:sepia-[0%] hover:saturate-[0%] hover:hue-rotate-[93deg] hover:brightness-[103%] hover:contrast-[103%]"
                loading="lazy"
              />
              <span
                className={`overflow-hidden transition-all ${
                  isClicked ? "w-full ml-6" : "w-0 ml-0"
                }`}
              >
                Projects
              </span>
            </NavLink>
          </ul>

          <div
            className={`h-24 py-2 px-4 flex items-center justify-center bg-[#09090c] text-white transition-all duration-[0.3s] rounded-full ${
              isProfileClicked ? "w-72 ml-36" : "w-12 ml-0"
            }`}
          >
            <img
              src="/logo.png"
              alt="Profile Pic"
              onClick={handleProfileClick}
              className="max-w-[2.5rem] h-10 rounded-full hover:border-2 hover:border-[#a4b2bc] hover:p-[2px]"
              loading="lazy"
            />
            <div
              className={`${
                isProfileClicked ? "flex" : "hidden"
              } justify-between items-center`}
            >
              <div className="flex flex-col items-center justify-center px-6 py-0">
                <h4 className="inline-block">John Doe</h4>
                <a
                  href="https://github.com/abhijeetpalanki"
                  className="text-[0.8rem] text-[#a4b2bc] hover:underline"
                >
                  view profile
                </a>
              </div>

              <button className="w-8 h-8 bg-transparent border-none">
                <img
                  src={PowerOffLogo}
                  alt="logout"
                  className="w-full h-auto invert-[15%] sepia-[70%] saturate-[6573%] hue-rotate-[2deg] brightness-[100%] contrast-[126%] transition-all duration-[0.3s] hover:border-none hover:p-0 hover:opacity-[0.5] hover:invert-[100%] hover:sepia-[0%] hover:saturate-[0%] hover:hue-rotate-[93deg] hover:brightness-[103%] hover:contrast-[103%]"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-screen h-screen">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedNavigation;
