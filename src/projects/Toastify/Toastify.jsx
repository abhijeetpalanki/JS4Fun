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
    <div className="font-['Poppins'] flex flex-col gap-2 items-center justify-center h-screen m-0">
      <>
        <div className="flex justify-center items-center gap-2">
          <div className="w-[500px] h-64 px-5 py-10 drop-shadow mt-10 border rounded">
            <label className="block text-center text-white mb-2 text-xs lg:text-sm xl:text-base">
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

          <div className="w-[500px] h-64 px-5 py-10 drop-shadow mt-10 border rounded">
            <label className="block text-center text-white mb-2 text-xs lg:text-sm xl:text-base">
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

        <div className="w-96 h-64 flex gap-2 justify-center items-center">
          <button
            className="bg-white text-gray-800 p-4 rounded-md"
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
            className="bg-blue-800 text-white p-4 rounded-md"
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
            className="bg-green-800 text-white p-4 rounded-md"
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
            className="bg-yellow-800 text-white p-4 rounded-md"
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
            className="bg-red-800 text-white p-4 rounded-md"
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
