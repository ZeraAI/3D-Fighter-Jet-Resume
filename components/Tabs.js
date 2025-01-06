import React, { useState, useEffect } from "react";
import styles from "../styles/Tabs.module.css";
import ProgressGallery from "../components/ProgressGallery";

const Tabs = ({ setCustomCursorHidden }) => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  useEffect(() => {
    const body = document.body;
    if (activeTab) {
      setCustomCursorHidden(true); // Hide custom cursor
      body.style.cursor = "auto"; // Show default cursor
    } else {
      setCustomCursorHidden(false); // Show custom cursor
      body.style.cursor = "none"; // Hide default cursor
    }

    return () => {
      body.style.cursor = "none"; // Cleanup cursor style
    };
  }, [activeTab, setCustomCursorHidden]);

  const images = [
    { src: "/progress1.png", alt: "Initial Setup", caption: "Initial setup with basic layout" },
    { src: "/progress2.png", alt: "Added Fighter Jet", caption: "Added the 3D Fighter Jet" },
    { src: "/progress3.png", alt: "Animations Applied", caption: "Animations and initial interactivity" },
    { src: "/progress4.png", alt: "Styling Improvements", caption: "Styling improvements for the UI" },
    { src: "/progress5.png", alt: "Custom Cursor", caption: "Custom cursor added for interactivity" },
    { src: "/progress6.png", alt: "Responsive Design", caption: "Implemented responsive design" },
    { src: "/progress7.png", alt: "Final Touches", caption: "Final touches and optimizations" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        {["Who am I?", "Career Achievements", "Projects Made", "About this site", "Contact Me"].map(
          (tab) => (
            <button
              key={tab}
              className={styles.tabButton}
              onClick={() => toggleTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {activeTab && (
        <>
          <div className={styles.overlay} onClick={() => setActiveTab(null)}></div>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>{activeTab}</h2>
              <button
                className={styles.closeButton}
                onClick={() => setActiveTab(null)}
              >
                X
              </button>
            </div>
            <div className={styles.modalContent}>
              {activeTab === "Who am I?" && <p>I am a passionate software engineer...</p>}
              {activeTab === "Career Achievements" && <p>Here are some of my career achievements...</p>}
              {activeTab === "Projects Made" && <p>Here are the projects I have worked on...</p>}
              {activeTab === "About this site" && (
                <>
                    <p>
                    This website was built with love using React, Three.js, and Next.js. I carefully crafted
                    every detail, from the custom fighter jet animation to the cherry blossom leaves floating from the sky.
                    </p>
                    <p>
                    Click the arrows to see how this website transformed from bare-bones to the space you are exploring now!
                    </p>
                    <ProgressGallery
                    images={[
                        "/progress1.png",
                        "/progress2.png",
                        "/progress3.png",
                        "/progress4.png",
                        "/progress5.png",
                        "/progress6.png",
                        "/progress7.png",
                    ]}
                    captions={[
                        "(1/7) Creating the foundations",
                        "(2/7) Colors begin to enter the world",
                        "(3/7) Plane soars across the vast sky",
                        "(4/7) Fonts evolve!",
                        "(5/7) Clouds form. Plane moves!",
                        "(6/7) Cherry Blossom petals begin to fall",
                        "(7/7) Final result looks great to me!",
                    ]}
                    />
                </>
                )}
              {activeTab === "Contact Me" && (
                <form
                  action="https://formspree.io/f/mannlolj"
                  method="POST"
                  className={styles.formContainer}
                >
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                  <textarea name="message" rows="5" placeholder="Your Message" required />
                  <button type="submit">Send</button>
                </form>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tabs;
