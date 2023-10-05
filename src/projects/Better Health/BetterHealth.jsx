import logo from "./images/logo.png";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  PositionalAudio,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { Butterfly } from "./Butterfly";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import sound1 from "./sounds/ambient.mp3";
import sound2 from "./sounds/ambient-rain.mp3";
import sound3 from "./sounds/ambient-happy.mp3";

const BetterHealth = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <header className="bg-transparent flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-white p-10 absolute top-0 right-0 left-0 z-[1] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[300px] before:bg-[linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0))] before:pointer-events-none before:-z-[1]">
        <img
          className="w-[42px] h-auto pointer-events-none"
          src={logo}
          alt="logo"
        />
      </header>

      <>
        <Canvas>
          <color attach="background" args={["#000000"]} />
          <ambientLight intensity={0.2} />
          <spotLight
            position={[0, 25, 0]}
            angle={1.3}
            penumbra={1}
            castShadow
            intensity={2}
            shadow-bias={-0.0001}
          />

          <Environment preset="warehouse" />

          <EffectComposer>
            <Bloom
              intensity={2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              height={1000}
            />
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={5}
              height={480}
            />
            <Vignette eskil={false} offset={0.1} darkness={1.5} />
          </EffectComposer>

          <ScrollControls pages={6} damping={0.25}>
            <Scroll>
              {/* top */}
              <Float
                speed={1}
                rotationIntensity={2}
                floatIntensity={0.2}
                floatingRange={[1, 1]}
              >
                <Butterfly scale={0.1} position={[-10, -3, -6]} />
                <Butterfly scale={0.1} position={[0, -2.5, 0]} />
                <Butterfly scale={0.1} position={[10, -4, -10]} />
              </Float>

              {/* middle */}
              <Float
                speed={1}
                rotationIntensity={2}
                floatIntensity={0.2}
                floatingRange={[1, 1]}
              >
                <Butterfly scale={0.1} position={[-1, -12.5, 0]} />
                <Butterfly scale={0.1} position={[12, -14.5, -10]} />
              </Float>

              {/* bottom */}
              <Float
                speed={1}
                rotationIntensity={2}
                floatIntensity={0.2}
                floatingRange={[1, 1]}
              >
                <Butterfly scale={0.1} position={[-3, -19.5, 2]} />
                <Butterfly scale={0.1} position={[8, -23, -10]} />
                <Butterfly scale={0.1} position={[4, -24, 2]} />
              </Float>

              {/* sparkles */}
              <Sparkles
                noise={0}
                count={500}
                speed={0.01}
                size={0.6}
                color={"#ffd2be"}
                opacity={10}
                scale={[20, 100, 20]}
              />
              <Sparkles
                noise={0}
                count={50}
                speed={0.01}
                size={10}
                color={"#fff"}
                opacity={2}
                scale={[30, 100, 10]}
              />

              {/* sound effects */}
              <group position={[0, 0, 0]}>
                <PositionalAudio autoplay loop url={sound1} distance={1.2} />
              </group>
              <group position={[0, -20, 0]}>
                <PositionalAudio autoplay loop url={sound2} distance={3} />
              </group>
              <group position={[0, -40, 0]}>
                <PositionalAudio autoplay loop url={sound3} distance={1.2} />
              </group>
            </Scroll>
            <Scroll html style={{ width: "100%" }}>
              <div className="container relative">
                {/* Row */}
                <div className="absolute flex flex-wrap items-center justify-center w-full h-screen px-0 py-8 text-center">
                  <div className="flex-[1_0_0%]">
                    <div>
                      <h1 className="mb-8 text-6xl text-white">
                        Life can be a struggle
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Row */}
                <div className="absolute flex flex-wrap items-center justify-center w-full h-screen top-[100vh] px-0 py-8 text-center">
                  <div className="flex-[1_0_0%]">
                    <div>
                      <h1 className="mb-8 text-6xl text-white">
                        Sometimes you can feel
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Row */}
                <div className="absolute flex flex-wrap items-center justify-center w-full h-screen top-[200vh] px-0 py-8 text-center">
                  <div className="flex-[1_0_0%]">
                    <div>
                      <h1 className="mb-8 text-6xl text-white">Lost</h1>

                      <h1 className="mb-8 text-6xl text-white">Overwhelmed</h1>

                      <h1 className="mb-8 text-6xl text-white">Empty inside</h1>
                    </div>
                  </div>
                </div>
                {/* Row */}
                <div className="absolute flex flex-wrap items-center justify-center w-full h-screen top-[300vh] px-0 py-8 text-center">
                  <div className="flex-[1_0_0%]">
                    <div>
                      <h1 className="mb-8 text-6xl text-white">
                        Drifting through life <br />
                        With no help or guidance
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Row */}
                <div className="absolute flex flex-wrap items-center justify-center w-full h-screen top-[400vh] px-0 py-8 text-center">
                  <div className="flex-[1_0_0%]">
                    <div>
                      <h1 className="mb-8 text-6xl text-white">
                        But there is hope...
                        <br /> and people who can help
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Row */}
                <div className="absolute flex flex-wrap items-center justify-center w-full h-screen top-[500vh] px-0 py-8 text-center">
                  <div className="flex-[1_0_0%]">
                    <div>
                      <h1 className="mb-8 text-6xl text-white">
                        It's time to get
                        <br /> the support you need
                      </h1>
                      <h2 className="mb-[30px] -mt-5 text-[40px] text-white">
                        To get your life back
                      </h2>
                      <button className="bg-black border border-[#f8f9fa] rounded-md text-[#f8f9fa] text-xs font-normal leading-normal py-[0.375rem] px-3 text-center transition-colors duration-150 ease-in-out shadow-[inset_0_3px_5px_#0000001f] hover:bg-[#f8f9fa] hover:border-[#f8f9fa] hover:text-black">
                        Get help now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </>
    </div>
  );
};

export default BetterHealth;
