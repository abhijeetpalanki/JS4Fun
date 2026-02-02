import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import Model from "./Model";
import { useMotionValue, useSpring } from "framer-motion";

const Floaters = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  };

  const manageMouse = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, []);

  return (
    <main className="flex flex-col h-screen bg-[#e0e0e2]">
      <p className="font-bold text-center">
        Use your mouse to see the floating effect
      </p>
      <Canvas
        style={{ background: "#e0e0e2" }}
        orthographic
        camera={{ position: [0, 0, 200], zoom: 5 }}
      >
        <Model mouse={smoothMouse} />
        <Environment preset="studio" />
      </Canvas>
    </main>
  );
};

export default Floaters;
