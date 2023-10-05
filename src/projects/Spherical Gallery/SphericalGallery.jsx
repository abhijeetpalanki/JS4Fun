import { useState } from "react";
import SearchInput from "./SearchInput";
import Sphere from "./Sphere";

const SphericalGallery = () => {
  const [photos, setPhotos] = useState([]);

  const setImageData = (data) => {
    setPhotos(data);
  };

  return (
    <div className="bg-[#242424] p-2 flex flex-col items-center h-screen">
      <h1 className="m-2 text-2xl font-bold text-center text-gray-300">
        Spherical Gallery
      </h1>
      <SearchInput setImageData={setImageData} />
      <Sphere photos={photos} />
    </div>
  );
};

export default SphericalGallery;
