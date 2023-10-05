import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState("top-center");
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState("dark");

  const [position] = useState([
    "top-left",
    "top-right",
    "top-center",
    "bottom-left",
    "bottom-right",
    "bottom-center",
  ]);
  const [theme] = useState(["light", "dark", "colored"]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <div className="w-[350px] md:w-[500px] h-64 px-5 py-10 drop-shadow mt-10 border rounded">
            <label className="block mb-2 text-xs text-center text-white lg:text-sm xl:text-base">
              Position
            </label>
            <div className="grid grid-cols-3 gap-2">
              {position.map((el, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    className={`flex items-center gap-2 drop-shadow cursor-pointer transition duration-300 mx-1 rounded-md px-2 py-3 flex-1  text-xs font-bold text-slate-600 hover:drop-shadow-md ${
                      isSelected && "bg-cyan-50"
                    }`}
                    key={index}
                    onClick={() => {
                      setSelectedIndex(index);
                      setSelectedPosition(el);
                    }}
                  >
                    <div
                      className={`rounded-full w-4 h-4 border transition ${
                        isSelected && "border-4 border-sky-500 bg-sky-300"
                      } `}
                    ></div>
                    <span className="uppercase">{el.replace("-", " ")}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-[350px] md:w-[500px] h-32 md:h-64 px-5 py-10 drop-shadow mt-10 border rounded">
            <label className="block mb-2 text-xs text-center text-white lg:text-sm xl:text-base">
              Theme
            </label>
            <div className="grid grid-cols-3 gap-2">
              {theme.map((el, index) => {
                const isSelected = index === selectedThemeIndex;
                return (
                  <div
                    className={`flex items-center gap-2 drop-shadow cursor-pointer transition duration-300 mx-1 rounded-md px-2 py-3 flex-1  text-xs font-bold text-slate-600 hover:drop-shadow-md ${
                      isSelected && "bg-cyan-50"
                    }`}
                    key={index}
                    onClick={() => {
                      setSelectedThemeIndex(index);
                      setSelectedTheme(el);
                    }}
                  >
                    <div
                      className={`rounded-full w-4 h-4 border transition ${
                        isSelected && "border-4 border-sky-500 bg-sky-300"
                      } `}
                    ></div>
                    <span className="uppercase">{el}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-64 gap-2 mt-10 md:mt-0 md:flex-row w-96">
          <button
            className="p-4 text-gray-800 bg-white rounded-md"
            onClick={() =>
              toast("🦄 Wow so easy!", {
                position: selectedPosition,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: selectedTheme,
              })
            }
          >
            Click for Toast!
          </button>
          <button
            className="p-4 text-white bg-blue-800 rounded-md"
            onClick={() =>
              toast.info("🦄 Wow so easy!", {
                position: selectedPosition,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: selectedTheme,
              })
            }
          >
            Click for Toast!
          </button>
          <button
            className="p-4 text-white bg-green-800 rounded-md"
            onClick={() =>
              toast.success("🦄 Wow so easy!", {
                position: selectedPosition,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: selectedTheme,
              })
            }
          >
            Click for Toast!
          </button>
          <button
            className="p-4 text-white bg-yellow-800 rounded-md"
            onClick={() =>
              toast.warning("🦄 Wow so easy!", {
                position: selectedPosition,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: selectedTheme,
              })
            }
          >
            Click for Toast!
          </button>
          <button
            className="p-4 text-white bg-red-800 rounded-md"
            onClick={() =>
              toast.error("🦄 Wow so easy!", {
                position: selectedPosition,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: selectedTheme,
              })
            }
          >
            Click for Toast!
          </button>
        </div>
      </>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
