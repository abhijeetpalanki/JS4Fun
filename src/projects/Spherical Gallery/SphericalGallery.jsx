import { useState } from "react";
import SearchInput from "./SearchInput";
import Sphere from "./Sphere";

const SphericalGallery = () => {
  const [photos, setPhotos] = useState([]);

  const setImageData = (data) => {
    setPhotos(data);
  };

  return (
    <div className="font-['Roboto'] bg-[#242424] p-2 flex flex-col items-center h-screen overflow-hidden m-0">
      <h1 className="text-gray-300 text-center font-bold text-2xl m-2">
        Spherical Gallery
      </h1>
      <SearchInput setImageData={setImageData} />
      <Sphere photos={photos} />
    </div>
  );
};

export default SphericalGallery;
