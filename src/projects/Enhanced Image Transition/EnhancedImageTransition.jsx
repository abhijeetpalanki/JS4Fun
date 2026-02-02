import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FadingImageDisplacement } from "./FadingImageDisplacement";
import { FadingImage } from "./FadingImage";

const EnhancedImageTransition = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <FadingImageDisplacement position-x={1.5} position-z={-2} />
      <FadingImage position-x={-1.5} position-z={-2} />
    </>
  );
};

export default EnhancedImageTransition;
