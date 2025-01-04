// Hero
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion";

import CanvasLoader from "./CanvasLoader";

// Lighting setup for the 3D scene
const SceneLights = () => (
  <>
    <hemisphereLight intensity={0.4} groundColor="#2563EB" />
    <spotLight
      position={[0, 50, 10]} // Position above and slightly in front of the scene
      angle={0.3}
      penumbra={1} // Controls the softness of the spotlight's edges
      intensity={1.5}
      castShadow
      shadow-mapSize={1024}
    />
    <ambientLight intensity={0.6} color="#93C5FD" />
  </>
);

// Fighter Jet model loader and renderer with enhanced animations
const FighterJet = ({ isMobile }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/fighter.glb", // Ensure this path is correct
      (gltf) => {
        const loadedModel = gltf.scene;
        loadedModel.traverse((child) => {
          if (child.isMesh) {
            child.material.metalness = 0.5;
            child.material.roughness = 0.3;
            child.material.color.set("#E0F7FF");
          }
        });
        setModel(loadedModel);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
        setModel(null);
      }
    );
  }, []);

  return (
    <>
      <SceneLights /> {/* Add lights to the scene */}
      {model && (
        <motion.group
          // Enhanced animation for the plane
          initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
          animate={{ opacity: 1, scale: 1, rotateY: 360 }}
          transition={{
            duration: 2, // Total animation time
            ease: "easeOut",
            rotateY: { type: "spring", stiffness: 100, damping: 10 },
          }}
        >
          <primitive
            object={model} // Load the 3D model
            scale={isMobile ? 0.3 : 0.525} // Adjust scale for mobile devices
            position={isMobile ? [0, 0.15, 0] : [0, 2.55, 0]} // Adjust position
            rotation={[-0.01, 2, -0.1]} // Slight rotation for a dynamic appearance
          />
        </motion.group>
      )}
    </>
  );
};

// Main Canvas component for rendering the scene
const FighterJetCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); // State for detecting mobile screens

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)"); // Media query for responsiveness
    setIsMobile(mediaQuery.matches); // Set initial state

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange); // Listen for screen size changes

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #2563EB 0%, #93C5FD 100%)", // Gradient background
        height: "100vh", // Full viewport height
      }}
    >
      <Canvas
        frameloop="always" // Continuous rendering for smooth animations
        shadows // Enable shadows for depth
        dpr={[1, 2]} // Set device pixel ratio
        camera={{ position: [20, 3, 5], fov: 25 }} // Camera setup
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false} // Disable zoom to lock view
            maxPolarAngle={Math.PI / 2} // Limit vertical rotation
            minPolarAngle={Math.PI / 2}
          />
          <FighterJet isMobile={isMobile} />
        </Suspense>
        <Preload all /> {/* Preload all assets for optimization */}
      </Canvas>
    </div>
  );
};

export default FighterJetCanvas;
