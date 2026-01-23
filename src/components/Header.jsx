import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

const Header = () => {
  const cartItems = useSelector(state => state.items);
  const cartCount = cartItems.length;

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
          <Link to="/cart" className="cart-btn-link">
            <button className="cart-btn">🛒 Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
