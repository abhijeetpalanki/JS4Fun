import { useState } from "react";

const RemoveBg = () => {
  const [image, setImage] = useState(null);
  const [removeBg, setRemoveBg] = useState(null);

  const handleRemoveBg = async () => {
    const apiKey = process.env.REACT_APP_REMOVE_BG_API_KEY;
    const url = "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    fetch(url, {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
      },
      body: formData,
    })
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setRemoveBg(reader.result);
        reader.readAsDataURL(blob);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="px-4 py-2 mb-5 text-black bg-white rounded-md">
        <h2 className="text-lg font-semibold">Remove Background Image</h2>

        <div className="my-4">
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button
          onClick={handleRemoveBg}
          className="px-4 py-2 border rounded-md cursor-pointer"
        >
          Remove Background
        </button>
      </div>

      <div className="max-w-[400px] max-h-[600px]">
        {removeBg && (
          <img
            src={removeBg}
            alt="Remove Background"
            className="object-cover w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default RemoveBg;
