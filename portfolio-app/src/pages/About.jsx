import React from 'react';
import './About.css';

const About = () => {
  const education = {
    degree: 'B.Tech Computer Science and Engineering',
    university: 'DBatu university ',
    location: 'Raigad',
    highlights: [
     
    ]
  };

  const technicalSkills = {
    backend: ['Node.js', 'TypeScript', 'NestJS', 'Express','Java',' Spring Boot'],
    databases: ['MySQL', 'MongoDB', 'Redis', 'MSSQL'],
    devops: ['Docker', 'Kubernetes','CI/CD'],
    architecture: ['Microservices',],
    payment: ['Payment Systems: 70+ Gateway Integrations',]
  };

  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>Education & Technical Skills</h2>
          <p className="about-subtitle">
            Strong foundation in electronics combined with extensive full-stack and DevOps expertise built through hands-on experience.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            {/* Education Section */}
            <div className="about-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="card-title">{education.degree}</h3>
              <p className="card-subtitle">{education.university} — {education.location}</p>
              <ul className="card-list">
                {education.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Technical Skills Section */}
            <div className="about-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="card-title">Technical Skills & Expertise</h3>
              <p className="card-subtitle">Hands-on Professional Experience</p>
              <ul className="card-list">
                <li><strong>Backend:</strong> {technicalSkills.backend.join(', ')}</li>
                <li><strong>Databases:</strong> {technicalSkills.databases.join(', ')}</li>
                <li><strong>DevOps:</strong> {technicalSkills.devops.join(', ')}</li>
                <li><strong>Architecture:</strong> {technicalSkills.architecture.join(', ')}</li>
                <li>{technicalSkills.payment[0]}, {technicalSkills.payment[1]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
