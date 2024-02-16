import React from 'react';
import './Footer.scss';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <h4 className="footer__title">Location</h4>
          <p>9/74 Willandra Dr, Epping VIC 3076</p>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">Phone</h4>
          <p>0416 476 007</p>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">Hours</h4>
          <p>Monday - Saturday</p>
          <p>9am - 5pm</p>
          <p>Closed Sunday</p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__links">
          <a onClick={() => navigate('/contact-us')}>Book  Service</a>
          <a onClick={() => navigate('/contact-us')} href="#">Get a Quote</a>
          <a onClick={() => navigate('/services')} href="#">Services</a>
          <a onClick={() => navigate('/about-us')}>About</a>
        </div>
        <div className="footer__legal">
          <p>© Copyright 2024 Elavative Autoworks | Powered By LeadingLocal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
