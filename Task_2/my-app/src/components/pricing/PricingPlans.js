import React from 'react';
import PricingPlanCard from './PricingPlanCard';

const PricingPlans = () => {
  const plans = [
    {
      price: '$299',
      priceLabel: 'Per Design',
      title: 'Landing Page',
      description: 'When you\'re ready to go beyond prototyping in Figma.',
      features: [
        { text: 'All limited links', active: true },
        { text: 'Own analytics platform', active: true },
        { text: 'Chat support', active: true },
        { text: 'Optimize hashtags', active: false },
        { text: 'Unlimited users', active: false }
      ],
      buttonText: 'Get started',
      buttonVariant: 'default'
    },
    {
      price: '$399',
      priceLabel: 'Multi Design',
      title: 'Website Page',
      description: 'When you\'re ready to go beyond prototyping in Figma, Webflow\'s ready to help.',
      features: [
        { text: 'All limited links', active: true },
        { text: 'Own analytics platform', active: true },
        { text: 'Chat support', active: true },
        { text: 'Optimize hashtags', active: true },
        { text: 'Unlimited users', active: true }
      ],
      buttonText: 'Get started',
      buttonVariant: 'featured',
      isFeatured: true
    },
    {
      price: '$499',
      priceLabel: 'Per Design',
      title: 'Complex Project',
      description: 'When you\'re ready to go beyond prototyping in Figma.',
      features: [
        { text: 'All limited links', active: true },
        { text: 'Own analytics platform', active: true },
        { text: 'Chat support', active: true },
        { text: 'Optimize hashtags', active: true },
        { text: 'Unlimited users', active: true },
        { text: 'Assist and Help', active: true }
      ],
      buttonText: 'Contact us',
      buttonVariant: 'dark'
    }
  ];

  return (
    <div className="pricing__plans">
      {plans.map((plan, index) => (
        <PricingPlanCard 
          key={index}
          {...plan}
        />
      ))}
    </div>
  );
};

export default PricingPlans;