import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>TRƯỜNG CAO ĐẲNG ĐÀ NẴNG</h4>
          <p>Địa chỉ: 97 Tú Hồ Bình Thành, P. An Hải, TP. Đà Nẵng</p>
          <p>Điện thoại: 0236.123.456</p>
          <p>Email: info@caodangdanang.edu.vn</p>
        </div>
        
        <div className="footer-section">
          <h4>LIÊN KẾT NHANH</h4>
          <ul>
            <li><a href="#tuyen-sinh">Tuyển sinh 2025</a></li>
            <li><a href="#dao-tao">Đào tạo</a></li>
            <li><a href="#nghien-cuu">Nghiên cứu khoa học</a></li>
            <li><a href="#hop-tac">Hợp tác quốc tế</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#youtube">YouTube</a>
            <a href="#zalo">Zalo</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 TRƯỜNG CAO ĐẲNG ĐÀ NẴNG. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;