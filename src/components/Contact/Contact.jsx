import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h3 className="section-title">Liên hệ</h3>
      <div className="contact-info">
        <p className="contact-item">
          <span className="contact-icon">📧</span>
          Levanhuy06042003@gmail.com
        </p>
        <p className="contact-item">
          <span className="contact-icon">📞</span>
          0123-456-789
        </p>
        <p className="contact-item">
          <span className="contact-icon">📍</span>
          Đà Nẵng, Việt Nam
        </p>
      </div>
    </div>
  );
}

export default Contact;