import React from 'react';
import '../styles/style.css';
import HeroImage from '../images/me.jpg';

const HeroSection = () => {
    return (
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hello</h1>
          <h1 className="hero-title">I'm Oleksandr</h1>
          <h1 className="hero-title hero-title-last">Popilevych</h1>
          <p className="hero-description">
                A young student who is a fast learner.
          </p>
        </div>
        <div className="profile-container">
          <div className="gradient-background"></div>
          <div className="image-wrapper">
            <img src={HeroImage} alt="Portrait" className="profile-image" />
          </div>
        </div>
      </div>
    );
};

export default HeroSection;