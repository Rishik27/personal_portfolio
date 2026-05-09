import React from "react";
import "./Education.css";

const Education = () => {
  const degrees = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Central Oklahoma",
      year: "2025",
      gpa: "3.45 / 4.00",
      honor: "President's Honor Roll — Spring 2024",
      courses: [
        "Algorithms",
        "Software Engineering I & II",
        "Cloud Computing",
        "Database Systems",
        "Mobile App Development",
        "Enterprise Web Programming",
        "Cyber Infrastructure & Cloud Computing",
        "Theory of Computing",
        "Incident Analysis & Response",
      ],
      color: "#00D4FF",
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "CMR College of Engineering and Technology",
      year: "2023",
      gpa: null,
      honor: null,
      courses: [
        "Data Structures",
        "OOP with Java",
        "Web Technologies",
        "Computer Networks",
        "Operating Systems",
        "Database Management",
      ],
      color: "#9B5DE5",
    },
  ];

  const certs = [
    {
      name: "Full Stack Web Development & Mobile App Development",
      org: "Udemy",
      color: "#FF4D6D",
    },
    { name: "React JS", org: "Scalar", color: "#00D4FF" },
    {
      name: "Artificial Intelligence with Python",
      org: "Great Learning",
      color: "#9B5DE5",
    },
    {
      name: "Data Analyst — Python, Tableau, SQL & ChatGPT",
      org: "Udemy",
      color: "#FFD60A",
    },
    {
      name: "Introduction to Data Engineering",
      org: "Google Cloud Skills Boost",
      color: "#B5FF4D",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="edu-container">
        <div className="edu-header">
          <div className="section-badge">Education</div>
          <h2 className="section-title">
            Academic <span className="grad-text-purple">Background</span>
          </h2>
        </div>

        <div className="edu-degrees">
          {degrees.map((d, i) => (
            <div
              key={i}
              className="edu-card"
              style={{ "--deg-color": d.color }}
            >
              <div className="edu-card-accent" />
              <div className="edu-card-body">
                <div className="edu-card-top">
                  <div>
                    <div className="edu-degree">{d.degree}</div>
                    <div className="edu-school">{d.school}</div>
                  </div>
                  <div className="edu-meta-right">
                    <div className="edu-year" style={{ color: d.color }}>
                      {d.year}
                    </div>
                    {d.gpa && <div className="edu-gpa">GPA {d.gpa}</div>}
                  </div>
                </div>
                {d.honor && <div className="edu-honor">🏅 {d.honor}</div>}
                <div className="edu-courses">
                  {d.courses.map((c) => (
                    <span
                      key={c}
                      className="edu-course-tag"
                      style={{ "--deg-color": d.color }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certs-section">
          <div className="certs-title">
            <span className="cert-icon">🏆</span> Certifications
          </div>
          <div className="certs-grid">
            {certs.map((c, i) => (
              <div
                key={i}
                className="cert-card"
                style={{ "--cert-color": c.color }}
              >
                <div className="cert-dot" />
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-org">{c.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
