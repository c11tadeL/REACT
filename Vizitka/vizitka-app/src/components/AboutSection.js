import React from 'react';
import '../styles/style.css';

const AboutSection = () => {
    return (
      <div className="about-section">
        <h2 className="about-title">About</h2>
        <div className="about-container">
          <div className="line-container">
            <div className="vertical-line"></div>
          </div>
          <div className="content-container">
            <p className="content-primary">
                I am a year student of the Bogdan Khmelnitsky National University of Cherkasy
            </p>
            <p className="content-secondary content-margin">
                 I am currently in my third year, major "Computer science".
            </p>
            <p className="content-secondary">
                I'm 20, I love to code and also play games. No favourite programming language yet.
                Favourite game is "Hearthstone".
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutSection;