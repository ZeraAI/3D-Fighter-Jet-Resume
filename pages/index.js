import React, { useState } from "react";
import FighterJetCanvas from "../components/FighterJetCanvas";
import Tabs from "../components/Tabs";

const Home = () => {
  const [isModalActive, setModalActive] = useState(false);

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
      <FighterJetCanvas isModalActive={isModalActive} />
      <Tabs setModalActive={setModalActive} />
    </div>
  );
};

export default Home;
