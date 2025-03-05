import React from 'react';
import '../../styles/style_about.css';
import heroImage from '../../images/heroAboutUs_img.png';

function AboutHero() {
  return (
    <div className="hero-about container">
      <div className="hero-about__info">
        <p className="subtitle">About us</p>
        <h1>Our designs solve<br /> problems</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <img src={heroImage} alt="About Us Hero" />
    </div>
  );
}

export default AboutHero;