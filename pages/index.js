import Head from 'next/head';
import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import styles from '../styles/Home.module.css';

function FighterJet({ isMobile }) {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/fighter.glb',
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
}

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>Professional Portfolio</title>
        <meta name="description" content="Professional portfolio with a fighter jet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>Explore my work and achievements.</p>

        <div className={styles.canvasContainer}>
          <Canvas
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <FighterJet isMobile={isMobile} />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>

        <section className={styles.sections}>
          <div>
            <h2>About Me</h2>
            <p>I am a professional with expertise in [your expertise].</p>
          </div>
          <div>
            <h2>Projects</h2>
            <p>Check out my projects below!</p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
          </div>
        </section>
      </main>
    </div>
  );
}
