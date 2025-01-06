import React, { useState, useEffect } from "react";
import styles from "../styles/Tabs.module.css";
import ProgressGallery from "../components/ProgressGallery";
import Card from "../components/Card";

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
              {activeTab === "Career Achievements" && (
                <>
                  <Card
                    title="Infrastructure and Security Manager"
                    company="Sharebox AS - Car rental key sharing service using automatic cabinets"
                    achievements={[
                      "Spearheaded ISO 27001 compliance, ensuring international security standards and collaboration with Fleetback.",
                      "Released a network monitoring switch script globally, improving European network connectivity by over 30%.",
                      "Optimized IT systems for scalability and remote operations.",
                      "Mentored team members and solved cross-departmental technical challenges.",
                    ]}
                  />
                  <Card
                    title="Full Stack Engineer"
                    company="Mohn Tech AS - Parasite detection in Norwegian salmon farms"
                    achievements={[
                      "Developed user-focused applications with scalable backends.",
                      "Enhanced database performance by implementing SQL tuning, reducing query latency.",
                    ]}
                  />
                  <Card
                    title="Software Engineer"
                    company="Texas Instruments - Leading semiconductor producer"
                    achievements={[
                      "Automated QA workflows with Python, improving software testing efficiency.",
                      "Identified and resolved critical bugs in early development stages.",
                    ]}
                  />
                  <Card
                    title="Software Engineer"
                    company="Samsung - Global leader in smart technology"
                    achievements={[
                      "Contributed to global-scale software development used by thousands of users.",
                      "Delivered high-quality features in collaboration with cross-functional teams.",
                    ]}
                  />
                  <Card
                    title="Teaching Assistant & IT Tech"
                    company="Arlington ISD - Local school district with many connected schools"
                    achievements={[
                      "Supported neurodivergent students, fostering diversity and inclusion.",
                      "Designed internal tools that improved educator productivity.",
                    ]}
                  />
                </>
              )}
              {activeTab === "Projects Made" && (
                <div className={styles.projectsSection}>
                    <Card
                    title="Fighter Jet Portfolio Website (This site!)"
                    description="An interactive portfolio featuring 3D fighter jet animations and responsive design."
                    technologies="React.js, Three.js, Next.js"
                    outcome="Showcases creativity and technical expertise in web development."
                    />
                    <Card
                    title="Network Monitoring Script"
                    description="A globally released Python script that dynamically switches to the most reliable network connection."
                    technologies="Python, Bash, Networking"
                    outcome="Improved European network performance by 30%."
                    />
                    <Card
                    title="AI Intrusion Detection System"
                    description="Machine learning-based system to detect and prevent real-time security breaches."
                    technologies="Python, TensorFlow, Scikit-learn"
                    outcome="Identified 95% of intrusion attempts in testing."
                    />
                    <Card
                    title="CatBot Chatbot"
                    description="An NLP-driven chatbot capable of maintaining a user model and delivering relevant, conversational responses. Tracks user details like name, age, and preferences across conversations."
                    technologies="Python, NLTK, BeautifulSoup, NumPy"
                    outcome="Implemented advanced NLP techniques like cosine similarity and information retrieval to create a highly interactive user experience."
                    />
                    <Card
                    title="MIPS Assembly Hexadecimal Decoder"
                    description="A MIPS assembly program built in MARS to decode hexadecimal values into assembly commands, featuring a music jingle upon completion."
                    technologies="MIPS Assembly, MARS IDE"
                    outcome="Improved understanding of assembly language and low-level programming."
                    />
                    <Card
                    title="Automatic News Alert Checker"
                    description="A Python script that refreshes news pages to detect specific keywords and notifies users when they're mentioned."
                    technologies="Python, BeautifulSoup, Pygame"
                    outcome="Streamlined real-time news tracking with audio notifications via MP3 playback."
                    />
                    <Card
                    title="Codecademy Open Source Contribution"
                    description="Enhanced Codecademy's educational documentation by contributing detailed explanations and examples for programming concepts."
                    technologies="Markdown, GitHub"
                    outcome="Praised by professionals for clarity and educational value."
                    />
                    <Card
                    title="Survey Website for Feedback"
                    description="Designed and implemented a survey website to collect user feedback, starting with a concept in Figma and creating it entirely in HTML and CSS as a challenge."
                    technologies="Figma, HTML, CSS"
                    outcome="Demonstrated the ability to execute minimalistic yet functional designs using fundamental tools."
                    />
                    <Card
                    title="Website Dedicated to Cats"
                    description="Developed a playful website featuring cat-related content and tested the capabilities of early versions of ChatGPT in web development."
                    technologies="HTML, CSS, JavaScript, ChatGPT API"
                    outcome="Explored creative and technical limits of AI-assisted web development."
                    />
                </div>
                )}
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
