import React, { useEffect } from "react";
import FighterJetCanvas from "../components/FighterJetCanvas";

// Main Website Component
const Home = () => {
  useEffect(() => {
    // Intersection Observer logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fly-in-show"); // Add the animation class
          } else {
            entry.target.classList.remove("fly-in-show"); // Remove it when out of view
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    // Select all elements with the "fly-in" class
    const elements = document.querySelectorAll(".fly-in");
    elements.forEach((el) => observer.observe(el));

    // Cleanup the observer when the component unmounts
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
      {/* Hero Section */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <FighterJetCanvas />
        </div>
        <h1
          style={{
            color: "#fff",
            zIndex: 10,
            marginTop: "10vh",
            fontSize: "3rem",
            textAlign: "center",
          }}
        ></h1>
        <p
          style={{
            color: "#fff",
            zIndex: 10,
            fontSize: "1.5rem",
            marginTop: "1rem",
            textAlign: "center",
          }}
        ></p>
      </section>

      {/* About Me Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          backgroundColor: "#F0F4F8",
        }}
      >
        <h2>About Me</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "#666" }}>
          I am a passionate software engineer with experience in full stack
          development, network infrastructure, and security. I thrive on
          solving challenging problems and creating efficient, scalable
          solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h2>Projects</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div className="projects">
            <div className="fly-in project">
              <h3>Project 1: Network Monitoring Tool</h3>
              <p>
                A tool for monitoring network interfaces, switching
                automatically to optimize connectivity.
              </p>
              <a href="#">Learn More</a>
            </div>
            <div className="fly-in project">
              <h3>Project 2: Portfolio Website</h3>
              <p>
                A minimalistic and interactive personal website showcasing
                professional achievements.
              </p>
              <a href="#">Learn More</a>
            </div>
            <div className="fly-in project">
              <h3>Project 3: AI Intrusion Detection</h3>
              <p>
                Developed an AI-based system to detect and prevent security
                breaches in real-time.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2>Contact</h2>
        <p>Feel free to send me a message below:</p>
        <form
          action="https://formspree.io/f/mannlolj"
          method="POST"
          style={{
            maxWidth: "600px",
            margin: "2rem auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
              resize: "none",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "1rem",
              backgroundColor: "#2563EB",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#2563EB",
          color: "#ffffff",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Woo Bin Park. Copy, share, and
          enjoy! No need to ask permission.
        </p>
      </footer>
    </div>
  );
};

export default Home;
