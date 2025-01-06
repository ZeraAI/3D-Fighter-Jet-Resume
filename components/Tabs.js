import React, { useState } from "react";
import styles from "../styles/Tabs.module.css";

const Tabs = ({ setModalActive }) => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    const isActive = activeTab === tab ? null : tab;
    setActiveTab(isActive);
    setModalActive(isActive !== null); // Update modal state
  };

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
          <div className={styles.overlay} onClick={() => toggleTab(null)}></div>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>{activeTab}</h2>
              <button className={styles.closeButton} onClick={() => toggleTab(null)}>
                X
              </button>
            </div>
            <div className={styles.modalContent}>
              {activeTab === "Who am I?" && <p>I am a passionate software engineer...</p>}
              {activeTab === "Career Achievements" && (
                <p>Here are some of my career achievements...</p>
              )}
              {activeTab === "Projects Made" && <p>Here are the projects I have worked on...</p>}
              {activeTab === "About this site" && (
                <p>This site was created using React, Three.js, and Next.js...</p>
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
