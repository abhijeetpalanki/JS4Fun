import { useState, useEffect, useRef } from "react";
import { useInterval } from "../../hooks/useInterval";

const CANVAS_SIZE = [800, 800];
const SNAKE_START = [
  [8, 7],
  [8, 8],
];
const FOOD_START = [8, 3];
const SCALE = 40;
const SPEED = 100;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0], // right
};

const PlaySnake = () => {
  const [snake, setSnake] = useState(SNAKE_START);
  const [food, setFood] = useState(FOOD_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef(null);

  useInterval(() => gameLoop(), speed);

  const startGame = () => {
    setSnake(SNAKE_START);
    setFood(FOOD_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createFood = () =>
    food.map((_f, i) => Math.floor((Math.random() * CANVAS_SIZE[i]) / SCALE));

  const checkCollision = (headPiece, snk = snake) => {
    if (
      headPiece[0] * SCALE >= CANVAS_SIZE[0] ||
      headPiece[0] < 0 ||
      headPiece[1] * SCALE >= CANVAS_SIZE[1] ||
      headPiece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (headPiece[0] === segment[0] && headPiece[1] === segment[1])
        return true;
    }

    return false;
  };

  const checkFoodCollision = (newSnake) => {
    if (newSnake[0][0] === food[0] && newSnake[0][1] === food[1]) {
      let newFood = createFood();

      while (checkCollision(newFood, newSnake)) {
        newFood = createFood();
      }
      setFood(newFood);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);

    if (checkCollision(newSnakeHead)) endGame();
    if (!checkFoodCollision(snakeCopy)) snakeCopy.pop();

    setSnake(snakeCopy);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);

    context.fillStyle = "pink";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));

    context.fillStyle = "lightblue";
    context.fillRect(food[0], food[1], 1, 1);
  }, [snake, food, gameOver]);

  return (
    <div className="bg-[#e3f2fd] h-screen flex flex-col justify-center items-center">
      <div className="bg-[#293447] flex flex-col overflow-hidden rounded-md">
        <div className="text-[#b8c6dc] text-xl font-medium py-5 px-7 flex justify-between">
          <button
            onClick={startGame}
            className="text-[#b8c6dc] p-1 hover:bg-black"
          >
            Start Game
          </button>

          {gameOver && <div className="text-center text-white">GAME OVER!</div>}
        </div>
        <div
          className="bg-[#212837] cursor-default"
          role="button"
          tabIndex="0"
          onKeyDown={(e) => moveSnake(e)}
        >
          <canvas
            ref={canvasRef}
            width={`${CANVAS_SIZE[0]}px`}
            height={`${CANVAS_SIZE[1]}px`}
          ></canvas>
        </div>
      </div>
    </div>
  );
};
export default PlaySnake;
