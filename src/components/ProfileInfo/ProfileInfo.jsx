import React from 'react';
import './ProfileInfo.css';

function ProfileInfo({ name, title, bio }){
  return (
    <div className="profile-info">
      <h1 className="profile-name">{name}</h1>
      <h2 className="profile-title">{title}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileInfo;