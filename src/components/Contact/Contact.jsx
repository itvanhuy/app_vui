import React from 'react';
import './Contact.css';

const Contact = ({ contact }) => {
  return (
    <div className="contact-section">
      <h3 className="section-title">Liên hệ</h3>
      <div className="contact-info">
        <p className="contact-item">
          <span className="contact-icon">📧</span>
          {contact.email}
        </p>
        <p className="contact-item">
          <span className="contact-icon">📞</span>
          {contact.phone}
        </p>
        <p className="contact-item">
          <span className="contact-icon">📍</span>
          {contact.location}
        </p>
      </div>
    </div>
  );
};

export default Contact;