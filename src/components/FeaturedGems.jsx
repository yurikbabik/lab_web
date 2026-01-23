import React, { useContext, useState } from 'react';
import '../styles/FeaturedGems.css';
import { ProductsContext } from '../context/ProductsContext';
import { Link } from 'react-router-dom';

const FeaturedGems = () => {
  const { products } = useContext(ProductsContext);
  const [visible, setVisible] = useState(3);

  const showMore = () => setVisible((v) => Math.min(products.length, v + 3));

  return (
    <section className="featured-gems">
      <div className="featured-container">
        <h2 className="featured-title">Featured Gems Collection</h2>
        <p className="featured-subtitle">
          Carefully curated selection of premium gemstones
        </p>
        <div className="gems-grid">
          {products.slice(0, visible).map((gem) => (
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
                <Link to={`/product/${gem.id}`} className="view-btn-link">
                  <button className="view-btn">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-footer">
          {visible < products.length ? (
            <button className="view-more-btn" onClick={showMore}>View More Gems</button>
          ) : (
            <Link to="/catalog"><button className="view-more-btn">View All</button></Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGems;
