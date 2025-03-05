import React from 'react';
import '../../styles/style_about.css';
import missionImage from '../../images/mission_img.png';
import visionImage from '../../images/vision_img.png';

function MissionVision() {
  return (
    <div className="missionVision">
      <div className="container">
        <div className="missionVision__info">
          <div className="missionVision__block">
            <p className="subtitle">Our Mission</p>
            <h3>Inspire, Innovate, Share</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <img src={missionImage} alt="Mission" />
          </div>
          <div className="misionVision__block-reverse">
            <img src={visionImage} alt="Vision" />
            <p className="subtitle">Our Vision</p>
            <h3>Laser focus</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;