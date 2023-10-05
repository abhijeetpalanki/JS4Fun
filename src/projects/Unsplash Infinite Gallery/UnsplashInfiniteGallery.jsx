import { useState, useEffect } from "react";
import axios from "axios";
import "./UnsplashInfiniteGallery.css";
import InfiniteScroll from "react-infinite-scroll-component";

const UnsplashInfiniteGallery = () => {
  const [images, setImages] = useState([]);

  const getImages = () => {
    const apiRoute = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESS_KEY;

    try {
      axios
        .get(`${apiRoute}/photos/random?client_id=${accessKey}&count=10`)
        .then((res) => setImages([...images, ...res.data]));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <header className="max-w-6xl mx-auto text-center">
        <h1 className="mb-4 text-[2rem] font-bold">Unsplash</h1>
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
              <div className="absolute top-[33px] w-[13px] h-[13px] rounded-full bg-[#222] left-[8px]  ease-[cubic-bezier(0, 1, 1, 0)]"></div>
              <div className="absolute top-[33px] w-[13px] h-[13px] rounded-full bg-[#222] left-[8px] ease-[cubic-bezier(0, 1, 1, 0)]"></div>
              <div className="absolute top-[33px] w-[13px] h-[13px] rounded-full bg-[#222] left-[32px] ease-[cubic-bezier(0, 1, 1, 0)]"></div>
              <div className="absolute top-[33px] w-[13px] h-[13px] rounded-full bg-[#222] left-[56px] ease-[cubic-bezier(0, 1, 1, 0)]"></div>
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
              loading="lazy"
            />
          ))}
        </section>
      </InfiniteScroll>
    </div>
  );
};

export default UnsplashInfiniteGallery;
