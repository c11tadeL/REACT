import React from 'react';
import iconInstagram from '../images/icon_instagram.png';
import iconTelegram from '../images/icon_telegram.svg';
import iconGitHub from '../images/icon_gitHub.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-border"></div>
      <div className="footer-content">
        <div className="social-icons">
          <a href="#" className="social-icon">
            <a href="#"><img src={iconInstagram} alt="Instagram" /></a>
          </a>
          <a href="#" className="social-icon">
            <a href="#"><img src={iconTelegram} alt="Telegram" /></a>
          </a>
          <a href="#" className="social-icon">
            <a href="#"><img src={iconGitHub} alt="GitHub" /></a>
          </a>
        </div>
        <p className="copyright">© Oleksandr Popilevych 2025</p>
      </div>
    </footer>
  );
};

export default Footer;