import { useState, useEffect } from "react";
import axios from "axios";
import copy from "copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

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
      .catch((err) => console.log(err));
  };

  const copyToClipboard = () => {
    const displayText = text
      .split("</p>")
      .map((t, index) => t.replace("<p>", `${index + 1}. `));
    copy(displayText);
    alert(`You have copied "${displayText}"`);
  };

  return (
    <div className="font-['Poppins'] flex flex-col justify-center items-center overflow-hidden h-screen m-0 leading-[1.6] bg-[#556271]">
      <div className="max-w-[1000px] mx-auto p-[5rem_2rem_0]">
        <div className="rounded-[0.4rem] overflow-hidden">
          {/* Head */}
          <div className="bg-[#f4f6f8] p-[2.8rem] border-[3px] border-[#d3dbe4] flex items-center justify-between generator-head">
            <form className="flex items-center">
              <div className="gen-value  mr-[1.4rem]">
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
                className="bg-[#ff6a67] border-none text-white uppercase font-semibold text-[1rem] tracking-[1px] py-[1.1rem] px-[1.2rem] rounded-md transition-all duration-300 ease-in-out hover:shadow-[0_0_7px_0_rgba(0,0,0,0.25)] mr-[1.4rem]"
                onClick={getSampleText}
              >
                Generate
              </button>
            </form>

            <button
              type="button"
              className="bg-[#ff6a67] border-none text-white uppercase font-semibold text-[1rem] tracking-[1px] py-[1.1rem] px-[1.2rem] rounded-md transition-all duration-300 ease-in-out hover:shadow-[0_0_7px_0_rgba(0,0,0,0.25)] flex justify-center items-center"
              id="copy-btn"
              onClick={copyToClipboard}
            >
              <span>copy</span>
              <FaCopy />
            </button>
          </div>

          {/* Body */}
          <div className="bg-white min-h-[400px] shadow-[0_0_13px_0_rgba(0,0,0,0.25)]">
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
    </div>
  );
};

export default TextGenerator;
