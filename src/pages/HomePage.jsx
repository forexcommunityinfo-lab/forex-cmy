import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SmoothScroll } from '../components/SmoothScroll';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ScrollCandlestick from '../components/ScrollCandlestick';
import HomePageLinks from '../components/HomePageLinks';
import Footer from '../components/Footer';

// Compact landing page: visual introduction followed by links to focused pages.
const HomePage = () => {
  const location = useLocation();

  // Handle #hash navigation when arriving on / from another route
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Delay to allow layout to settle
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <SmoothScroll>
      <div className="App bg-[#FAFAF8]">
        <div className="grain-overlay" />
        <Navigation />

        <Hero />
        <ScrollCandlestick />
        <HomePageLinks />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default HomePage;
