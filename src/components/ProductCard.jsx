import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';
import PrimaryButton from './PrimaryButton';

const ProductCard = ({ id, name, carat, price, image, description }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
          <polygon points="100,40 160,100 100,160 40,100" fill={`url(#gradient-${id})`} />
          <ellipse cx="85" cy="70" rx="15" ry="20" fill="white" opacity="0.4" />
        </svg>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-carat">{carat} Carat</p>
        <p className="product-description">{description}</p>
        
        <div className="product-footer">
          <span className="product-price">${price}</span>
          <Link to={`/product/${id}`}>
            <PrimaryButton className="view-details">View Details</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
