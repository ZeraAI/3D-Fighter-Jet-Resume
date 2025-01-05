import React, { useState } from "react";
import styles from "../styles/Tabs.module.css";

// Component for navigation tabs and pop-up cards
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(null); // State to track the active tab

  // Toggles the selected tab or closes the active tab
  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div>
      {/* Navigation bar with tabs */}
      <div className={styles.navBar}>
        {["Who am I?", "Career Achievements", "Projects Made", "About this site", "Contact Me"].map((tab) => (
          <button
            key={tab} // Unique key for each tab
            className={styles.tabButton} // Style for each button
            onClick={() => toggleTab(tab)} // Handle click to toggle the tab
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render the corresponding card when a tab is active */}
      {activeTab && (
        <div className={`${styles.card} ${styles.slideIn}`}> {/* Card with slide-in animation */}
          <div className={styles.cardHeader}>
            <h2>{activeTab}</h2>
            <button
              className={styles.closeButton}
              onClick={() => setActiveTab(null)} // Close the card on click
            >
              X
            </button>
          </div>
          <div className={styles.cardContent}>
            {/* Content for each tab */}
            {activeTab === "About Me" && <p>I am a passionate software engineer...</p>}
            {activeTab === "Tasks" && <p>Here are some tasks I have accomplished...</p>}
            {activeTab === "Projects" && <p>Here are my projects...</p>}
            {activeTab === "Website Info" && <p>This website was built using...</p>}
            {activeTab === "Contact Me" && (
              <div className={styles.formContainer}>
                <form action="https://formspree.io/f/mannlolj" method="POST">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                  <textarea name="message" rows="5" placeholder="Your Message" required />
                  <button type="submit">Send</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
