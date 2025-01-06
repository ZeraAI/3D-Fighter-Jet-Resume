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
            {activeTab === "Who am I?" && (
                <div className={styles.aboutMeSection}>
                    <div className={styles.aboutMeImage}>
                    <img src="/WooBin.png" alt="Woo Bin" />
                    </div>
                    <div className={styles.aboutMeText}>
                    <h3>Let me introduce myself</h3>
                    <p>
                        Hi, I’m Woo Bin! Born in Korea and raised in the United States, I’ve
                        had the privilege of experiencing life across multiple cultures. I
                        even spent some time living in Norway, where I got to immerse myself
                        in the wonderful culture and meet amazing people. These global
                        experiences have shaped my perspective, and I hope to give back to the
                        world as much as it has given to me.
                    </p>
                    <p>
                        By trade, I’m a software developer, but my skills go far beyond
                        coding! I’ve delved into security, music, and quality assurance.
                        Whether it’s stress-testing servers, pushing programs to
                        their limits, or intentionally "breaking" things to improve them, I
                        thrive in uncovering potential and ensuring excellence.
                    </p>
                    <p>
                        I’ve worked on impactful projects like developing useful programs and
                        scripts, achieving security compliance, and releasing software used by
                        thousands. Curious about the details? Head over to{" "}
                        <strong>Career Achievements</strong> for the full detail!
                    </p>
                    </div>
                </div>
                )}
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
