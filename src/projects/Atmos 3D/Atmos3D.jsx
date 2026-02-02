import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { ScrollControls } from "@react-three/drei";

const Atmos3D = () => {
  return (
    <div className="h-screen">
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={20} damping={0.5}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Atmos3D;
