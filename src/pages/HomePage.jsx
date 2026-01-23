import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedGems from '../components/FeaturedGems';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedGems />
    </div>
  );
};

export default HomePage;
