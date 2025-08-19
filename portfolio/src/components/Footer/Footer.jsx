// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">Portfolio</a>
          </div>
          <div className="footer-text">
            <p>&copy; {currentYear} Designed & Developed by Kinjal Kaneriya. All Rights Reserved.</p>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/kinjal-kaneriya-a32a0a353" target="_blank" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Kinjal-Patel23" target="_blank" className="social-link"><i className="fab fa-github"></i></a>
          </div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;