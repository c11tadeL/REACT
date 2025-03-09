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
        <a href="https://www.instagram.com/____oscar.rr____" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src={iconInstagram} alt="Instagram" />
        </a>
        <a href="https://t.me/osccaaarrr" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src={iconTelegram} alt="Telegram" />
        </a>
        <a href="https://github.com/c11tadeL/REACT/tree/main/Vizitka/vizitka-app" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src={iconGitHub} alt="GitHub" />
        </a>
    </div>
        <p className="copyright">© Oleksandr Popilevych 2025</p>
      </div>
    </footer>
  );
};

export default Footer;