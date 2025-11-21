import React from 'react';
import './Hobbies.css';

const Hobbies = ({ hobbies }) => {
  return (
    <div className="hobbies-section">
      <h3 className="section-title">Sở thích</h3>
      <div className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <span key={index} className="hobby-tag">
            {hobby}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;