import React from "react";
import FighterJetCanvas from "../components/FighterJetCanvas";
import Tabs from "../components/Tabs";

// Main Website Component
const Home = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        overflow: "hidden", // Disable scrolling
        height: "100vh", // Full viewport height
        position: "relative", // Ensure proper positioning of elements
      }}
    >
      {/* Fullscreen Fighter Jet Canvas */}
      <FighterJetCanvas />

      {/* Navigation Tabs for Content */}
      <Tabs /> {/* This replaces About Me, Projects, and Contact sections */}
    </div>
  );
};

export default Home;
