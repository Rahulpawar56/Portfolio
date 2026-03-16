import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X, Home, FolderKanban, User, Mail, Terminal, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '../utils/cn';
import profileImage from '../assets/images/images.png';
import './Header.css';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/skills', label: 'Skills', icon: Code2 },
  { href: '/about', label: 'About', icon: User },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out header',
        isScrolled
          ? 'header--scrolled'
          : 'header--transparent'
      )}
    >
      <div className="header-content">
               <div className="header-top">
          {/* Left: Logo & Profile */}
          <Link to="/" className="logo-link">
            <img 
              src={profileImage}
              alt="Rahul Pawar" 
              className="logo-profile-image"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="logo-info">
              <h1 className="logo-title">Rahul Pawar</h1>
              <div className="logo-subtitle">
                <Terminal size={12} />
                <p>Software Engineer</p>
              </div>
            </div>
          </Link>

          {/* Right: Desktop Navigation + Mobile Menu */}
          <div className="header-right">
            <nav className="nav-desktop">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="nav-link"
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                    <span className="nav-underline"></span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'nav-mobile',
            isMobileMenuOpen ? 'nav-mobile--open' : ''
          )}
        >
          <nav className="nav-mobile-menu">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className="nav-mobile-link"
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          {/* Mobile Social Links */}
        </div>
      </div>
    </header>
  );
}

export default Header;
