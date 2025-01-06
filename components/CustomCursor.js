import React, { useEffect, useState } from "react";
import styles from "../styles/CustomCursor.module.css";

const CustomCursor = ({ hidden }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Detect hover over clickable elements
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);

    const hoverTargets = document.querySelectorAll("a, button");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`${styles.customCursor} ${hidden ? styles.hidden : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: hovered ? "#FFC5D9" : "rgba(0, 0, 0, 0.7)", // Pink on hover
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CustomCursor;
