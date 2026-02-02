import { useState } from "react";
import { FaHeart, FaSadTear, FaSmileBeam, FaMeh } from "react-icons/fa";

const resources = {
  emojis: [
    {
      id: 0,
      name: "Sad",
      imageUrl: <FaSadTear size={70} />,
    },
    {
      id: 1,
      name: "None",
      imageUrl: <FaMeh size={70} />,
    },
    {
      id: 2,
      name: "Happy",
      imageUrl: <FaSmileBeam size={70} />,
    },
  ],
  loveEmojiUrl: <FaHeart size={70} />,
};

const Feedback = () => {
  const { emojis, loveEmojiUrl } = resources;
  const [isFeedback, setIsFeedback] = useState(true);

  const handleFeedbackRating = () => {
    setIsFeedback(false);
  };

  return (
    <div className="flex items-center justify-center h-screen text-black">
      <div className="flex flex-col items-center justify-center">
        {isFeedback ? (
          <div className="flex flex-col items-center justify-center">
            <h1>
              How satisfied are you with our
              <br />
              customer support performance?
            </h1>
            <ul className="flex bg-white rounded-[7px] border-0 p-8.75 items-center justify-center">
              {emojis.map((emoji) => (
                <li key={emoji.id} className="p-2 hover:shadow-md">
                  <button
                    type="button"
                    onClick={handleFeedbackRating}
                    className="bg-transparent border-0"
                  >
                    <div className="h-[10vh]">{emoji.imageUrl}</div>
                    <p>{emoji.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex flex-col text-center bg-white rounded-[7px] border-0 p-8.75 items-center justify-center">
            <div className="h-[10vh]">{loveEmojiUrl}</div>
            <h1>Thank You</h1>
            <p>
              we will use your feedback to improve our customer support
              <br />
              performance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
