import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = {
    frontend: {
      label: 'Frontend', icon: '⚛️', color: '#00D4FF',
      skills: ['React.js','JavaScript (ES6+)','HTML5','CSS3','Bootstrap','Redux']
    },
    backend: {
      label: 'Backend', icon: '🚀', color: '#FF4D6D',
      skills: ['Node.js','Express.js','REST APIs','Python','Java','MVC Architecture']
    },
    databases: {
      label: 'Databases', icon: '🗄️', color: '#9B5DE5',
      skills: ['MongoDB','MySQL','PostgreSQL','Firebase','SQL']
    },
    cloud: {
      label: 'Cloud & Tools', icon: '☁️', color: '#FFD60A',
      skills: ['AWS','Google Cloud Platform','Git','GitHub','VS Code']
    },
    data: {
      label: 'Data & ML', icon: '🤖', color: '#B5FF4D',
      skills: ['Python','Tableau','OpenCV','MediaPipe','Machine Learning','Data Visualization']
    },
  };

  const langs = ['Python', 'Java', 'JavaScript', 'C', 'C++'];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="section-badge">Technical Skills</div>
          <h2 className="section-title">Skills & <span className="grad-text-electric">Technologies</span></h2>
          <p className="skills-desc">A broad toolkit spanning full-stack development, cloud, machine learning, and data analytics.</p>
        </div>

        <div className="skills-tabs">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              className={`skills-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
              style={{ '--tab-color': cat.color }}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-panel">
          {Object.entries(categories).map(([key, cat]) => (
            <div key={key} className={`skills-grid-panel ${activeTab === key ? 'visible' : ''}`}>
              {cat.skills.map((skill, i) => (
                <div key={skill} className="skill-pill" style={{ '--pill-color': cat.color, animationDelay: `${i * 0.05}s` }}>
                  <div className="skill-pill-dot" />
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="langs-section">
          <div className="langs-label">Programming Languages</div>
          <div className="langs-row">
            {langs.map((l, i) => (
              <div key={l} className="lang-badge" style={{ animationDelay: `${i * 0.08}s` }}>{l}</div>
            ))}
          </div>
        </div>

        <div className="method-row">
          {['Agile / Scrum','MVC Architecture','RESTful Design','CI/CD Pipelines','Version Control (Git)'].map(m => (
            <div key={m} className="method-tag">{m}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
