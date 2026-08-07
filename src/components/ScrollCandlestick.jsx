import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollCandlestick = () => {
  const phase1Ref = useRef(null);
  const phase2Ref = useRef(null);
  const phase3Ref = useRef(null);

  useEffect(() => {
    // Phase 1: Red Bearish Candle (Market Pressure)
    const phase1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: phase1Ref.current,
        start: 'top top',
        end: '+=150%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    phase1Timeline
      .fromTo(
        '.red-wick-top',
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 0.2, ease: 'power1.out' }
      )
      .fromTo(
        '.red-body',
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 0.4, ease: 'power1.inOut' }
      )
      .fromTo(
        '.red-wick-bottom',
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 0.2, ease: 'power1.out' }
      )
      .to('.phase1-overlay', { opacity: 1, duration: 0.3 }, 0)
      .fromTo(
        '.phase1-text-1',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.3 },
        0.3
      )
      .fromTo(
        '.phase1-text-2',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.3 },
        0.5
      )
      .fromTo(
        '.phase1-text-3',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.3 },
        0.7
      );

    // Phase 2: Transition
    const phase2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: phase2Ref.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    phase2Timeline
      .fromTo(
        '.transition-line',
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.4, ease: 'power2.out' }
      )
      .fromTo(
        '.phase2-text',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.2 },
        0.2
      )
      .to('.transition-glow', { opacity: 0.3, scale: 1.2, duration: 0.4 }, 0);

    // Phase 3: Green Bullish Candle (Recovery)
    const phase3Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: phase3Ref.current,
        start: 'top top',
        end: '+=150%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    phase3Timeline
      .fromTo(
        '.green-wick-bottom',
        { scaleY: 0, transformOrigin: 'bottom center' },
        { scaleY: 1, duration: 0.2, ease: 'power1.out' }
      )
      .fromTo(
        '.green-body',
        { scaleY: 0, transformOrigin: 'bottom center' },
        { scaleY: 1, duration: 0.4, ease: 'power1.inOut' }
      )
      .fromTo(
        '.green-wick-top',
        { scaleY: 0, transformOrigin: 'bottom center' },
        { scaleY: 1, duration: 0.2, ease: 'power1.out' }
      )
      .to('.phase3-overlay', { opacity: 1, duration: 0.3 }, 0)
      .fromTo(
        '.surrounding-candle',
        { opacity: 0, scaleY: 0, transformOrigin: 'bottom center' },
        { opacity: 0.7, scaleY: 1, duration: 0.3, stagger: 0.1, ease: 'back.out(1.5)' },
        0.4
      )
      .fromTo(
        '.phase3-text',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.15 },
        0.5
      );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Phase 1: Red Bearish Candle (Market Pressure) */}
      <section
        ref={phase1Ref}
        className="relative h-screen bg-[#FAFAF8] overflow-hidden"
      >
        {/* Darkening overlay */}
        <div className="phase1-overlay absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/0 via-[#2A2A2A]/20 to-[#2A2A2A]/40 opacity-0" />

        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            {[...Array(12)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={66.67 * i}
                x2="1200"
                y2={66.67 * i}
                stroke="#2A2A2A"
                strokeWidth="1"
              />
            ))}
            {[...Array(16)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={75 * i}
                y1="0"
                x2={75 * i}
                y2="800"
                stroke="#2A2A2A"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        {/* Red Candlestick - Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className="red-wick-top w-1 h-40 bg-[#C74445]" />
          <div className="red-body w-20 md:w-24 h-80 md:h-96 bg-gradient-to-b from-[#C74445] to-[#A03234] rounded-sm shadow-2xl" />
          <div className="red-wick-bottom w-1 h-32 bg-[#C74445]" />
        </div>

        {/* Phase 1 Text Content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="phase1-text-1 text-4xl md:text-6xl lg:text-7xl font-bold text-[#2A2A2A] opacity-0">
              I mercati non si muovono in linea retta.
            </h2>
            <p className="phase1-text-2 text-xl md:text-3xl text-[#2A2A2A]/70 opacity-0">
              La volatilità non è un’eccezione. È parte del processo.
            </p>
            <p className="phase1-text-3 text-lg md:text-xl text-[#2A2A2A]/60 opacity-0">
              Ogni strategia deve essere valutata considerando rischio, disciplina e tempo.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 2: Transition Section */}
      <section
        ref={phase2Ref}
        className="relative h-screen bg-gradient-to-b from-[#F5F3F0] to-[#FAFAF8] overflow-hidden flex items-center justify-center"
      >
        <div className="absolute left-0 top-1/2 w-full h-px bg-[#D4AF37]/20 z-10">
          <div className="transition-line h-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
        </div>

        <div className="transition-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37] opacity-0 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 z-20">
          <h2 className="phase2-text text-4xl md:text-6xl lg:text-7xl font-bold text-[#2A2A2A] opacity-0">
            Non conta prevedere ogni movimento.
          </h2>
          <p className="phase2-text text-xl md:text-3xl text-[#2A2A2A]/70 opacity-0">
            Conta disporre di un sistema definito per gestirlo.
          </p>
        </div>
      </section>

      {/* Phase 3: Green Bullish Candle (Recovery) */}
      <section
        ref={phase3Ref}
        className="relative h-screen bg-gradient-to-b from-[#FAFAF8] to-[#F5F3F0] overflow-hidden"
      >
        <div className="phase3-overlay absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-[#3D9970]/5 to-[#3D9970]/10 opacity-0" />

        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            {[...Array(12)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={66.67 * i}
                x2="1200"
                y2={66.67 * i}
                stroke="#2A2A2A"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/4 flex flex-col-reverse items-center z-10">
          <div className="green-wick-bottom w-1 h-36 bg-[#3D9970]" />
          <div className="green-body w-24 md:w-28 h-80 md:h-[28rem] bg-gradient-to-t from-[#3D9970] to-[#4CAF81] rounded-sm shadow-2xl" />
          <div className="green-wick-top w-1 h-24 bg-[#3D9970]" />
        </div>

        <div className="absolute left-[30%] top-[55%] flex flex-col-reverse items-center opacity-0 z-0">
          <div className="surrounding-candle w-1 h-16 bg-[#3D9970]" />
          <div className="surrounding-candle w-12 h-40 bg-[#3D9970]/80 rounded-sm" />
          <div className="surrounding-candle w-1 h-10 bg-[#3D9970]" />
        </div>

        <div className="absolute left-[70%] top-[50%] flex flex-col-reverse items-center opacity-0 z-0">
          <div className="surrounding-candle w-1 h-14 bg-[#3D9970]" />
          <div className="surrounding-candle w-14 h-48 bg-[#3D9970]/80 rounded-sm" />
          <div className="surrounding-candle w-1 h-8 bg-[#3D9970]" />
        </div>

        <div className="absolute left-[20%] top-[60%] flex flex-col-reverse items-center opacity-0 z-0">
          <div className="surrounding-candle w-1 h-12 bg-[#3D9970]" />
          <div className="surrounding-candle w-10 h-32 bg-[#3D9970]/80 rounded-sm" />
          <div className="surrounding-candle w-1 h-8 bg-[#3D9970]" />
        </div>

        <div className="absolute inset-0 flex items-start justify-center pt-20 md:pt-32 pointer-events-none z-20">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="phase3-text text-4xl md:text-6xl lg:text-7xl font-bold text-[#2A2A2A] opacity-0">
              Costruito intorno a un processo, non a una promessa.
            </h2>
            <p className="phase3-text text-xl md:text-3xl text-[#2A2A2A]/70 opacity-0">
              Forex_CMY offre un sistema di copy trading progettato per replicare la strategia direttamente sul conto personale dell’utente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollCandlestick;
