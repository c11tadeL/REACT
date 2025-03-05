import React from 'react';
import '../../styles/style_about.css';
import whoWeAreImage from '../../images/WhoWeAre_img.png';

function WhoWeAre() {
  return (
    <div className="whoWeAre">
      <div className="container">
        <p>Who we are</p>
        <div className="whoWeAre_block">
          <div className="whoWeAre__info">
            <h2>Goal focussed</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div className="whoWeAre__info">
            <h2>Continuous improvement</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <img src={whoWeAreImage} alt="Who We Are" />
      </div>
    </div>
  );
}

export default WhoWeAre;