// components/FighterJetCanvas.js
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import CanvasLoader from "./CanvasLoader";

const FighterJet = ({ isMobile }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/fighter.glb", // Make sure this path is correct relative to the public folder
      (gltf) => {
        setModel(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
        setModel(null);
      }
    );
  }, []);

  if (!model) {
    return (
      <mesh>
        <hemisphereLight intensity={0.35} groundColor="gray" />
        <spotLight
          position={[-10, 20, 10]}
          angle={0.3}
          penumbra={0.2}
          intensity={0.8}
          castShadow
          shadow-mapSize={512}
        />
        <ambientLight intensity={0.5} />
      </mesh>
    );
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="gray" />
      <spotLight
        position={[-10, 20, 10]}
        angle={0.3}
        penumbra={0.2}
        intensity={0.8}
        castShadow
        shadow-mapSize={512}
      />
      <ambientLight intensity={0.5} />
      <primitive
        object={model}
        scale={isMobile ? 0.3 : 0.75}
        position={isMobile ? [0, -1.25, 0] : [0, -1.28, 0]}
        rotation={[-0.01, 2, -0.1]}
      />
    </mesh>
  );
};

const FighterJetCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <FighterJet isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default FighterJetCanvas;
