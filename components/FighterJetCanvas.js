import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Cloud } from "@react-three/drei";
import * as THREE from "three"; 
import CanvasLoader from "./CanvasLoader";

// Lighting setup for the 3D scene
const SceneLights = () => (
  <>
    <hemisphereLight intensity={0.4} groundColor="#2563EB" />
    <spotLight
      position={[0, 50, 10]}
      angle={0.3}
      penumbra={1}
      intensity={1.5}
      castShadow
      shadow-mapSize={1024}
    />
    <ambientLight intensity={0.6} color="#93C5FD" />
  </>
);

// Cloud component with fixed positions
const Clouds = () => {
  const fixedCloudPositions = [
    [-5, 9, -3],
    [6, -1, -5],
    [8, 2, 4],
    [-6, 3, 7],
    [-9, 7, -8],
  ];

  return fixedCloudPositions.map((pos, index) => {
    const cloudRef = useRef();

    useFrame(() => {
      if (cloudRef.current) {
        cloudRef.current.rotation.y += 0.003;
      }
    });

    return (
      <Cloud
        key={index}
        ref={cloudRef}
        position={pos}
        speed={0.2}
        opacity={0.025}
        width={5}
        depth={2}
        segments={20}
      >
        <meshStandardMaterial attach="material" color="#FFFFFF" transparent />
      </Cloud>
    );
  });
};

// Fighter Jet model loader and animation
const PlaneAnimation = ({ model, isMobile }) => {
  const planeRef = useRef();

  useFrame(({ clock }) => {
    if (planeRef.current) {
      const t = clock.getElapsedTime();
      planeRef.current.position.z = Math.sin(t) * 2;
      planeRef.current.position.y = Math.cos(t) * 1.5;
      planeRef.current.rotation.y = Math.sin(t) * 0.5;
    }
  });

  return (
    <primitive
      ref={planeRef}
      object={model}
      scale={isMobile ? 0.3 : 0.525}
      position={isMobile ? [0, 0.15, 0] : [0, 2.55, 0]}
      rotation={[-0.01, 2, -0.1]}
    />
  );
};

// Fighter Jet loader and renderer
const FighterJet = ({ isMobile }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/fighter.glb",
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
      <SceneLights />
      <Clouds />
      {model && <PlaneAnimation model={model} isMobile={isMobile} />}
    </>
  );
};

// Header Component
const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 } // Adjust visibility threshold as needed
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="hidden" // Apply the `hidden` class initially
      style={{
        position: "absolute",
        top: "30%",
        width: "100%",
        textAlign: "center",
        zIndex: 1000,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: 700,
          color: "white",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <a
          href="https://www.linkedin.com/in/woobin-park/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Woo Bin Park
        </a>
      </h1>
      <p
        style={{
          fontSize: "2.5rem",
          fontWeight: 400,
          color: "white",
          marginTop: "0.5rem",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        Software Engineer | Security Engineer
      </p>
    </div>
  );
};

// Cherry Blossom Petal Component
const CherryBlossoms = () => {
  const groupRef = useRef();
  const particles = 200;
  const positions = new Float32Array(particles * 3);
  const speeds = new Float32Array(particles);

  for (let i = 0; i < particles; i++) {
    positions[i * 3] = Math.random() * 20 - 10;
    positions[i * 3 + 1] = Math.random() * 15;
    positions[i * 3 + 2] = Math.random() * 20 - 10;
    speeds[i] = Math.random() * 0.01 + 0.005;
  }

  useFrame(() => {
    if (groupRef.current) {
      const particles = groupRef.current.geometry.attributes.position;
      for (let i = 0; i < particles.count; i++) {
        let y = particles.getY(i) - speeds[i];
        particles.setY(i, y < -5 ? 15 : y);
      }
      particles.needsUpdate = true;
    }
  });

  return (
    <points ref={groupRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={new THREE.TextureLoader().load("/cherry-blossom.png")}
        size={1.5}
        transparent={true}
        alphaTest={0.5}
      />
    </points>
  );
};

// Main Canvas component
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
    <div
      style={{
        background: "linear-gradient(180deg, #2563EB 0%, #93C5FD 100%)",
        height: "100vh",
      }}
    >
      <Header />
      <Canvas frameloop="always" shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <SceneLights />
          <Clouds />
          <FighterJet isMobile={isMobile} />
          <CherryBlossoms />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default FighterJetCanvas;
