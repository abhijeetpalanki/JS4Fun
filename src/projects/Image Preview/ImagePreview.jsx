import { useState } from "react";

const ImagePreview = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="m-auto w-[400px] md:w-full max-w-[600px]">
        {error && (
          <p className="text-red-500 text-2xl my-[3px] mx-0">
            File Not Supported!
          </p>
        )}

        <div
          className="w-full h-[460px] flex flex-col items-center justify-center text-center text-white rounded-2xl"
          style={{
            background: imagePreview
              ? `url("${imagePreview}") no-repeat center/contain`
              : "#131313",
          }}
        >
          {!imagePreview && (
            <>
              <p>Add an image</p>
              <label
                htmlFor="fileUpload"
                className="text-[#55d6d6] text-xl font-medium py-[6px] px-3 cursor-pointer"
              >
                Choose file
              </label>
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                onChange={handleImageChange}
              />
              <span>(jpg, jpeg or png)</span>
            </>
          )}
        </div>
        {imagePreview && (
          <button
            className="border-none outline-none w-full mt-[10px] py-[14px] px-[10px] bg-black text-white text-[17px] font-semibold"
            onClick={() => setImagePreview(null)}
          >
            Remove Image
          </button>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
