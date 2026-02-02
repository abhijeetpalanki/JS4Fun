import React from "react";
import { useAnimeContext } from "./AnimeContext";
import { Link, useParams } from "react-router-dom";

const PopularAnime = () => {
  const { projectId } = useParams();
  const { popularAnime, isSearch } = useAnimeContext();

  return (
    <>
      <header>
        <h1 className="text-5xl text-[#454e56]">Popular Anime</h1>
      </header>
      <div className="flex w-full px-10">
        <div className="mt-8 py-8 w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 border-t-[5px] border-t-[#e5e7eb]">
          {!isSearch &&
            popularAnime.map((anime) => {
              return (
                <Link
                  to={`/projects/${projectId}/anime/${anime.mal_id}`}
                  key={anime.mal_id}
                  className="h-[500px] rounded-[7px] border-[5px] border-[#e5e7eb]"
                >
                  <img
                    src={anime.images.jpg.large_image_url}
                    alt=""
                    className="w-full h-full object-cover rounded-[5px]"
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PopularAnime;
