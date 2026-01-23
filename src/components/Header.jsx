import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">💎</span>
          <span className="logo-text">GemStore</span>
        </div>
        <nav className="navigation">
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#catalog" className="nav-link">Catalog</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="cart-btn">🛒 Cart</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
