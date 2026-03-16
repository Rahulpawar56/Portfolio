import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'Java', 'TypeScript', 'C++', 'HTML', 'CSS'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React', 'Node.js', 'Next.js', 'Angular', 'Bootstrap'],
      color: 'from-violet-600 to-purple-500'
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'MySQL', 'PostgreSQL'],
      color: 'from-emerald-600 to-teal-500'
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Docker', 'Postman', 'Bitbucket', 'JIRA', 'Redis', 'Jenkins', 'Kibana'],
      color: 'from-orange-600 to-red-500'
    }
  ];

  return (
    <div className="skills">
      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">My Tech Stack</p>
        <div className="skills-header-line"></div>
      </div>

      <div className="skills-content">
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className="skill-category"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="category-header">
              <div className="category-icon"></div>
              <h3 className="category-title">{skillCategory.category}</h3>
            </div>

            <ul className="skills-list">
              {skillCategory.items.map((skill, i) => (
                <li 
                  key={i} 
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.15 + i * 0.05}s` }}
                >
                  <span className="skill-badge">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;