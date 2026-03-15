import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Postman', 'Figma'] }
  ];

  return (
    <div className="about page-enter">
      <div className="about-header">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <section className="about-intro">
          <div className="about-text">
            <h3>Hello! I'm Rahul Pawar</h3>
            <p>
              I'm a passionate full-stack developer with a love for creating beautiful and functional web applications. 
              With 2+ years of experience in web development, I've worked on various projects ranging from 
              e-commerce platforms to real-time chat applications.
            </p>
            <p>
              I believe in clean code, user-centered design, and continuous learning. When I'm not coding, 
              you can find me exploring new technologies, contributing to open-source projects, or sharing 
              knowledge with the developer community.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h4>50+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h4>30+</h4>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h4>2+</h4>
              <p>Years Experience</p>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h3>Skills & Technologies</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.category} className="skill-category">
                <h4>{skill.category}</h4>
                <div className="skill-items">
                  {skill.items.map((item) => (
                    <span key={item} className="skill-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="journey-section">
          <h3>My Journey</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Started Learning Web Development</h4>
                <p className="timeline-year">2021</p>
                <p>Began my coding journey with HTML, CSS, and JavaScript basics.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>First Project Launched</h4>
                <p className="timeline-year">2022</p>
                <p>Built my first web application using React and MongoDB.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Freelancing Started</h4>
                <p className="timeline-year">2023</p>
                <p>Started taking freelance projects and building client applications.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Expanding Skills</h4>
                <p className="timeline-year">2024</p>
                <p>Learning advanced topics and expanding my tech stack.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
