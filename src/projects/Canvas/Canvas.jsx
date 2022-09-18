import React, { useEffect, useRef } from "react";
import "./Canvas.css";

const Canvas = () => {
  const canvasRef = useRef(null);
  const increaseRef = useRef(null);
  const decreaseRef = useRef(null);
  const sizeRef = useRef(null);
  const colorRef = useRef(null);
  const clearRef = useRef(null);

  let size = 10;
  let isPressed = false;
  let color = "black";
  let x;
  let y;

  const drawCircle = (x, y, context) => {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fill();
  };

  const drawLine = (x1, y1, x2, y2, context) => {
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineWidth = size * 2;
    context.stroke();
  };

  const changeColor = (e) => {
    color = e.target.value;
  };

  const increaseSize = () => {
    size += 5;

    if (size > 50) {
      size = 50;
    }

    updateSizeOnScreen();
  };

  const decreaseSize = () => {
    size -= 5;

    if (size < 5) {
      size = 5;
    }

    updateSizeOnScreen();
  };

  const updateSizeOnScreen = () => {
    sizeRef.current.innerText = size;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.addEventListener("mousedown", (e) => {
      isPressed = true;

      x = e.offsetX;
      y = e.offsetY;
    });

    canvas.addEventListener("mouseup", (e) => {
      isPressed = false;

      x = undefined;
      y = undefined;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2, context);
        drawLine(x2, y2, x, y, context);

        x = x2;
        y = y2;
      }
    });

    clearRef.current.addEventListener("click", () =>
      context.clearRect(0, 0, canvas.width, canvas.height)
    );
  }, [drawCircle, drawLine]);

  return (
    <div className="canvas-body bg-[#f5f5f5] font-['Roboto'] flex flex-col justify-center items-center h-[100vh] m-0">
      <canvas id="canvas" width="600px" height="600px" ref={canvasRef}></canvas>
      <div className="toolbox bg-[steelblue] flex w-[604px] p-4">
        <button id="decrease" ref={decreaseRef} onClick={decreaseSize}>
          -
        </button>
        <span id="size" ref={sizeRef}>
          10
        </span>
        <button id="increase" ref={increaseRef} onClick={increaseSize}>
          +
        </button>
        <input type="color" id="color" ref={colorRef} onChange={changeColor} />
        <button id="clear" ref={clearRef}>
          X
        </button>
      </div>
    </div>
  );
};

export default Canvas;
