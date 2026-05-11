import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Home, FolderKanban, User, Mail, Terminal } from 'lucide-react';
import { cn } from '../utils/cn';
import profileImage from '../assets/images/images.png';
import './Header.css';

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: FolderKanban },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

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
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="logo-link">
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
          </a>

          {/* Right: Desktop Navigation + Mobile Menu */}
          <div className="header-right">
            <nav className="nav-desktop">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn("nav-link", isActive && "nav-link-active")}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                    <span className="nav-underline"></span>
                  </a>
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
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn("nav-mobile-link", isActive && "nav-mobile-link-active")}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </a>
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
