/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/Cloud.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { fadeOnBeforeCompile } from "./utils/fadeMaterial";

export const Cloud = ({ opacity, ...props }) => {
  const { nodes, materials } = useGLTF("/models/Cloud.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial
          onBeforeCompile={fadeOnBeforeCompile}
          envMapIntensity={2}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/Cloud.glb");
