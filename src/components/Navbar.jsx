import { Link } from "react-router-dom";
import fun from "../images/fun.jpeg";
import useReadingProgressBar from "../hooks/useReadingProgressBar";

const Navbar = ({
  searchTerm,
  setSearchTerm,
  activeTag,
  setActiveTag,
  hashtags,
}) => {
  const completion = useReadingProgressBar();

  return (
    <>
      <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center p-5 pb-2 text-white bg-black sm:justify-center">
        <div className="flex flex-col items-center justify-between w-screen space-x-0 md:space-x-5 md:flex-row">
          <Link
            to="/"
            className="flex items-center mr-1 text-gray-900 md:justify-center hover:text-gray-900 focus:text-gray-900 lg:mt-0"
          >
            <p className="px-2 py-2 text-2xl font-bold tracking-widest text-white">
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
            className="px-1 py-2 mt-2 w-full md:mt-0 text-2xl text-black border-none rounded outline-none tracking-widest placeholder:text-[#6e7bfb] bg-gradient-to-br from-[#9cfcf8] to-[#6e7bfb]placeholder:text-gray-600"
            placeholder="Search Projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          {hashtags.map((tag) => (
            <button
              key={tag}
              className={`capitalize mr-4 tracking-widest min-w-[5rem] py-2 px-4 border-none rounded-2xl border-2 border-white font-bold my-2 hover:bg-[#9cfcf8] hover:text-black transition-all duration-300 ease-in-out ${
                activeTag === tag
                  ? "bg-[#9cfcf8] text-black"
                  : "bg-[#6e7bfb] text-white"
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <span
          className="absolute bottom-0 w-full h-1 bg-[#ef4444]"
          style={{ transform: `translateX(${completion - 100}%)` }}
        />
      </div>
    </>
  );
};

export default Navbar;
