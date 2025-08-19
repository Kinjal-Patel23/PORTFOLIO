// components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Responsive Design', level: 95 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        <div className="skills-content">
          <div className="skills-text">
            <h3>My Expertise Areas</h3>
            <p>
              I specialize in building complete web applications — from designing responsive frontends to developing robust backends. My expertise includes frontend technologies, server-side development, database integration, and creating smooth user experiences.
            </p>
            <p>
              I’m passionate about clean code, modern design principles, and writing scalable, maintainable applications. I continuously focus on improving my skills, building real-world projects, and becoming a better developer with each step.
            </p>
          </div>
          <div className="skills-bars">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;