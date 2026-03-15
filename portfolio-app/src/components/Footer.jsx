import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MapPin, Heart, Send } from 'lucide-react';
import './Footer.css';

const socialLinks = [
  { href: 'https://github.com/Rahulpawar56', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://twitter.com', label: 'X (Twitter)', icon: Twitter },
  { href: 'mailto:contact@rahulpawar.dev', label: 'Email', icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Social Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Follow</h4>
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
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Get In Touch</h4>
            <div className="footer-contact">
              <a href="mailto:contact@rahulpawar.dev" className="footer-contact-link">
                <Mail size={16} />
                <span>contact@rahulpawar.dev</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="footer-section">
            <h4 className="footer-section-title">Connect</h4>
            <Link to="/contact" className="footer-cta">
              <Send size={16} />
              <span>Let's Collaborate</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Rahul Pawar. All rights reserved.
          </p>
          <p className="footer-credit">
            Built with <Heart size={14} /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
