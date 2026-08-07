import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SmoothScroll } from '../components/SmoothScroll';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ScrollCandlestick from '../components/ScrollCandlestick';
import HowItWorks from '../components/HowItWorks';
import VideoPresentation from '../components/VideoPresentation';
import Results from '../components/Results';
import Myfxbook from '../components/Myfxbook';
import Reviews from '../components/Reviews';
import FreeEbook from '../components/FreeEbook';
import Philosophy from '../components/Philosophy';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import FinalCTA from '../components/FinalCTA';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';

// Full-length landing page: contains every existing section, in original order.
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
        <HowItWorks />
        <VideoPresentation />
        <Results />
        <Myfxbook />
        <Reviews />
        <FreeEbook />
        <Marquee />
        <Philosophy />
        <FAQ />
        <Contact />
        <FinalCTA />
        <Newsletter />

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default HomePage;
