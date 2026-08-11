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
    // Deterministic initial state: avoids stale completed transforms after a
    // refresh, resize or ScrollTrigger recalculation.
    gsap.set('.phase1-lead-line', { scaleY: 0, opacity: 1, transformOrigin: 'top center' });
    gsap.set('.red-wick-top, .red-wick-bottom', { scaleY: 0, transformOrigin: 'top center' });
    gsap.set('.red-body', { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 });
    gsap.set('.recovery-body', { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 });
    gsap.set('.recovery-wick', { scaleY: 0, transformOrigin: 'bottom center' });
    gsap.set('.recovery-base', { scaleX: 0, transformOrigin: 'center center' });

    // One uninterrupted scroll sequence: connector → wick → body → lower wick.
    gsap.timeline({
      scrollTrigger: {
        trigger: phase1Ref.current,
        start: 'top bottom',
        end: 'top top',
        scrub: 0.45,
        invalidateOnRefresh: true,
      },
    })
      .to(
        '.phase1-lead-line',
        { scaleY: 1, duration: 0.28, ease: 'power2.inOut' }
      )
      .to(
        '.red-wick-top',
        { scaleY: 1, duration: 0.14, ease: 'power1.out' }
      )
      .to(
        '.red-body',
        { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 0.42, ease: 'power1.inOut' }
      )
      .to(
        '.red-wick-bottom',
        { scaleY: 1, duration: 0.16, ease: 'power1.out' }
      );

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

    // Phase 2: compact, unpinned transition. The content itself signals that
    // the page continues, without an empty holding scene.
    const phase2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: phase2Ref.current,
        start: 'top 88%',
        end: 'top 28%',
        scrub: 0.55,
      },
    });

    phase2Timeline
      .fromTo(
        '.phase2-accent',
        { scaleX: 0, transformOrigin: 'center center' },
        { scaleX: 1, duration: 0.2, ease: 'power2.out' }
      )
      .fromTo(
        '.phase2-text',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.2 },
        0.12
      );

    // Phase 3: Green Bullish Candle (Recovery)
    const phase3Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: phase3Ref.current,
        start: 'top 88%',
        end: 'top 5%',
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    phase3Timeline
      .to('.phase3-overlay', { opacity: 1, duration: 0.3 }, 0)
      .fromTo(
        '.phase3-text',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.15 },
        0.08
      )
      .to('.recovery-base', { scaleX: 1, duration: 0.18, ease: 'power2.out' }, 0.16)
      .to(
        '.recovery-body',
        { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 0.5, stagger: 0.075, ease: 'power2.inOut' },
        0.22
      )
      .to(
        '.recovery-wick',
        { scaleY: 1, duration: 0.28, stagger: 0.045, ease: 'power1.out' },
        0.28
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
        className="relative h-screen bg-[#FAFAF8] overflow-visible"
      >
        {/* Darkening overlay */}
        <div className="phase1-overlay absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/0 via-[#2A2A2A]/20 to-[#2A2A2A]/40 opacity-0" />

        {/* A single vertical layout guarantees physical continuity. */}
        <div className="absolute inset-x-0 -top-24 bottom-0 z-10 flex flex-col items-center pointer-events-none">
          <div className="phase1-lead-line min-h-0 flex-1 w-1 bg-gradient-to-b from-[#D4AF37]/25 via-[#D4AF37]/75 to-[#D4AF37] [clip-path:polygon(42%_0%,58%_0%,100%_100%,0%_100%)]" />
          <div className="flex flex-col items-center">
            <div className="red-wick-top w-1 h-40 bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.3)]" />
            <div className="red-body w-20 md:w-24 h-80 md:h-96 bg-[#FAFAF8] border-2 border-[#D4AF37] rounded-sm shadow-[0_24px_70px_rgba(31,27,20,0.12),0_0_28px_rgba(212,175,55,0.14)]" />
            <div className="red-wick-bottom w-1 h-32 bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.3)]" />
          </div>
          <div className="min-h-0 flex-1" />
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
        className="relative h-[78svh] min-h-[620px] bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.1),transparent_38%),linear-gradient(to_bottom,#F5F3F0_0%,#F2EBDD_100%)] overflow-hidden flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 z-20">
          <div className="phase2-accent mx-auto h-px w-24 bg-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.35)]" />
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
        className="relative h-screen -mt-px bg-[#FAFAF8] overflow-hidden"
      >
        <div className="phase3-overlay absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/40 via-[#2A2A2A]/20 to-[#2A2A2A]/0 opacity-0" />

        <div className="absolute inset-x-0 bottom-[9%] md:bottom-[8%] z-10 flex items-end justify-center gap-3 md:gap-6 px-4 pb-3 pointer-events-none">
          <div className="recovery-base absolute bottom-0 left-1/2 h-px w-[78%] max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

          <div className="flex flex-col items-center opacity-55">
            <div className="recovery-wick h-8 md:h-12 w-px bg-[#D4AF37]" />
            <div className="recovery-body h-24 md:h-36 w-9 md:w-11 rounded-sm border border-[#D4AF37] bg-[#FAFAF8]" />
            <div className="recovery-wick h-7 md:h-9 w-px bg-[#D4AF37]" />
          </div>

          <div className="flex flex-col items-center opacity-75">
            <div className="recovery-wick h-12 md:h-16 w-px bg-[#1F1B14]" />
            <div className="recovery-body h-40 md:h-56 w-11 md:w-14 rounded-sm border border-[#1F1B14] bg-[#D4AF37]/75" />
            <div className="recovery-wick h-8 md:h-12 w-px bg-[#1F1B14]" />
          </div>

          <div className="flex flex-col items-center">
            <div className="recovery-wick h-16 md:h-24 w-1 bg-[#1F1B14]" />
            <div className="recovery-body h-64 md:h-80 w-20 md:w-24 rounded-sm border-2 border-[#1F1B14] bg-[#D4AF37] shadow-[0_24px_70px_rgba(31,27,20,0.18),0_0_32px_rgba(212,175,55,0.2)]" />
            <div className="recovery-wick h-12 md:h-16 w-1 bg-[#1F1B14]" />
          </div>

          <div className="flex flex-col items-center opacity-80">
            <div className="recovery-wick h-10 md:h-14 w-px bg-[#D4AF37]" />
            <div className="recovery-body h-44 md:h-64 w-12 md:w-16 rounded-sm border border-[#D4AF37] bg-[#FAFAF8]" />
            <div className="recovery-wick h-10 md:h-14 w-px bg-[#D4AF37]" />
          </div>

          <div className="flex flex-col items-center opacity-50">
            <div className="recovery-wick h-8 md:h-12 w-px bg-[#1F1B14]" />
            <div className="recovery-body h-28 md:h-40 w-9 md:w-11 rounded-sm border border-[#1F1B14]/70 bg-[#D4AF37]/45" />
            <div className="recovery-wick h-7 md:h-9 w-px bg-[#1F1B14]" />
          </div>
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
