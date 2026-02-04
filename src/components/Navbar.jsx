import { Link } from "react-router-dom";
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
    <header className="sticky top-0 z-50 bg-neutral-900 text-white border-b border-neutral-800">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-xl font-semibold tracking-wide">Projects</span>
          <img src="/logo.png" alt="logo" className="h-10 w-10 rounded-md" />
        </Link>

        <input
          type="text"
          aria-label="Search projects"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-auto md:w-full max-w-sm md:max-w-lg px-3 py-2 text-sm text-black rounded-md outline-none bg-linear-to-br from-[#C7B3F6] to-[#9971DF] placeholder:text-neutral-700"
        />
      </div>

      {/* Tag Filter Bar */}
      <div className="flex flex-wrap gap-2 md:gap-3 px-6 pb-4 max-w-6xl mx-auto">
        {hashtags.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium cursor-pointer transition-all ${isActive ? "bg-[#9971DF] text-white shadow-md" : "bg-neutral-800 text-white hover:bg-neutral-700"}`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Progress Bar */}
      <span
        className="block h-0.5 bg-[#9971DF]"
        style={{ transform: `translateX(${completion - 100}%)` }}
      />
    </header>
  );
};

export default Navbar;
