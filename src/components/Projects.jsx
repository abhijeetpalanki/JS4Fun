import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import autoAnimate from "@formkit/auto-animate";
import { Link } from "react-router-dom";
import { useProjectsContext } from "../context/ProjectsContextProvider";
import Navbar from "./Navbar";
import ReactPaginate from "react-paginate";

const Projects = () => {
  const { results: projects } = useProjectsContext();
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage] = useState(10);
  const parent = useRef(null);

  // Get current posts
  const pagesVisited = currentPage * projectsPerPage;
  const currentProjects = projects.slice(
    pagesVisited,
    pagesVisited + projectsPerPage
  );
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <>
      <Navbar />
      <div
        className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        ref={parent}
      >
        {currentProjects.map((proj) => (
          <Link to={`/projects/${proj.id}`} key={proj.id}>
            <div className="flex flex-col items-center bg-white border rounded-lg shadow-md h-[200px] max-h-[200px] md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {proj.title}
                </h5>
                <div className="px-6 pt-4 pb-2">
                  {proj.hashtags.map((tag) => (
                    <span
                      className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
                      key={tag.id}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};

export default Projects;
