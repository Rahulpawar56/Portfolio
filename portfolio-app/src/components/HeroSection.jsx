import React from 'react';
import { ArrowRight, Download, Github, MessageCircle, Linkedin } from 'lucide-react';
import profileImage from '../assets/images/images.png';
import './HeroSection.css';

export function HeroSection() {
  const handleProjectsClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Effects */}
      <div className="hero-background">
        <div className="hero-gradient hero-gradient-primary"></div>
        <div className="hero-gradient hero-gradient-accent"></div>
      </div>

      <div className="hero-wrapper">
        {/* Left Content */}
        <div className="hero-content">
          {/* Subtitle */}
          <p className="hero-subtitle">Welcome to my portfolio!</p>

          {/* Main Heading */}
          <h1 className="hero-title">
            <span className="hero-title-name">Rahul Pawar</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
         Full-stack developer focused on building scalable web applications, secure REST APIs, and responsive user experiences. Skilled in React, Angular, Node.js, TypeScript, MongoDB, and MySQL, with experience developing enterprise admin panels and booking platforms.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="/resume.pdf" className="hero-btn hero-btn-primary" download>
              <Download size={18} />
              Download CV
            </a>
            <a href="#projects" onClick={handleProjectsClick} className="hero-btn hero-btn-secondary">
              <span>See my work</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>

        {/* Right: Profile Image & Social */}
        <div className="hero-right">
          {/* Decorative Top Element */}
          <div className="hero-decoration hero-decoration-top"></div>

          {/* Profile Image */}
          <div className="hero-profile-wrapper">
            <div className="hero-profile-border">
              <img 
                src={profileImage}
                alt="Rahul Pawar" 
                className="hero-profile-image"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="hero-social-vertical">
            <div className="hero-social-label">
            <h1>Follow me ...</h1>
            </div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-social-icon hero-social-linkedin">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero-social-icon hero-social-github">
              <Github size={20} />
            </a>
            <a href="mailto:contact@example.com" className="hero-social-icon hero-social-message">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
