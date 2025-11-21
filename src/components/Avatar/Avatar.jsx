import React from 'react';
import './Avatar.css';

const Avatar = ({ src, alt, isOnline = true }) => {
  return (
    <div className="avatar-section">
      <img 
        src={src} 
        alt={alt} 
        className="avatar"
      />
      {isOnline && <div className="online-status"></div>}
    </div>
  );
};

export default Avatar;