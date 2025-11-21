import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  return (
    <div className="skills-section">
      <h3 className="section-title">Kỹ năng</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;