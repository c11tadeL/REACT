import React from 'react';
import '../../styles/style_home.css';
import iconFacebook from '../../images/icon_facebook.svg';
import iconTwitter from '../../images/icon_twitter.svg';
import iconInstagram from '../../images/icon_instagram.svg';
import iconLinkedin from '../../images/icon_linkedin.svg';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <span className="logo">{'{Finsweet'}</span>
            <p>We are always open to discuss your project and improve your online presence.</p>
            <div className="footer__contact-box">
              <div className="footer__contact-item">
                <h4>Email me at</h4>
                <p>contact@website.com</p>
              </div>
              <div className="footer__contact-item">
                <h4>Call us</h4>
                <p>0927 6277 28525</p>
              </div>
            </div>
          </div>
          <div className="footer__talk">
            <h3>Lets Talk!</h3>
            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
            <div className="footer__socials">
              <a href="#"><img src={iconFacebook} alt="Facebook" /></a>
              <a href="#"><img src={iconTwitter} alt="Twitter" /></a>
              <a href="#"><img src={iconInstagram} alt="Instagram" /></a>
              <a href="#"><img src={iconLinkedin} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__bottom">
        <div className="container">
          <p>Copyright 2022, Finsweet.com</p>
          <ul className="footer__menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;