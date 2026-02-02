import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const MemeGenerator = () => {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);
  const [generatedUrl, setGeneratedUrl] = useState("");

  const copyToClipboard = () => {
    copy(generatedUrl);
    toast.success("You have successfully copied the url link to clipboard!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const updateCaption = (event, index) => {
    const text = event.target.value || "";
    setCaptions(
      captions.map((c, i) => {
        if (index === i) {
          return text;
        } else {
          return c;
        }
      })
    );
  };

  const generateMeme = () => {
    const currentMeme = memes[memeIndex];
    const formData = new FormData();

    formData.append("username", process.env.REACT_APP_MEME_USERNAME);
    formData.append("password", process.env.REACT_APP_MEME_PASSWORD);
    formData.append("template_id", currentMeme.id);
    captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setGeneratedUrl(data.data.url);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const shuffleMemes = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) =>
        res.json().then((data) => {
          const memesData = data.data.memes;
          shuffleMemes(memesData);
          setMemes(memesData);
        })
      )
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (memes.length) {
      setCaptions(Array(memes[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, memes]);

  return (
    <div className="flex items-center justify-center h-screen">
      {generatedUrl.length ? (
        <div>
          <h1 className="mb-10 text-5xl">Your Generated Meme</h1>
          {generatedUrl && (
            <img
              alt="meme"
              src={generatedUrl}
              className="max-w-sm md:max-w-lg max-h-80 m-auto block rounded-md shadow-[0px_0px_10px_#000] my-5"
            />
          )}
          <button
            onClick={copyToClipboard}
            className="flex justify-center items-center p-3 m-auto text-white border-none rounded-md uppercase focus-visible:outline-none bg-[#0275d8]"
          >
            <FaCopy />
          </button>
        </div>
      ) : (
        <div>
          {memes.length && (
            <>
              <h1 className="mb-10 text-5xl text-center text-black">
                Meme Generator
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="">
                  <button
                    onClick={() => setMemeIndex((index) => index + 1)}
                    className="block cursor-pointer w-96 p-3 m-auto text-white border-none rounded-md bg-[#f0ad4e] uppercase focus-visible:outline-none"
                  >
                    Skip
                  </button>
                  <img
                    src={memes[memeIndex].url}
                    alt={memes[memeIndex].name}
                    className="max-w-md max-h-96 m-auto block rounded-md shadow-[0px_0px_10px_#000] my-5"
                  />
                </div>
                <div className="">
                  {captions.map((cap, index) => (
                    <input
                      type="text"
                      key={index}
                      onChange={(e) => updateCaption(e, index)}
                      className="block p-3 m-auto mb-4 outline-none w-96"
                    />
                  ))}
                  <button
                    onClick={generateMeme}
                    className="block cursor-pointer w-96 p-3 m-auto text-white border-none rounded-md bg-[#0275d8] uppercase focus-visible:outline-none"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default MemeGenerator;
