import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const topSkills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'Angular',
    'MongoDB',
    'PostgreSQL'
  ];

  const bottomSkills = [
    'Docker',
    'Git',
    'REST APIs',
    'Microservices',
    'Bootstrap',
    'HTML/CSS',
    'Express',
    'Redis'
  ];

  return (
    <>
      <div className="home page-enter">
        <HeroSection />
      </div>
      
      {/* SKILLS CARD - OUTSIDE MAIN HOME DIV */}
      <div className="skills-card-section">
        <div className="skills-card">
          {/* TOP - LEFT TO RIGHT */}
          <div className="skills-marquee-container top">
            <div className="skills-marquee-track">
              {[...topSkills, ...topSkills].map((skill, index) => (
                <div key={index} className="marquee-skill-item">
                  <span className="skill-dot"></span>
                  <span className="skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER DIVIDER */}
          <div className="skills-divider"></div>

          {/* BOTTOM - RIGHT TO LEFT */}
          <div className="skills-marquee-container bottom">
            <div className="skills-marquee-track reverse">
              {[...bottomSkills, ...bottomSkills].map((skill, index) => (
                <div key={index} className="marquee-skill-item">
                  <span className="skill-dot"></span>
                  <span className="skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
