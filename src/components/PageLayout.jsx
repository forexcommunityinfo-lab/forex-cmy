import React, { useEffect } from 'react';
import { SmoothScroll } from './SmoothScroll';
import Navigation from './Navigation';
import Footer from './Footer';

// Shared layout for all dedicated subpages
const PageLayout = ({ children }) => {
  useEffect(() => {
    // Scroll to top on route change / mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <div className="App bg-[#FAFAF8]">
        <div className="grain-overlay" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default PageLayout;
