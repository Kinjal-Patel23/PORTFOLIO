// components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-intro">
              <p>Hello, I'm</p>
            </div>
            <h1 className="hero-name">
              <span>Kinjal</span> <span>Kaneriya</span>
            </h1>
            <div className="hero-role">
              <h3>Full Stack Developer</h3>
            </div>
            <p className="hero-description">
              I build full stack web applications with clean code, modern design, and a focus on performance and scalability.
            </p>
            <div className="hero-buttons">
              <a 
                href="/public/images/Kinjal_Kaneriya.pdf" 
                className="btn btn-primary" 
                download="Kinjal_Kaneriya.pdf"
              >
                Download CV
              </a>
              <a href="#projects" className="btn btn-secondary">My Work</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="image-border">
                <img src="/images/profile_img.png" alt="Profile" />
              </div>
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;