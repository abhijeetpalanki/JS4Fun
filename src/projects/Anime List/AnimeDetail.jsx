import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const AnimeDetail = () => {
  const { id, projectId } = useParams();
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  const getAnimeDetail = async (mal_id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`);
    const data = await response.json();
    setAnime(data.data);
  };

  const getCharacters = async (mal_id) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${mal_id}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
  };

  useEffect(() => {
    getAnimeDetail(id);
    getCharacters(id);
  }, []);

  return (
    <>
      <header>
        <h1 className="text-5xl text-[#454e56]">Anime Details</h1>
      </header>
      <div className="p-0 md:py-12 md:px-72 bg-[#ededed] max-w-[350px] md:max-w-full">
        <h1 className="block md:inline-block text-2xl md:text-5xl my-6 text-center md:text-left md:mb-6 cursor-pointer bg-gradient-to-r from-[#6e7bfb] to-[#9cfcf8] bg-clip-text text-transparent transition-all duration-[400ms] ease-in-out hover:skew-x-[-3deg]">
          {title}
        </h1>
        <div className="bg-white rounded-[20px] p-8 border-[5px] border-[#e5e7eb]">
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2">
            <div>
              <img
                src={images?.jpg.large_image_url}
                alt=""
                className="rounded-[7px]"
              />
            </div>
            <div className="flex flex-col justify-between mt-2 md:mt-0">
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">Aired:</span>
                <span>{aired?.string}</span>
              </p>
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">Rating:</span>
                <span>{rating}</span>
              </p>
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">Rank:</span>
                <span>{rank}</span>
              </p>
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">Score:</span>
                <span>{score}</span>
              </p>
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">Scored By:</span>
                <span>{scored_by}</span>
              </p>
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">
                  Popularity:
                </span>
                <span>{popularity}</span>
              </p>
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">Status:</span>
                <span>{status}</span>
              </p>
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">Source:</span>
                <span>{source}</span>
              </p>
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">Season:</span>
                <span>{season}</span>
              </p>
              <p className="flex gap-4">
                <span className="font-semibold text-[#454e56]">Duration:</span>
                <span>{duration}</span>
              </p>
            </div>
          </div>
          <p className="mt-8 text-[#6c7983] leading-[1.7rem]">
            {showMore ? synopsis : synopsis?.substring(0, 450)}...
            <button
              className="bg-transparent border-none outline-none cursor-pointer text-[1.2rem] text-[#9cfcf8] font-semibold"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          </p>
        </div>
        <h3 className="inline-block my-12 text-[2rem] cursor-pointer bg-gradient-to-r from-[#6e7bfb] to-[#9cfcf8] bg-clip-text text-transparent">
          Trailer
        </h3>
        <div className="flex items-center justify-center">
          {trailer?.embed_url && (
            <iframe
              src={trailer?.embed_url}
              className="outline-none border-[5px] border-[#e5e7eb] p-6 rounded-[10px] bg-white"
              title="Inline"
              width={800}
              height={450}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <h3 className="inline-block my-12 text-[2rem] cursor-pointer bg-gradient-to-r from-[#6e7bfb] to-[#9cfcf8] bg-clip-text text-transparent">
          Characters
        </h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 bg-white p-8 rounded-[20px] border-[5px] border-[#e5e7eb]">
          {characters?.map((character, index) => {
            const {
              role,
              character: { images, name, mal_id },
            } = character;
            return (
              <Link
                to={`/projects/${projectId}/character/${mal_id}`}
                key={index}
              >
                <div className="py-[0.4rem] px-[0.6rem] rounded-[7px] bg-[#ededed] transition-all duration-[400ms] ease-in-out hover:-translate-y-[5px]">
                  <img src={images?.jpg.image_url} alt="" className="w-full" />
                  <h4 className="py-2 text-[#454e56]">{name}</h4>
                  <p className="text-[#9cfcf8]">{role}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnimeDetail;
