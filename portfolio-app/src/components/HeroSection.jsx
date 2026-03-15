import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import './HeroSection.css';

const roles = [
  'Full Stack Developer',
  'Web Application Architect',
  'JavaScript Specialist',
  'Open Source Contributor',
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="hero-section">
      {/* Background Effects */}
      <div className="hero-background">
        <div className="hero-gradient hero-gradient-primary"></div>
        <div className="hero-gradient hero-gradient-accent"></div>
      </div>

      <div className="hero-container">
        {/* Profile Image */}
        {/* Status Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot">
            <span className="hero-badge-dot-ping"></span>
            <span className="hero-badge-dot-solid"></span>
          </span>
          <span className="hero-badge-text">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          <span className="hero-title-intro">Hi, I'm</span>
          <span className="hero-title-name">Rahul Pawar</span>
        </h1>

        {/* Typing Animation */}
        <div className="hero-typing">
          <Sparkles size={16} className="hero-typing-spark" />
          <p className="hero-typing-text">
            {displayText}
            <span className="hero-typing-cursor"></span>
          </p>
          <Sparkles size={16} className="hero-typing-spark" />
        </div>

        {/* Description */}
        <p className="hero-description">
          I specialize in designing and developing scalable, high-performance web applications
          using modern technologies. Dedicated to creating elegant solutions, intuitive user
          experiences, and maintaining exceptional code quality.
        </p>

        {/* Social Icons */}
        <div className="hero-social">
          {[
            { href: 'https://github.com/Rahulpawar56', icon: Github, label: 'GitHub' },
            { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
            { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <span className="hero-scroll-text">Scroll</span>
          <ArrowDown size={16} className="hero-scroll-arrow" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
