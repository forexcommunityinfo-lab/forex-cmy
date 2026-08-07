import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis to GSAP ScrollTrigger
    if (window.gsap && window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
      
      window.gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      
      window.gsap.ticker.lagSmoothing(0);
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};