// components/Footer.js
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© 2024 Fitness Challenge Tracker. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ fontSize: '30px', color: '#E1306C' }} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ fontSize: '30px', color: '#3b5998' }} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon style={{ fontSize: '30px', color: '#3b5998' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
