import { useState, useEffect } from "react";
import { useClipboard } from "use-clipboard-copy";

const MemeGenerator = () => {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard();

  const copyLink = () => {
    clipboard.copy(generatedUrl);
    setCopied(true);
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
      });
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
    fetch("https://api.imgflip.com/get_memes").then((res) =>
      res.json().then((data) => {
        const memesData = data.data.memes;
        shuffleMemes(memesData);
        setMemes(memesData);
      })
    );
  }, []);

  useEffect(() => {
    if (memes.length) {
      setCaptions(Array(memes[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, memes]);

  return (
    <div className="font-['Oswald'] min-h-screen flex flex-col justify-center items-center bg-[#eee]">
      {generatedUrl.length ? (
        <div>
          <h1 className="text-5xl mb-10">Your Generated Meme</h1>
          {generatedUrl && (
            <img
              alt="meme"
              src={generatedUrl}
              className="max-w-lg max-h-96 m-auto block rounded-md shadow-[0px_0px_10px_#000] my-5"
            />
          )}
          <button
            onClick={copyLink}
            className="block cursor-pointer w-96 p-3 m-auto text-white border-none rounded-md uppercase focus-visible:outline-none bg-[#0275d8]"
          >
            {copied ? "Link copied!" : "Copy link"}
          </button>
        </div>
      ) : (
        <div>
          {memes.length && (
            <>
              <h1 className="text-5xl text-center mb-10">Meme Generator</h1>
              <div>
                <button
                  onClick={() => setMemeIndex((index) => index + 1)}
                  className="block cursor-pointer w-96 p-3 m-auto text-white border-none rounded-md bg-[#f0ad4e] uppercase focus-visible:outline-none"
                >
                  Skip
                </button>
                <img
                  src={memes[memeIndex].url}
                  alt={memes[memeIndex].name}
                  className="max-w-lg max-h-96 m-auto block rounded-md shadow-[0px_0px_10px_#000] my-5"
                />
                {captions.map((cap, index) => (
                  <input
                    type="text"
                    key={index}
                    onChange={(e) => updateCaption(e, index)}
                    className="block p-3 w-96 m-auto mb-4 outline-none"
                  />
                ))}
                <button
                  onClick={generateMeme}
                  className="block cursor-pointer w-96 p-3 m-auto text-white border-none rounded-md bg-[#0275d8] uppercase focus-visible:outline-none"
                >
                  Generate
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MemeGenerator;
