import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAnimeContext } from "./AnimeContext";
import { useState } from "react";

const Gallery = () => {
  const { getAnimePictures, pictures } = useAnimeContext();
  const { id, projectId } = useParams();
  const [index, setIndex] = useState(0);

  const handleImage = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    getAnimePictures(id);
  }, [getAnimePictures, id]);

  return (
    <div className="min-h-screen bg-white">
      <header>
        <h1 className="text-center text-5xl text-[#454e56]">
          Character Detail
        </h1>
      </header>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="absolute top-12 md:top-8 left-8">
          <Link
            to={`/projects/${projectId}`}
            className="font-semibold text-[#eb5757]"
          >
            Back to Home
          </Link>
        </div>
        <div className="inline-block p-8 my-8 bg-[#454e56] rounded-[7px] border-[5px] border-[#e5e7eb] relative">
          <img
            src={pictures[index]?.jpg.image_url}
            alt=""
            className="w-87.5 h-125"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 w-[80%] p-8 rounded-[7px] bg-[#454e56]  border-[5px] border-[#e5e7eb]">
          {pictures?.map((picture, i) => {
            return (
              <div
                key={i}
                className="image-container"
                onClick={() => handleImage(i)}
              >
                <img
                  src={picture.jpg.image_url}
                  alt=""
                  className={`object-cover w-24 h-24 cursor-pointer rounded-[5px] transition-all duration-300 ease-in-out ${
                    i === index
                      ? "border-[3px]  border-[#eb5757] grayscale-0 scale-110"
                      : "border-[3px] border-[#e5e7eb] grayscale-60 scale-100"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
