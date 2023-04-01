import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Modal from "../Animated Modal/Modal";
import useModal from "../Animated Modal/useModal";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AIKeywordExtractor = () => {
  const { modalOpen, close, open } = useModal();
  const [keywords, setKeywords] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    setText("");
    close();
  };

  const extractKeywords = async (text) => {
    setLoading(true);
    open();

    try {
      const openai = new OpenAIApi(
        new Configuration({
          apiKey: process.env.REACT_APP_CHATGPT_API_KEY,
        })
      );
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "Extract keywords from this text. Make the first letter of each word uppercase and seperate with commas\n\n" +
              text +
              "",
          },
        ],
      });
      setKeywords(response.data.choices[0].message.content);
      toast.success("Open AI fetched results successfully!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
    } catch (error) {
      toast.error(error, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
    }
  };

  const submitText = () => {
    if (text === "") {
      toast.error("Please enter some text to extract keywords!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      extractKeywords(text);
    }
  };

  return (
    <div className="relative flex justify-center h-screen text-white bg-blue-600">
      <div className="mt-32">
        <div className="max-w-3xl">
          {/* Header */}
          <div className="flex flex-col items-center">
            <HiOutlineLightBulb size={100} className="mb-4" />
            <h1 className="mb-4">AI Keyword Extractor</h1>
            <p className="text-2xl">
              Paste in your text below and we'll extract the keywords for you
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <textarea
              className="bg-blue-400 p-4 mt-6 h-[200px] w-full outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="w-full p-3 mt-1 transition-all duration-300 ease-out bg-blue-500 hover:bg-blue-700"
              onClick={submitText}
            >
              {loading ? "Loading..." : "Extract Keywords"}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-[50px]">
            <div className="flex items-center justify-center">
              <img src="/logo.png" alt="logo" className="w-10 h-10 mr-4" />
              <p className="">Powered by Open AI</p>
            </div>
          </div>
        </div>
      </div>
      {!loading && modalOpen && (
        <Modal
          modalOpen={modalOpen}
          text={keywords}
          type="dropIn"
          handleClose={closeModal}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default AIKeywordExtractor;
