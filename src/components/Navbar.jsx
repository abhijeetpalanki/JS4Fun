import { Link } from "react-router-dom";
import fun from "../images/fun.jpeg";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center p-5 pb-2 border-b border-gray-200 sm:justify-center">
        <div className="flex flex-col items-center justify-between w-screen space-x-0 md:space-x-5 md:flex-row">
          <Link
            to="/"
            className="flex items-center mr-1 text-gray-900 md:justify-center hover:text-gray-900 focus:text-gray-900 lg:mt-0"
          >
            <p className="px-2 py-2 text-2xl font-bold text-white bg-blue-500 dark:bg-black dark:text-white font-['Caveat'] tracking-widest">
              PROJECTS
            </p>
            <img
              src={fun}
              style={{ height: "48px" }}
              alt="js4fun"
              loading="lazy"
            />
          </Link>
          <input
            type="text"
            className="px-1 py-2 mt-2 w-full md:mt-0 text-2xl text-black border-none rounded outline-none font-['Caveat'] tracking-widest bg-[linear-gradient(#facc15,#ef4444)] placeholder:text-gray-600"
            placeholder="Search Projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
