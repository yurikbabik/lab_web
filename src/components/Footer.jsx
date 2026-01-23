import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">💎</span>
            <span className="logo-text">GemStore</span>
          </div>
          <p className="footer-description">
            Premium gemstones for those who appreciate true luxury and natural beauty.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Gem Categories</h4>
          <ul className="footer-links">
            <li><a href="#rubies">Rubies</a></li>
            <li><a href="#emeralds">Emeralds</a></li>
            <li><a href="#sapphires">Sapphires</a></li>
            <li><a href="#diamonds">Diamonds</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-links">
            <a href="#facebook" className="social-link facebook">f</a>
            <a href="#twitter" className="social-link twitter">𝕏</a>
            <a href="#linkedin" className="social-link linkedin">in</a>
            <a href="#instagram" className="social-link instagram">📷</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2024 GemStore. All rights reserved. Premium Gemstones Collection.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
