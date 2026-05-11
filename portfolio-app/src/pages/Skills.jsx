import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['React', 'Node.js', 'Angular', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker'];

  return (
    <div className="skills">
      <div className="skills-container">
        <h2 className="skills-title">TECH STACK</h2>
        
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li 
              key={index} 
              className="skill-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;