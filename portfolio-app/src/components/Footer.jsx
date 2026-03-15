import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Heart,
  Terminal,
  Send,
} from 'lucide-react';
import './Footer.css';

const socialLinks = [
  {
    href: 'https://github.com/Rahulpawar56',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://twitter.com',
    label: 'X (Twitter)',
    icon: Twitter,
  },
  {
    href: 'mailto:contact@rahulpawar.dev',
    label: 'Email',
    icon: Mail,
  },
];

const techStack = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'MongoDB',
  'PostgreSQL',
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand & Stack Section */}
          <div className="footer-brand">
            {/* <div className="footer-brand-header">
              <div className="footer-brand-icon">
                <Code2 size={20} />
              </div>
              <div>
                <h3 className="footer-brand-title">Rahul Pawar</h3>
                <div className="footer-brand-subtitle">
                  <Terminal size={12} />
                  <p>Software Engineer</p>
                </div>
              </div>
            </div> */}
            {/* <p className="footer-brand-desc">
              Full Stack Developer specializing in modern JavaScript ecosystems,
              cloud-native architectures, and scalable web solutions. Bringing
              technical excellence and innovation to every project.
            </p> */}

            {/* Tech Stack Pills */}
            {/* <div className="footer-tech-stack">
              {techStack.map((tech) => (
                <span key={tech} className="footer-tech-badge">
                  {tech}
                </span>
              ))}
            </div> */}

            {/* Social Icons */}
            <div className="footer-social">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-section-title">Get In Touch</h4>
            <div className="footer-contact">
              <a href="mailto:contact@rahulpawar.dev" className="footer-contact-link">
                <div className="footer-contact-icon">
                  <Mail size={14} />
                </div>
                <span>contact@rahulpawar.dev</span>
              </a>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <MapPin size={14} />
                </div>
                <span>India</span>
              </div>

              {/* CTA */}
              <Link to="/contact" className="footer-cta">
                <Send size={16} />
                <span>Let's Work Together</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Rahul Pawar. All rights reserved.
          </p>
          <p className="footer-credit">
            Built with
            <Heart size={12} />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
