import React from 'react';
import './Header.css';


function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="school-info">
          <h1>TRƯỜNG CAO ĐẲNG ĐÀ NẴNG</h1>
          <h2>ĐÀ NẴNG COLLEGE</h2>
          <div className="address-info">
            <p><i className='fa fa-map-marker'></i>Trụ sở: 97 Tú Hồ Bình Thành, P. An Hải, TP. Đà Nẵng</p>
            <p>*Cơ sở: 210 Ngũ Hành Sơn, P. Hoà Hải, TP. Đà Nẵng</p>
            <p>*Cơ sở: LH-KT, Đ. Mai Đăng Chơn, P. Hoà Hải, TP. Đà Nẵng</p>
          </div>
        </div>
      </div>

      <nav className="navigation">
        <ul className="nav-menu">
          <li><a href="#home">TRANG CHỦ</a></li>
          <li><a href="#about">GIỚI THIỆU</a></li>
          <li><a href="#khoa-phong">KHOA - PHÒNG</a></li>
          <li><a href="#bao-tang">BẢO TÀNG</a></li>
          <li><a href="#tuyen-sinh">TUYỂN SINH</a></li>
          <li><a href="#nghien-cuu">NGHIÊN CỨU KH</a></li>
          <li><a href="#hoat-dong">HOẠT ĐỘNG</a></li>
          <li><a href="#lich-cong-tac">LỊCH CÔNG TÁC</a></li>
          <li><a href="#sinh-vien">SINH VIÊN</a></li>
          <li><a href="#doan-the">ĐOÀN THỂ</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;