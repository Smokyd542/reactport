import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'HTML5', level: '95%' },
    { name: 'CSS3', level: '85%' },
    { name: 'JAVASCRIPT', level: '90%' },
    { name: 'REACT JS', level: '80%' },
    { name: 'PHOTOSHOP', level: '70%' },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        
        <div className="skills-header">
          <div className="skills-icon-top">🛠️</div>
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-content">
          {/* Left Column: Progress Bars */}
          <div className="skills-bars">
            {skillsData.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="progress-line">
                  <div className="fill" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Description */}
          <div className="skills-text">
            <h3>Professional Experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas purus ex, varius non erat purus, venenatis corene puras. 
              Morbi ac ex cursus, varius eros ex, convallis sem. 
            </p>
            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
            <button className="skills-btn">Hire Me</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;