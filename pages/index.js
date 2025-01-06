import React, { useState } from "react";
import FighterJetCanvas from "../components/FighterJetCanvas";
import Tabs from "../components/Tabs";

const Home = () => {
  const [customCursorHidden, setCustomCursorHidden] = useState(false);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        overflow: "hidden",
        height: "100vh",
        position: "relative",
      }}
    >
      <FighterJetCanvas />
      <Tabs setCustomCursorHidden={setCustomCursorHidden} />
    </div>
  );
};

export default Home;
