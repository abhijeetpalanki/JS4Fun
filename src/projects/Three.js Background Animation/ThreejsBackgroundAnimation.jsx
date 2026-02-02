import { useEffect } from "react";
import * as THREE from "three";
import bg1 from "./red-bg.jpg";

const ThreejsBackgroundAnimation = () => {
  useEffect(() => {
    const container = document.querySelector(".three-bg");
    const loader = new THREE.TextureLoader();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(14, 8, 15, 9);
    const material = new THREE.MeshBasicMaterial({
      map: loader.load(bg1),
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 5;

    const count = geometry.attributes.position.count;
    const clock = new THREE.Clock();

    // Update animation
    const updateFrame = () => {
      const time = clock.getElapsedTime();
      for (let i = 0; i < count; i++) {
        const x = geometry.attributes.position.getX(i);

        const anim1 = 0.25 * Math.sin(x + time * 0.7);
        const anim2 = 0.35 * Math.sin(x * 1 + time * 0.7);

        geometry.attributes.position.setZ(i, anim1 + anim2);
        geometry.computeVertexNormals();
        geometry.attributes.position.needsUpdate = true;
      }
      requestAnimationFrame(updateFrame);
      renderer.render(scene, camera);
    };

    updateFrame();
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#111] text-white overflow-hidden bg-cover bg-no-repeat">
      <div className="three-bg"></div>
      <header className="absolute top-4 left-[50%] md:left-[60%]">
        <div className="nav">
          <ul className="flex flex-col gap-8 md:flex-row">
            <li className="text-xl font-bold">
              <button className="">
                <span>Home</span>
              </button>
            </li>
            <li className="text-xl font-bold">
              <button className="">
                <span>About Us</span>
              </button>
            </li>
            <li className="text-xl font-bold">
              <button className="">
                <span>3D Background</span>
              </button>
            </li>
            <li className="text-xl font-bold">
              <button className="">
                <span>Projects</span>
              </button>
            </li>
            <li className="text-xl font-bold">
              <button className="">
                <span>Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </header>

      <div className="absolute text-center top-[50%] md:top-[30%] left-8 md:left-20 w-full md:h-[60%]">
        <h2 className="text-[30px] md:text-[80px] w-full pt-4">
          Three.js
          <br />
          Background Animation
        </h2>
      </div>
    </div>
  );
};

export default ThreejsBackgroundAnimation;
