import React from 'react';
import '../../styles/style_home.css';
import heroImage from '../../images/hero_img.svg';

function HeroSection() {
  return (
    <div className="hero container">
      <div className="hero__info">
        <h1>Building stellar websites for early startups</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <button className="btn">View Pricing</button>
      </div>
      <img src={heroImage} alt="Hero" />
    </div>
  );
}

export default HeroSection;