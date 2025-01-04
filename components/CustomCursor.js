import React, { useEffect, useState } from 'react';
import styles from '../styles/CustomCursor.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Track mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Detect hover over clickable elements
    const clickables = document.querySelectorAll('a, button');
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={styles.customCursor}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: isHovering ? '#FFC5D9' : 'rgba(0, 0, 0, 0.7)', // Brighter rose gold
        transform: 'translate(-50%, -50%)', // Center the circle cursor
        transition: 'background-color 0.3s ease', // Smooth color transition
      }}
    />
  );
};

export default CustomCursor;
