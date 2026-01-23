import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">💎</span>
          <span className="logo-text">GemStore</span>
        </Link>
        <nav className="navigation">
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/catalog" className="nav-link">Catalog</Link></li>
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
