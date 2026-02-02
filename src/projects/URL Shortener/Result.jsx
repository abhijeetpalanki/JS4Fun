import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Result = ({ inputValue }) => {
  const [shortenedLink, setShortenedLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenedLink(res.data.result.full_short_link);
    } catch (error) {
      setError(error);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  const copyToClipboard = () => {
    const displayText = shortenedLink
      .split("</p>")
      .map((t, index) => t.replace("<p>", `${index + 1}. `));
    copy(displayText);
    toast.success(`You have copied "${displayText}"`, {
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

  if (loading) {
    return (
      <p className="loading-data text-white font-[1rem] z-[100]">Loading...</p>
    );
  }

  if (error) {
    return (
      <p className="loading-data text-white font-[1rem] z-[100]">
        Something went wrong :(
      </p>
    );
  }

  return (
    <>
      {shortenedLink && (
        <div className="result flex items-center justify-center py-[0.5rem] px-[1rem] z-[100]">
          <p className="text-white mr-[1rem] py-[0.45rem] px-[1rem] border-[#3e1e68] border-[1px]">
            {shortenedLink}
          </p>
          <button
            onClick={copyToClipboard}
            className={`py-[0.8rem] px-[1rem] text-white bg-[#3e1e68] border-0 ${
              copied ? "copied bg-white text-[#3e1e68]" : ""
            }`}
          >
            <FaCopy />
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Result;
