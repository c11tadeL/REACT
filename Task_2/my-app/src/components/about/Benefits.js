import React from 'react';
import '../../styles/style_about.css';
import iconApproach from '../../images/icon_approach.png';
import iconCustom from '../../images/icon_custom.png';
import iconUser from '../../images/icon_user.png';
import logoipsum1 from '../../images/logoipsum_1.png';
import logoipsum2 from '../../images/logoipsum_2.png';
import logoipsum3 from '../../images/logoipsum_3.png';
import logoipsum4 from '../../images/logoipsum_4.png';
import logoipsum5 from '../../images/logoipsum_5.png';

function Benefits() {
  const benefitCards = [
    {
      icon: iconApproach,
      title: "Customize with ease",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
    },
    {
      icon: iconCustom,
      title: "Perfectly Responsive",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
    },
    {
      icon: iconUser,
      title: "Friendly Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
    }
  ];

  const logoIpsumLogos = [logoipsum1, logoipsum2, logoipsum3, logoipsum4, logoipsum5];

  return (
    <div className="benefits">
      <div className="container">
        <div className="benefits__title">
          <h2>The benefits of working with us</h2>
        </div>
        <div className="benefits__cards">
          {benefitCards.map((card, index) => (
            <div key={index} className="benefits__card">
              <img src={card.icon} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <div className="benefits__stats">
          <div className="benefits__stats-number">
            <h2>100.000+</h2>
            <p>Finsweet Users</p>
          </div>
          <div className="benefits__stats-logos">
            {logoIpsumLogos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;