import React, { useState } from 'react';
import '../styles/FeaturedGems.css';

const FeaturedGems = () => {
  const gemstones = [
    {
      id: 1,
      name: 'Ruby',
      carat: 2.5,
      price: 1500,
      description: 'Beautiful red gemstone with excellent clarity',
      image: '/images/ruby.svg'
    },
    {
      id: 2,
      name: 'Sapphire',
      carat: 3.0,
      price: 2000,
      description: 'Deep blue sapphire with brilliant shine',
      image: '/images/sapphire.svg'
    },
    {
      id: 3,
      name: 'Emerald',
      carat: 2.0,
      price: 1800,
      description: 'Rich green emerald stone',
      image: '/images/emerald.svg'
    },
    {
      id: 4,
      name: 'Diamond',
      carat: 1.5,
      price: 5000,
      description: 'Premium quality diamond'
    },
    {
      id: 5,
      name: 'Amethyst',
      carat: 4.0,
      price: 800,
      description: 'Purple quartz gemstone'
    },
    {
      id: 6,
      name: 'Topaz',
      carat: 3.5,
      price: 950,
      description: 'Golden yellow topaz'
    }
  ];

  const [visible, setVisible] = useState(3);
  const showMore = () => setVisible((v) => Math.min(gemstones.length, v + 3));

  return (
    <section className="featured-gems">
      <div className="featured-container">
        <h2 className="featured-title">Featured Gems Collection</h2>
        <p className="featured-subtitle">
          Carefully curated selection of premium gemstones
        </p>
        <div className="gems-grid">
          {gemstones.slice(0, visible).map((gem) => (
            <div key={gem.id} className="gem-card">
              <div className="gem-image-container">
                {gem.image ? (
                  <img src={gem.image} alt={gem.name} className="gem-image" />
                ) : (
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`fg-${gem.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#667eea" />
                        <stop offset="100%" stopColor="#764ba2" />
                      </linearGradient>
                    </defs>
                    <polygon points="100,40 160,100 100,160 40,100" fill={`url(#fg-${gem.id})`} />
                  </svg>
                )}
              </div>
              <div className="gem-info">
                <h3 className="gem-name">{gem.name}</h3>
                <div className="gem-specs">
                  <span className="spec-item">💎 {gem.carat} Carat</span>
                  <span className="spec-item">💰 ${gem.price.toFixed(2)}</span>
                </div>
                <p className="gem-description">{gem.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-footer">
          {visible < gemstones.length && (
            <button className="view-more-btn" onClick={showMore}>View More Gems</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGems;
