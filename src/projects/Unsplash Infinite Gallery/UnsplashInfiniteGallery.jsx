import React from "react";
import "./UnsplashInfiniteGallery.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useProjectsContext } from "../../context/ProjectsContextProvider";

const UnsplashInfiniteGallery = () => {
  const { images, getImages } = useProjectsContext();

  return (
    <div className="font-['Roboto'] h-[100vh] m-0">
      <header className="max-w-6xl mx-auto my-8 text-center">
        <h1 className="mb-4 font-['Oswald'] text-[2rem] font-bold">Unsplash</h1>
        <p>The internet's source of freely usable images.</p>
        <p>Powered by creators everywhere.</p>
      </header>

      <InfiniteScroll
        dataLength={images.length}
        next={getImages}
        hasMore={true}
        loader={
          <div className="text-center">
            <div className="lds-ellipsis inline-block relative w-[80px] h-[80px]">
              <div className="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#222] left-[8px]  ease-[cubic-bezier(0, 1, 1, 0)]"></div>
              <div className="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#222] left-[8px] ease-[cubic-bezier(0, 1, 1, 0)]"></div>
              <div className="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#222] left-[32px] ease-[cubic-bezier(0, 1, 1, 0)]"></div>
              <div className="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#222] left-[56px] ease-[cubic-bezier(0, 1, 1, 0)]"></div>
            </div>
          </div>
        }
      >
        <section className="unsplash-infinite-gallery-body grid max-w-6xl gap-4 mx-auto my-16 grid-rows-[300px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {images.map((image, index) => (
            <img
              className="object-cover w-full h-full"
              key={index}
              src={image.urls.thumb}
              alt={image.description}
            />
          ))}
        </section>
      </InfiniteScroll>
    </div>
  );
};

export default UnsplashInfiniteGallery;
