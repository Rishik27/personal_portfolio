import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "ML Enthusiast",
    "Cloud Explorer",
  ];

  useEffect(() => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const handleTyping = () => {
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1),
      );
      setTypingSpeed(isDeleting ? 50 : 150);
      if (!isDeleting && displayText === fullText)
        setTimeout(() => setIsDeleting(true), 2000);
      else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const scroll = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Open to Entry-Level Opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm
            <br />
            <span className="name-accent">Rishik</span>{" "}
            <span className="name-last">Vadapalli</span>
          </h1>

          <p className="hero-role">
            <span className="role-highlight">{displayText}</span>
            <span className="typing-cursor">|</span>
          </p>

          <p className="hero-bio">
            Fresh Computer Science graduate (M.S.) with a passion for building
            full-stack web applications, machine learning systems, and
            cloud-powered solutions. Ready to contribute from day one.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scroll("projects")}>
              View Projects <span>→</span>
            </button>
            <button className="btn-outline" onClick={() => scroll("contact")}>
              Hire Me
            </button>
            <a
              className="btn-outline"
              href="https://github.com/Rishik27"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <div className="hero-chips">
            {[
              "React.js",
              "Node.js",
              "Python",
              "AWS",
              "MongoDB",
              "Machine Learning",
            ].map((t) => (
              <span key={t} className="hero-chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-frame">
            <div className="profile-glow" />
            <div className="profile-border">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpeg`}
                alt="Rishik Vadapalli"
                className="profile-img"
              />
            </div>
            <div className="profile-badge profile-badge-1">
              <span className="badge-icon">🎓</span>
              <span>M.S. CS</span>
            </div>
            <div className="profile-badge profile-badge-2">
              <span className="badge-icon">☁️</span>
              <span>Cloud</span>
            </div>
            <div className="profile-badge profile-badge-3">
              <span className="badge-icon">🤖</span>
              <span>ML/AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down" onClick={() => scroll("about")}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};
export default Hero;
