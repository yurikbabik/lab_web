import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left side - Image */}
        <div className="hero-image">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
            <defs>
              <linearGradient id="gemGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="50%" stopColor="#764ba2" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="gemGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <filter id="shadow">
                <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.3" />
              </filter>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Background glow circle */}
            <circle cx="200" cy="200" r="150" fill="#667eea" opacity="0.1" />
            
            {/* Main gem - Large diamond shape */}
            <polygon points="200,80 320,200 200,320 80,200" fill="url(#gemGradient1)" filter="url(#shadow)" />
            
            {/* Facets - Top section */}
            <polygon points="200,80 260,140 200,160" fill="#667eea" opacity="0.6" />
            <polygon points="260,140 320,200 260,160" fill="#764ba2" opacity="0.7" />
            
            {/* Facets - Middle section */}
            <polygon points="140,160 200,160 170,220" fill="#a855f7" opacity="0.5" />
            <polygon points="260,160 200,160 230,220" fill="#ec4899" opacity="0.6" />
            
            {/* Facets - Bottom section */}
            <polygon points="200,320 140,260 200,280" fill="#764ba2" opacity="0.8" />
            <polygon points="200,320 260,260 200,280" fill="#a855f7" opacity="0.7" />
            
            {/* Light reflection - Top shine */}
            <ellipse cx="180" cy="120" rx="25" ry="35" fill="white" opacity="0.5" filter="url(#glow)" />
            
            {/* Light reflection - Middle shine */}
            <polygon points="200,160 220,180 200,190" fill="white" opacity="0.4" />
            
            {/* Decorative accent circles */}
            <circle cx="100" cy="100" r="20" fill="#667eea" opacity="0.2" />
            <circle cx="300" cy="120" r="15" fill="#ec4899" opacity="0.15" />
            <circle cx="320" cy="280" r="18" fill="#a855f7" opacity="0.2" />
          </svg>
        </div>

        {/* Right side - Content */}
        <div className="hero-text">
          <h1 className="hero-title">Discover Precious Gems</h1>
          <p className="hero-subtitle">
            Explore our exquisite collection of premium gemstones. Each stone is carefully selected and authenticated to ensure the highest quality and authenticity. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.
          </p>
          <button className="hero-btn">Explore Collection</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
