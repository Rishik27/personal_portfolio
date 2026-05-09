import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      id: 1,
      emoji: "📋",
      title: "MERN Stack Task Manager",
      desc: "Full-stack task management application with JWT authentication and complete CRUD functionality.",
      details: [
        "Built with React.js frontend and Node.js/Express backend",
        "Implemented JWT authentication for secure user sessions",
        "Designed RESTful API endpoints for task management operations",
        "Integrated MongoDB for flexible, schema-less data storage",
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      color: "#00D4FF",
      github: "https://github.com/Rishik27",
    },
    {
      id: 2,
      emoji: "🤖",
      title: "AI Chat Application",
      desc: "AI-powered chat application with OpenAI API integration and real-time interaction features.",
      details: [
        "Integrated OpenAI API for intelligent conversational responses",
        "Built real-time messaging interface with React.js",
        "Implemented conversation history and context management",
        "Designed clean, responsive UI for seamless user experience",
      ],
      tags: ["React.js", "OpenAI API", "Node.js", "JavaScript"],
      color: "#9B5DE5",
      github: "https://github.com/Rishik27",
    },
    {
      id: 3,
      emoji: "✋",
      title: "Hand Gesture Recognition",
      desc: "Real-time hand gesture recognition system using computer vision and machine learning.",
      details: [
        "Used OpenCV for video capture and image processing pipeline",
        "Integrated MediaPipe for accurate hand landmark detection",
        "Trained custom gesture classifier with Python ML libraries",
        "Achieved real-time performance at 30+ FPS on standard hardware",
      ],
      tags: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
      color: "#FF4D6D",
      github: "https://github.com/Rishik27",
    },
    {
      id: 4,
      emoji: "📅",
      title: "Schedule & Reminder System",
      desc: "Cloud-based scheduling platform with Firebase backend and responsive Bootstrap UI.",
      details: [
        "Built cloud-based architecture using Firebase Firestore",
        "Designed responsive UI with Bootstrap and vanilla JavaScript",
        "Implemented real-time reminder and notification system",
        "Enabled multi-device sync via Firebase real-time database",
      ],
      tags: ["Firebase", "Bootstrap", "JavaScript", "Cloud"],
      color: "#FFD60A",
      github: "https://github.com/Rishik27",
    },
    {
      id: 5,
      emoji: "📊",
      title: "Tableau Dashboard — Superstore Analytics",
      desc: "Interactive business intelligence dashboards for sales trend analysis and decision-making.",
      details: [
        "Built interactive dashboards for sales and profit analytics",
        "Created geographic heatmaps for regional performance tracking",
        "Designed KPI scorecards for executive-level reporting",
        "Applied data storytelling techniques for actionable insights",
      ],
      tags: ["Tableau", "Data Analytics", "Business Intelligence", "SQL"],
      color: "#B5FF4D",
      github: "https://github.com/Rishik27",
    },
    {
      id: 6,
      emoji: "⏱️",
      title: "Progress Pulse — Goal Tracker",
      desc: "Full-stack goal tracking and productivity platform with analytics and JWT auth.",
      details: [
        "Built React frontend with Node.js/Express backend",
        "JWT-based authentication and authorization system",
        "RESTful APIs for goal management and progress analytics",
        "MongoDB for flexible goal and user data storage",
      ],
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      color: "#FF4D6D",
      github: "https://github.com/Rishik27/ProgressPulse",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="proj-container">
        <div className="proj-header">
          <div className="section-badge">Projects</div>
          <h2 className="section-title">
            Featured <span className="grad-text-lime">Projects</span>
          </h2>
          <p className="proj-desc">
            Real-world applications demonstrating full-stack, ML, cloud, and
            data analytics expertise.
          </p>
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`proj-card ${expanded === p.id ? "expanded" : ""}`}
              style={{
                "--proj-color": p.color,
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <div className="proj-card-glow" />
              <div className="proj-emoji">{p.emoji}</div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc-text">{p.desc}</p>

              {expanded === p.id && (
                <ul className="proj-details">
                  {p.details.map((d, j) => (
                    <li key={j}>
                      <span className="proj-bullet">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span key={t} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="proj-actions">
                <button
                  className="proj-toggle"
                  onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                >
                  {expanded === p.id ? "Less ↑" : "Details ↓"}
                </button>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-github"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
