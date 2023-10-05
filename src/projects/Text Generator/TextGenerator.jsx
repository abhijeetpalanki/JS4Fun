import { useState, useEffect } from "react";
import axios from "axios";
import copy from "copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const TextGenerator = () => {
  const [paras, setParas] = useState("4");
  const [text, setText] = useState("");

  useEffect(() => {
    getSampleText();
  }, []);

  const getSampleText = async () => {
    axios
      .get(
        `https://baconipsum.com/api/?type=meat-and-filler&paras=${paras}&format=html`
      )
      .then((res) => {
        setText(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  const copyToClipboard = () => {
    const displayText = text
      .split("</p>")
      .map((t, index) => t.replace("<p>", `${index + 1}. `));
    copy(displayText);
    toast.success("You have successfully copied the text to clipboard!", {
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

  return (
    <div className="flex flex-col justify-center items-center h-screen leading-[1.6] bg-[#556271]">
      <div className="max-w-[400px] md:max-w-[1000px] mx-auto p-[5rem_2rem_0]">
        <div className="rounded-[0.4rem] overflow-hidden">
          {/* Head */}
          <div className="bg-[#f4f6f8] p-[2.8rem] border-[3px] border-[#d3dbe4] flex flex-wrap items-center justify-between md:flex-nowrap">
            <form className="flex items-center">
              <div className="gen-value mr-[1.4rem]">
                <input
                  type="number"
                  name="gen_count"
                  className="border-[3px] border-[#d3dbe4] rounded-[3px] uppercase font-semibold text-[#556271] outline-none py-[1.1rem] px-[1.2rem] "
                  min={1}
                  max={100}
                  value={paras}
                  onChange={(e) => setParas(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="bg-[#ff6a67] border-none text-white uppercase font-semibold text-[1rem] tracking-[1px] py-[1.1rem] px-[1.2rem] rounded-md transition-all duration-300 ease-in-out hover:shadow-[0_0_7px_0_#0000003f] mr-[1.4rem]"
                onClick={getSampleText}
              >
                Generate
              </button>
            </form>

            <button
              type="button"
              className="bg-[#ff6a67] border-none text-white uppercase font-semibold text-[1rem] tracking-[1px] py-[1.1rem] px-[1.2rem] mt-8 md:mt-0 rounded-md transition-all duration-300 ease-in-out hover:shadow-[0_0_7px_0_#0000003f] flex justify-center items-center"
              onClick={copyToClipboard}
            >
              <span>copy</span>
              <FaCopy />
            </button>
          </div>

          {/* Body */}
          <div className="bg-white min-h-[400px] shadow-[0_0_13px_0_#0000003f]">
            <div className="w-full max-h-[500px] overflow-y-scroll p-[2.8rem] text-[#556271] font-medium leading-[1.8] gen-content">
              {text.split("</p>").map((t, index) => (
                <div key={index}>
                  {t.replace("<p>", `${index + 1}. `)}
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TextGenerator;
