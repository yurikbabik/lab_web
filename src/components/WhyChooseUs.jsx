import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: '✓',
      title: 'Authenticity Guaranteed',
      description: 'Every gemstone comes with certification of authenticity and quality assessment.'
    },
    {
      id: 2,
      icon: '⭐',
      title: 'Premium Quality',
      description: 'We source only the finest gems from trusted suppliers around the world.'
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Secure Transactions',
      description: 'Your purchases are protected with advanced encryption and secure payment systems.'
    },
    {
      id: 4,
      icon: '🚚',
      title: 'Fast Shipping',
      description: 'Quick and reliable delivery to your doorstep with tracking included.'
    },
    {
      id: 5,
      icon: '💬',
      title: 'Expert Support',
      description: 'Our gemstone specialists are available to help you choose the perfect stone.'
    },
    {
      id: 6,
      icon: '🎁',
      title: 'Custom Packaging',
      description: 'Luxurious gift packaging available for all your special occasions.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <h2 className="why-title">Why Choose GemStore?</h2>
        <p className="why-subtitle">
          Experience luxury and excellence with every purchase
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
