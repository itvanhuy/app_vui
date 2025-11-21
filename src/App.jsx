import React from 'react';
import Avatar from './components/Avatar/Avatar';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Skills from './components/Skills/Skills';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import SocialLinks from './components/SocialLinks/SocialLinks';
import './App.css';

function App(){
  const profileData = {
    name: "Lê Văn Huy",
    title: "Backend Developer",
    avatar: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-1/557653156_1922988518617657_722600636305758120_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFYm-NGReqELkOaHW2CutQ2gUNVx07KQGGBQ1XHTspAYdrOqhLgHp3xrcoAtogB75V1z_syxs78uxl1HAvfGrpH&_nc_ohc=EA-NkMMf8xQQ7kNvwFLJhHi&_nc_oc=AdmL3luWxTb14BQOcyUPh1jSABrVY-zDl2FkjViXMjVoiwT-rAidMadpT6mI_MaveiQwiyVGTmztQK_ajHx65t4G&_nc_zt=24&_nc_ht=scontent.fdad2-1.fna&_nc_gid=BudLkRCMUstwpQ2F5lDeWg&oh=00_AfiIChs1d21V0mq8Go3zATAIc6MC0PCqjer_E3nit8Fw6A&oe=6925F2FF",
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