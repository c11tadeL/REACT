import React from 'react';

const PricingPlanCard = ({ 
  price, 
  priceLabel, 
  title, 
  description, 
  features, 
  buttonText, 
  isFeatured = false,
  buttonVariant = 'default' 
}) => {
  return (
    <div className={`pricing__plan ${isFeatured ? 'pricing__plan-featured' : ''}`}>
      <div className="pricing__plan-price">
        <h3>{price}{buttonVariant == 'dark' && <span className="plus">+</span>}</h3>
        <span className="price-label">{priceLabel}</span>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <ul className="pricing__plan-features">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className={feature.active ? 'feature-active' : 'feature-inactive'}
          >
            {feature.text}
          </li>
        ))}
      </ul>
      <div className="pricing__plan-action">
        <a href="#" className={`button ${buttonVariant === 'featured' ? 'button-featured' : buttonVariant === 'dark' ? 'button-dark' : ''}`}>
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default PricingPlanCard;