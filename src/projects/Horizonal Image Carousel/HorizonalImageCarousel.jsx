import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaHeart, FaShare } from "react-icons/fa";
import { image1, image2, image3, image4, image5, image6 } from "./assets";

const HorizonalImageCarousel = () => {
  const [images] = useState([
    { src: image1, title: "Sunset: Red" },
    { src: image2, title: "Stars: Green" },
    { src: image3, title: "Galaxy: Blue" },
    { src: image4, title: "Castle: Gold" },
    { src: image5, title: "Snow: White" },
    { src: image6, title: "House: Brown" },
  ]);
  const [width, setWidth] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#f27121] via-[#e94057] to-[#8a2387]">
      <div className="w-[95%] xs:w-[60%] mb-[2vw]">
        <h1 className="text-[5vw] xs:text-[3vw] text-center py-0 px-[20px] text-white underline decoration-[#f27121] underline-offset-[0.5vw]">
          Horizontal Image Carousel
        </h1>
      </div>

      <motion.div
        whileTap={{ cursor: "grabbing" }}
        className="w-full xs:w-[60%] overflow-hidden p-[20px] flex"
        ref={sliderRef}
      >
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width,
          }}
          className="inline-flex"
        >
          {images.map((image, index) => (
            <div
              className="w-[300px] bg-black/0 rounded-2xl backdrop-blur-[20px] py-[30px] px-[20px] shadow-[0_3px_6px_#00000028,0_3px_6px_#0000003a] pointer-events-none ml-[5vw] xs:ml-[1.5vw]"
              key={index}
            >
              <h2 className="text-[10vw] xs:text-[4vw] leading-none mb-[8vw] xs:mb-[2vw] text-[#eee] relative inline-block after:absolute after:content-[''] after:w-[6vw] xs:after:w-[1.5vw] after:h-[4px] after:bg-[#f27121] after:left-[0.5vw] after:-bottom-[5px]">
                0{index + 1}
              </h2>
              <div className="mb-4">
                <div className="text-[6vw] xs:text-[1vw] font-bold text-black">
                  {image.title}
                </div>
                <div className="text-[5vw] xs:text-[1vw] text-[#eee]">
                  Unsplash 0{index + 1}
                </div>
              </div>
              <div className="w-full h-[250px] block rounded-2xl overflow-hidden mb-8">
                <img
                  src={image.src}
                  alt="Sunset"
                  className="block object-cover w-full h-full"
                />
              </div>
              <div className="text-[#bdbdbd] flex items-center justify-between">
                <FaDownload className="w-6 h-6" />
                <FaHeart className="w-6 h-6" />
                <FaShare className="w-6 h-6" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HorizonalImageCarousel;
