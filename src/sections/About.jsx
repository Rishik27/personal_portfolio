import React from "react";
import "./About.css";

const About = () => {
  const highlights = [
    {
      icon: "🎓",
      label: "Education",
      value: "M.S. Computer Science",
      sub: "University of Central Oklahoma, 2025",
    },
    {
      icon: "💻",
      label: "Focus Areas",
      value: "Full Stack · ML · Cloud",
      sub: "React · Node.js · Python · AWS · Firebase",
    },
    {
      icon: "🏅",
      label: "Achievement",
      value: "President's Honor Roll",
      sub: "Spring 2024 — GPA 3.45 / 4.00",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Hyderabad, Telangana",
      sub: "Open to Remote & Relocation",
    },
  ];

  const stats = [
    { num: "6+", label: "Projects Built" },
    { num: "5+", label: "Certifications" },
    { num: "3.45", label: "GPA" },
    { num: "2", label: "Degrees" },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <div className="section-badge">About Me</div>
          <h2 className="section-title">
            Passionate about building{" "}
            <span className="grad-text">meaningful software</span>
          </h2>
        </div>

        <div className="about-body">
          <div className="about-text-col">
            <p className="about-p">
              I'm a <strong>fresh Computer Science graduate</strong> with an
              M.S. from the University of Central Oklahoma, where I earned a
              place on the President's Honor Roll. I've built real-world
              projects spanning full-stack development, machine learning, and
              cloud platforms.
            </p>
            <p className="about-p">
              My stack includes{" "}
              <strong>
                React.js, Node.js, Python, MongoDB, SQL, and Firebase
              </strong>{" "}
              on the development side, with{" "}
              <strong>AWS and Google Cloud</strong> for deployment. I've also
              worked with OpenCV, MediaPipe, and OpenAI APIs for ML/AI projects.
            </p>
            <p className="about-p">
              I'm eager to join a team where I can contribute, learn fast, and
              grow as an engineer.
            </p>

            <div className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="about-stat">
                  <div className="about-stat-num">{s.num}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a
                href="https://linkedin.com/in/rishik-vadapalli-9232b3198/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-primary"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Rishik27"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-outline"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="about-cards-col">
            {highlights.map((h) => (
              <div key={h.label} className="about-card">
                <div className="about-card-icon">{h.icon}</div>
                <div>
                  <div className="about-card-label">{h.label}</div>
                  <div className="about-card-value">{h.value}</div>
                  <div className="about-card-sub">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
