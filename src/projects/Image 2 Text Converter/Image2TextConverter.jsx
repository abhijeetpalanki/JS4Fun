import { useEffect, useState, useCallback } from "react";
import Tesseract from "tesseract.js";

const Image2TextConverter = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  const convertImageToText = useCallback(async () => {
    if (!selectedImage) {
      return;
    }

    Tesseract.recognize(selectedImage, "eng")
      .then((res) => {
        setTextResult(res.data.text);
      })
      .catch((error) => console.log(error));
  }, [selectedImage]);

  useEffect(() => {
    convertImageToText();
  }, [selectedImage, convertImageToText]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    } else {
      setSelectedImage(null);
      setTextResult("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-237.5 flex flex-col justify-center items-center text-center z-1">
        <h1 className="font-bold text-[3rem] mt-16">Image 2 Text Converter</h1>
        <p className="text-[#1a1a1a] text-[1.5rem]">
          Extract any image which containing text
        </p>

        {/* Input Wrapper */}
        <div className="relative">
          <label
            className="inline-block py-2 px-3 cursor-pointer rounded-sm bg-[coral] text-white"
            htmlFor="upload"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute left-32 top-2.5 text-[15px] text-[#1a1a1a] -z-1"
          />
        </div>

        {/* Result */}
        <div className="mt-16 space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:gap-8 items-center justify-center">
          {selectedImage && (
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-4 smaspect-h-2 lg:aspect-w-2 lg:aspect-h-1">
              <img
                className="object-cover rounded-lg shadow-lg"
                src={URL.createObjectURL(selectedImage)}
                alt="thumb"
              />
            </div>
          )}
          {textResult && (
            <div className="bg-[#ddd] h-full p-4 rounded-lg shadow-lg">
              <p className="leading-6 text-[1rem]">{textResult}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Image2TextConverter;
