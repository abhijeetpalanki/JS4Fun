import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("lightblue");
  const [showPicker, setShowPicker] = useState(false);

  const pickerStyles = {
    default: {
      picker: {
        position: "absolute",
        bottom: "50px",
        left: "-50px",
      },
    },
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{ background: color }}
    >
      <div className="relative">
        {showPicker && (
          <SketchPicker
            styles={pickerStyles}
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        <button
          className="p-[10px] bg-black/50 text-white"
          onClick={() => setShowPicker(!showPicker)}
        >
          {showPicker ? "Close " : "Open "}
          Color Picker
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
