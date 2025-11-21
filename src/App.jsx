import React from 'react';
import Avatar from './components/Avatar/Avatar';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Skills from './components/Skills/Skills';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import SocialLinks from './components/SocialLinks/SocialLinks';
import './App.css';

const App = () => {
  const profileData = {
    name: "Lê Văn Huy",
    title: "Backend Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Xin chào! Tôi là một developer đam mê học hỏi và sáng tạo. Tôi yêu thích việc xây dựng những ứng dụng web đẹp mắt và hiệu quả.",
    skills: ["JavaScript", "React", "CSS", "HTML", "Node.js", "TypeScript"],
    hobbies: ["Lập trình", "Đọc sách", "Chơi game", "Du lịch", "Nhiếp ảnh", "Âm nhạc"],
    contact: {
      email: "Levanhuy06042003@gmail.com",
      phone: "0123-456-789",
      location: "Đà Nẵng, Việt Nam"
    }
  };

  return (
    <div className="app">
      <div className="profile-card">
        <Avatar 
          src={profileData.avatar} 
          alt={profileData.name}
          isOnline={true}
        />
        
        <ProfileInfo 
          name={profileData.name}
          title={profileData.title}
          bio={profileData.bio}
        />
        
        <Skills skills={profileData.skills} />
        
        <Hobbies hobbies={profileData.hobbies} />
        
        <Contact contact={profileData.contact} />
        
        <SocialLinks />
      </div>
    </div>
  );
};

export default App;