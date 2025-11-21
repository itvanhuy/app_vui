import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialPlatforms = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'GitHub', icon: '🐱', url: '#' }
  ];

  return (
    <div className="social-links">
      {socialPlatforms.map((platform, index) => (
        <a
          key={index}
          href={platform.url}
          className="social-icon"
          title={platform.name}
        >
          {platform.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;