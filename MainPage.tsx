import React from 'react';
import HeroSection from '../components/HeroSection';
import YouSection from '../components/YouSection';
import ThroughMyLensSection from '../components/ThroughMyLensSection';
import GiftsAndWishesSection from '../components/GiftsAndWishesSection';
import StarBackground from '../components/StarBackground';

const MainPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-navy-900 text-silver-100">
      <StarBackground />
      <HeroSection />
      <YouSection />
      <ThroughMyLensSection />
      <GiftsAndWishesSection />
    </div>
  );
};

export default MainPage;