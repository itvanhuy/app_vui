import React from 'react';
import './Avatar.css';

function Avatar() {
  return (
    <div className="avatar-section">
      <img 
        src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-1/557653156_1922988518617657_722600636305758120_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFYm-NGReqELkOaHW2CutQ2gUNVx07KQGGBQ1XHTspAYdrOqhLgHp3xrcoAtogB75V1z_syxs78uxl1HAvfGrpH&_nc_ohc=EA-NkMMf8xQQ7kNvwFLJhHi&_nc_oc=AdmL3luWxTb14BQOcyUPh1jSABrVY-zDl2FkjViXMjVoiwT-rAidMadpT6mI_MaveiQwiyVGTmztQK_ajHx65t4G&_nc_zt=24&_nc_ht=scontent.fdad2-1.fna&_nc_gid=BudLkRCMUstwpQ2F5lDeWg&oh=00_AfiIChs1d21V0mq8Go3zATAIc6MC0PCqjer_E3nit8Fw6A&oe=6925F2FF" 
        alt="Lê Văn Huy" 
        className="avatar"
      />
      <div className="online-status"></div>
    </div>
  );
}

export default Avatar;