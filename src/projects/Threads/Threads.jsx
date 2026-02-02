import { OrbitControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { pointsInner, pointsOuter } from "./utils";

const Threads = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <Canvas
        className="bg-[#101010] h-screen"
        camera={{ position: [10, -7.5, -5] }}
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10} />

        <PointCircle />
      </Canvas>
      <h1 className="absolute text-5xl font-medium -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 text-neutral-200">
        Threads
      </h1>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
      />
    </Sphere>
  );
};

export default Threads;
