import anime from "animejs";
import { useEffect } from "react";

const GRID_WIDTH = 17;
const GRID_HEIGHT = 17;

const StaggerVisualizer = () => {
  const dots = [];
  let index = 0;

  const grid = [GRID_WIDTH, GRID_HEIGHT];
  const col = grid[0];
  const row = grid[1];
  const numberOfElements = col * row;

  for (let i = 0; i < numberOfElements; i++) {
    dots.push(
      <div
        className="w-4 h-4 bg-white border border-white dot-point"
        data-index={index}
        key={i}
      ></div>
    );
    index++;
  }

  useEffect(() => {
    const staggersAnimation = anime
      .timeline({
        targets: ".stagger-visualizer .dot-point",
        easing: "easeInOutSine",
        delay: anime.stagger(50),
        loop: true,
        autoplay: false,
      })
      .add({
        translateX: [
          {
            value: anime.stagger("-.1rem", {
              grid: grid,
              from: "center",
              axis: "x",
            }),
          },
          {
            value: anime.stagger(".1rem", {
              grid: grid,
              from: "center",
              axis: "x",
            }),
          },
        ],
        translateY: [
          {
            value: anime.stagger("-.1rem", {
              grid: grid,
              from: "center",
              axis: "y",
            }),
          },
          {
            value: anime.stagger(".1rem", {
              grid: grid,
              from: "center",
              axis: "y",
            }),
          },
        ],
        duration: 1000,
        scale: 0.5,
        delay: anime.stagger(100, { grid: grid, from: "center" }),
      })
      .add({
        translateX: () => anime.random(-10, 10),
        translateY: () => anime.random(-10, 10),
        delay: anime.stagger(8, { from: "last" }),
      })
      .add({
        translateX: anime.stagger(".25rem", {
          grid: grid,
          from: "center",
          axis: "x",
        }),
        translateY: anime.stagger(".25rem", {
          grid: grid,
          from: "center",
          axis: "y",
        }),
        rotate: 0,
        scaleX: 2.5,
        scaleY: 0.25,
        delay: anime.stagger(4, { from: "center" }),
      })
      .add({
        rotate: anime.stagger([90, 0], { grid: grid, from: "center" }),
        delay: anime.stagger(50, { grid: grid, from: "center" }),
      })
      .add({
        translateX: 0,
        translateY: 0,
        scale: 0.5,
        scaleX: 1,
        rotate: 180,
        duration: 1000,
        delay: anime.stagger(100, { grid: grid, from: "center" }),
      })
      .add({
        scaleY: 1,
        scale: 1,
        delay: anime.stagger(20, { grid: grid, from: "center" }),
      });

    staggersAnimation.play();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-[#ff4b4b]">
      <div className="stagger-visualizer flex flex-wrap justify-center items-center w-[17rem] h-[17rem]">
        {dots}
      </div>
    </div>
  );
};

export default StaggerVisualizer;
