import React from 'react';
import PricingTitle from './PricingTitle';
import PricingPlans from './PricingPlans';
import '../../styles/style_pricing.css';

const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="container">
          <PricingTitle />
          <PricingPlans />
        </div>
      </div>
    </>
  );
};

export default Pricing;