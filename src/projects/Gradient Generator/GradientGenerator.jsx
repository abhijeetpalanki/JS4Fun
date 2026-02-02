import { useState } from "react";

const gradientDirectionsList = [
  { directionId: "TOP", value: "to top", displayText: "Top" },
  { directionId: "TOPRIGHT", value: "to top right", displayText: "Top Right" },
  { directionId: "RIGHT", value: "to right", displayText: "Right" },
  {
    directionId: "BOTTOMRIGHT",
    value: "to bottom right",
    displayText: "Bottom Right",
  },
  { directionId: "BOTTOM", value: "to bottom", displayText: "Bottom" },
  {
    directionId: "BOTTOMLEFT",
    value: "to bottom left",
    displayText: "Bottom Left",
  },
  { directionId: "LEFT", value: "to left", displayText: "Left" },
  { directionId: "TOPLEFT", value: "to top left", displayText: "Top Left" },
];

const GradientGenerator = () => {
  const [details, setDetails] = useState({
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: "#8ae323",
    toColorInput: "#014f7b",
  });

  const onChangeFromColorInput = (event) => {
    setDetails({ ...details, fromColorInput: event.target.value });
  };

  const onChangeToColorInput = (event) => {
    setDetails({ ...details, toColorInput: event.target.value });
  };

  const changeDirection = (event) => {
    setDetails({ ...details, activeGradientDirection: event.target.value });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-[350px] md:w-[450px] p-[25px] rounded-[7px]">
        <div
          className="w-full h-[220px] rounded-[7px]"
          style={{
            background: `linear-gradient(${details.activeGradientDirection},${details.fromColorInput},${details.toColorInput})`,
          }}
        ></div>
        <div className="flex justify-between my-5">
          <div className="w-[calc(100%/2-12px)] direction">
            <p className="text-[1.12rem] text-black mb-2">Direction</p>
            <div className="text-black border border-[#aaa] py-[10px] px-[15px] rounded-[5px]">
              <select
                onChange={changeDirection}
                className="w-full border-none outline-none bg-none text-[1.12rem]"
              >
                {gradientDirectionsList.map((direction) => (
                  <option key={direction.directionId} value={direction.value}>
                    {direction.displayText}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-[calc(100%/2-12px)] ml-[60px]">
            <p className="text-[1.12rem] text-black mb-2">Colors</p>
            <div className="flex">
              <input
                className="h-[41px] w-[calc(100%/2-20px)]"
                type="color"
                value={details.fromColorInput}
                onChange={onChangeFromColorInput}
              />
              <input
                className="ml-2 h-[41px] w-[calc(100%/2-20px)]"
                type="color"
                value={details.toColorInput}
                onChange={onChangeToColorInput}
              />
            </div>
          </div>
        </div>

        <textarea
          className="text-[#333] text-[1.05rem] resize-none rounded-[5px] w-full border border-[#ccc] py-[10px] px-[15px] rows"
          disabled
          value={`background: linear-gradient(${details.activeGradientDirection},${details.fromColorInput},${details.toColorInput})`}
        />
      </div>
    </div>
  );
};

export default GradientGenerator;
