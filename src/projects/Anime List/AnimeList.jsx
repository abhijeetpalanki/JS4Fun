import { Route, Routes } from "react-router-dom";
import { AnimeContextProvider } from "./AnimeContext";
import PopularAnime from "./PopularAnime";
import AnimeDetail from "./AnimeDetail";
import Gallery from "./Gallery";

const AnimeList = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-[1.2rem] text-[#6c7983]">
      <AnimeContextProvider>
        <Routes>
          <Route path="/" element={<PopularAnime />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
          <Route path="/character/:id" element={<Gallery />} />
        </Routes>
      </AnimeContextProvider>
    </div>
  );
};

export default AnimeList;
