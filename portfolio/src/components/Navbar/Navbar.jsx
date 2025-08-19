// components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-brand">
          <a href="#home">Portfolio</a>
        </div>
        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={closeMenu} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={closeMenu} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" onClick={closeMenu} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;