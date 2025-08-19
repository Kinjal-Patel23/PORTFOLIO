// components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="glow glow-3"></div>
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>I'm a Full Stack Developer</h3>
            <div className="about-paragraphs">
              <p>
                Hello! I'm Kinjal Kaneriya, a passionate full stack developer
                who loves building complete web applications — from frontend
                design to backend logic.
              </p>
              <p>
                My journey in web development began during college, where I got
                curious about how websites work. I started learning on my own
                through tutorials, projects, and lots of trial-and-error. Later,
                I joined full stack development classes to strengthen my skills
                and work on real-world projects.
              </p>
              <p>
                I enjoy creating clean, responsive UIs and connecting them with
                powerful, scalable backends. I love turning ideas into
                functional web experiences using technologies like HTML, CSS,
                JavaScript, React, Node.js, Express, and MongoDB.
              </p>
              <p>
                When I'm not coding, I like exploring new tools and practicing
                what I've learned to become better each day.
              </p>
            </div>
            <div className="about-button">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="about-visual">
            <div className="tech-stack">
              <div className="tech-icon html">HTML</div>
              <div className="tech-icon css">CSS</div>
              <div className="tech-icon js">JS</div>
              <div className="tech-icon react">React</div>
              <div className="tech-icon node">Node</div>
              <div className="tech-icon db">DB</div>
            </div>
            {/* <div className="experience-card">
              <div className="experience-number">2+</div>
              <div className="experience-text">Years of Experience</div>
            </div> */}
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Kinjal Kaneriya</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">kkaneriya11@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Rajkot, Gujarat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
