import React from 'react';
import '../../styles/style_home.css';
import iconUser from '../../images/icon_user.png';
import iconCheck from '../../images/icon_check.png';
import iconCustom from '../../images/icon_custom.png';
import iconSupport from '../../images/icon_support.png';
import iconTimer from '../../images/icon_timer.png';
import iconApproach from '../../images/icon_approach.png';

function Features() {
  const features = [
    {
      id: 1,
      icon: iconUser,
      title: "Uses Client First",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
      id: 2,
      icon: iconCheck,
      title: "Two Free Revision Round",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
      id: 3,
      icon: iconCustom,
      title: "Template Customization",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
      id: 4,
      icon: iconSupport,
      title: "24/7 Support",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
      id: 5,
      icon: iconTimer,
      title: "Quick Delivery",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
      id: 6,
      icon: iconApproach,
      title: "Hands-on approach",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    }
  ];

  return (
    <div className="features">
      <div className="container">
        <p>Features</p>
        <h3>Design that solves problems, one product at a time</h3>
        <div className="features__info">
          {features.map(feature => (
            <div className="features__block" key={feature.id}>
              <img src={feature.icon} alt={feature.title} />
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;