import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Candle builder — computes wick + body coordinates from a center price
const c = (x, cy, bullish, size = 44) => ({
  x,
  cy,
  bullish,
  size,
  bodyTop: cy - size / 2,
  bodyBot: cy + size / 2,
  wickTop: cy - size / 2 - 18,
  wickBot: cy + size / 2 + 14,
});

// ── MOBILE chart (portrait: viewBox 500 x 900, 9 candles filling top-to-bottom) ──
const MOB = [
  c(60, 780, false, 44),
  c(110, 750, false, 48),
  c(160, 725, false, 42),
  c(210, 655, true, 52),
  c(260, 570, true, 48),
  c(310, 470, true, 52),
  c(360, 365, true, 54),
  c(410, 250, true, 52),
  c(460, 130, true, 48),
];

// ── DESKTOP chart (landscape: viewBox 1400 x 700, 16 candles) ──
const DESK = [
  c(90, 545, false, 40),
  c(170, 525, false, 44),
  c(250, 515, false, 38),
  c(330, 490, false, 42),
  c(410, 475, false, 38),
  c(490, 450, true, 46),
  c(570, 425, true, 42),
  c(650, 405, true, 40),
  c(730, 380, true, 46),
  c(810, 355, true, 44),
  c(890, 325, true, 42),
  c(970, 300, true, 48),
  c(1050, 270, true, 44),
  c(1130, 240, true, 46),
  c(1210, 205, true, 42),
  c(1290, 175, true, 40),
];

const lineFrom = (arr) =>
  arr
    .map((k, i) => {
      const closeY = k.bullish ? k.bodyTop : k.bodyBot;
      return `${i === 0 ? 'M' : 'L'} ${k.x} ${closeY}`;
    })
    .join(' ');

const MOB_LINE = lineFrom(MOB);
const DESK_LINE = lineFrom(DESK);

// ── Chart layers (grid, axes, area, candles, line, marker, labels) ──
const ChartLayers = ({ variant, candles, linePath, gridX, gridY, labels, markerX, markerY, markerLabelX }) => (
  <>
    <defs>
      <linearGradient id={`stroke-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B8942F" stopOpacity="0.7" />
        <stop offset="60%" stopColor="#D4AF37" stopOpacity="1" />
        <stop offset="100%" stopColor="#F0D267" stopOpacity="1" />
      </linearGradient>
      <linearGradient id={`area-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.22" />
        <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </linearGradient>
      <filter id={`glow-${variant}`} x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id={`marker-${variant}`}>
        <stop offset="0%" stopColor="#F5D882" stopOpacity="1" />
        <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Grid */}
    <g>
      {gridY.map((y) => (
        <line
          key={`h${y}`}
          className="grid-line"
          x1={gridX[0]}
          y1={y}
          x2={gridX[gridX.length - 1]}
          y2={y}
          stroke="#2A2A2A"
          strokeWidth="0.6"
        />
      ))}
      {gridX.map((x) => (
        <line
          key={`v${x}`}
          className="grid-line"
          x1={x}
          y1={gridY[0]}
          x2={x}
          y2={gridY[gridY.length - 1]}
          stroke="#2A2A2A"
          strokeWidth="0.6"
        />
      ))}
    </g>

    {/* Axes */}
    <line
      className="axis"
      x1={gridX[0]}
      y1={gridY[gridY.length - 1]}
      x2={gridX[gridX.length - 1]}
      y2={gridY[gridY.length - 1]}
      stroke="#2A2A2A"
      strokeWidth="1"
    />
    <line
      className="axis"
      x1={gridX[0]}
      y1={gridY[0]}
      x2={gridX[0]}
      y2={gridY[gridY.length - 1]}
      stroke="#2A2A2A"
      strokeWidth="1"
    />

    {/* Area fill under line */}
    <path
      className="area-fill"
      d={`${linePath} L ${candles[candles.length - 1].x} ${gridY[gridY.length - 1]} L ${candles[0].x} ${gridY[gridY.length - 1]} Z`}
      fill={`url(#area-${variant})`}
    />

    {/* Candles — each is a group with individually animated wicks + body */}
    {candles.map((k, i) => {
      const color = k.bullish ? '#3D9970' : '#C74445';
      const bodyH = k.bodyBot - k.bodyTop;
      const bodyW = variant === 'm' ? 22 : 32;
      return (
        <g key={i} className={`candle candle-${variant}-${i}`}>
          <line
            className="wick wick-top"
            x1={k.x}
            y1={k.wickTop}
            x2={k.x}
            y2={k.bodyTop}
            stroke={color}
            strokeWidth={variant === 'm' ? 2 : 2.5}
            strokeLinecap="round"
          />
          <rect
            className="body"
            x={k.x - bodyW / 2}
            y={k.bodyTop}
            width={bodyW}
            height={bodyH}
            fill={color}
            opacity="0.94"
            rx="2"
          />
          <line
            className="wick wick-bottom"
            x1={k.x}
            y1={k.bodyBot}
            x2={k.x}
            y2={k.wickBot}
            stroke={color}
            strokeWidth={variant === 'm' ? 2 : 2.5}
            strokeLinecap="round"
          />
        </g>
      );
    })}

    {/* Price line — drawn last, on top */}
    <path
      className="price-line"
      d={linePath}
      stroke={`url(#stroke-${variant})`}
      strokeWidth={variant === 'm' ? 2.8 : 3}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter={`url(#glow-${variant})`}
    />

    {/* Active price marker */}
    <g className="active-price">
      <circle cx={markerX} cy={markerY} r="28" fill={`url(#marker-${variant})`} />
      <circle cx={markerX} cy={markerY} r={variant === 'm' ? 5 : 6} fill="#F5D882">
        <animate attributeName="opacity" values="0.55;1;0.55" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx={markerX} cy={markerY} r={variant === 'm' ? 5 : 6} fill="none" stroke="#D4AF37" strokeWidth="1.5">
        <animate attributeName="r" values={variant === 'm' ? '5;13;5' : '6;16;6'} dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Labels */}
    {labels.map((l, i) => (
      <text
        key={i}
        className="chart-label"
        x={l.x}
        y={l.y}
        fontSize={l.size || (variant === 'm' ? 11 : 13)}
        fill="#2A2A2A"
        fontFamily="ui-monospace, Menlo, monospace"
      >
        {l.text}
      </text>
    ))}

    {/* Live badge next to marker */}
    <g className="chart-label">
      <rect
        x={markerLabelX}
        y={markerY - 12}
        width={variant === 'm' ? 44 : 54}
        height="20"
        rx="10"
        fill="#D4AF37"
        opacity="0.16"
      />
      <circle cx={markerLabelX + 10} cy={markerY - 2} r="3" fill="#3D9970" />
      <text
        x={markerLabelX + 18}
        y={markerY + 2}
        fontSize={variant === 'm' ? 9 : 11}
        fill="#2A2A2A"
        fontFamily="ui-monospace, Menlo, monospace"
        fontWeight="600"
      >
        LIVE
      </text>
    </g>
  </>
);

const Hero = () => {
  const heroRef = useRef(null);
  const chartMobRef = useRef(null);
  const chartDeskRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const mm = gsap.matchMedia();

    // Reduced motion — show everything statically
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(['.grid-line', '.axis', '.area-fill', '.chart-label', '.active-price'], { opacity: 1 });
      gsap.set('.price-line', { strokeDashoffset: 0 });
      gsap.set(['.wick', '.body'], { scaleY: 1 });
      gsap.set(['.hero-eyebrow', '.hero-title', '.hero-sub', '.hero-cta-primary', '.hero-cta-secondary'], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    mm.add(
      {
        isMobile: '(max-width: 767px)',
        isDesktop: '(min-width: 768px)',
      },
      (ctx) => {
        const { isMobile } = ctx.conditions;
        const scope = isMobile ? '.chart-mobile' : '.chart-desktop';
        const candleCount = isMobile ? MOB.length : DESK.length;
        const variant = isMobile ? 'm' : 'd';

        // ── INITIAL STATE (real elements, no wrapper scale) ──
        gsap.set(`${scope} .grid-line`, { opacity: 0 });
        gsap.set(`${scope} .axis`, { opacity: 0 });
        gsap.set(`${scope} .area-fill`, { opacity: 0 });
        gsap.set(`${scope} .price-line`, { strokeDasharray: 3000, strokeDashoffset: 3000 });
        gsap.set(`${scope} .wick-top`, {
          scaleY: 0,
          transformOrigin: 'center bottom',
          transformBox: 'fill-box',
        });
        gsap.set(`${scope} .wick-bottom`, {
          scaleY: 0,
          transformOrigin: 'center top',
          transformBox: 'fill-box',
        });
        gsap.set(`${scope} .body`, {
          scaleY: 0,
          transformOrigin: 'center bottom',
          transformBox: 'fill-box',
        });
        gsap.set(`${scope} .chart-label`, { opacity: 0 });
        gsap.set(`${scope} .active-price`, { opacity: 0, scale: 0, transformOrigin: 'center center', transformBox: 'fill-box' });

        gsap.set(['.hero-eyebrow', '.hero-title', '.hero-sub', '.hero-cta-primary', '.hero-cta-secondary'], {
          opacity: 0,
          y: 24,
        });

        // ── INTRO TIMELINE ──
        const tl = gsap.timeline({ delay: 0.15 });

        // Phase 1: Grid + axes appear
        tl.to(
          `${scope} .grid-line`,
          { opacity: 0.14, duration: 0.5, stagger: 0.01, ease: 'power1.out' },
          0
        ).to(`${scope} .axis`, { opacity: 0.35, duration: 0.45, ease: 'power2.out' }, 0.1);

        // Phase 2: Price path draws left to right
        tl.to(
          `${scope} .price-line`,
          { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut' },
          0.25
        );

        // Phase 3: Each candle constructs individually — wick-top → body → wick-bottom
        for (let i = 0; i < candleCount; i++) {
          const start = 0.5 + i * (isMobile ? 0.09 : 0.075);
          tl.to(
            `${scope} .candle-${variant}-${i} .wick-top`,
            { scaleY: 1, duration: 0.12, ease: 'power2.out' },
            start
          )
            .to(
              `${scope} .candle-${variant}-${i} .body`,
              { scaleY: 1, duration: 0.22, ease: 'back.out(1.7)' },
              start + 0.08
            )
            .to(
              `${scope} .candle-${variant}-${i} .wick-bottom`,
              { scaleY: 1, duration: 0.12, ease: 'power2.out' },
              start + 0.22
            );
        }

        // Phase 4: Area, labels, active-price marker
        tl.to(`${scope} .area-fill`, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 1.35)
          .to(
            `${scope} .chart-label`,
            { opacity: 0.55, duration: 0.4, stagger: 0.04, ease: 'power1.out' },
            1.55
          )
          .to(
            `${scope} .active-price`,
            { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.8)' },
            1.75
          );

        // Phase 6: Hero content reveal
        const contentStart = isMobile ? 2.1 : 2.2;
        tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, contentStart)
          .to(
            '.hero-title',
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            contentStart + 0.15
          )
          .to(
            '.hero-sub',
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            contentStart + 0.45
          )
          .to(
            '.hero-cta-primary',
            { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
            contentStart + 0.65
          )
          .to(
            '.hero-cta-secondary',
            { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
            contentStart + 0.75
          );

        // ── PHASE 5: SCROLL-LINKED CINEMATIC ZOOM ──
        // Real transform on the whole chart-scene wrapper (contains the animated SVG)
        const zoomTarget = isMobile ? '.chart-scene-mob' : '.chart-scene-desk';
        const zoomConfig = isMobile
          ? { scale: 2.2, xPercent: -22, yPercent: -6, origin: '82% 30%' }
          : { scale: 2.8, xPercent: -14, yPercent: -4, origin: '80% 22%' };

        gsap.to(zoomTarget, {
          scale: zoomConfig.scale,
          xPercent: zoomConfig.xPercent,
          yPercent: zoomConfig.yPercent,
          transformOrigin: zoomConfig.origin,
          ease: 'none',
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            end: '+=110%',
            scrub: 1.2,
          },
        });

        // Fade the text out as the zoom proceeds
        gsap.to(
          ['.hero-eyebrow', '.hero-title', '.hero-sub', '.hero-cta-primary', '.hero-cta-secondary'],
          {
            opacity: 0,
            y: -18,
            ease: 'none',
            stagger: 0.02,
            scrollTrigger: {
              trigger: heroEl,
              start: 'top top',
              end: '+=45%',
              scrub: 1,
            },
          }
        );
      }
    );

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      mm.revert();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full overflow-hidden bg-[#F5F1EA]"
      style={{ height: '100svh' }}
    >
      {/* Warm ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EF] via-[#F5F1EA] to-[#EDE5D5] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] max-w-[900px] max-h-[900px] bg-[#D4AF37] opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

      {/* ── MOBILE chart scene (portrait, top-aligned) ── */}
      <div
        ref={chartMobRef}
        className="chart-scene-mob md:hidden absolute inset-0 will-change-transform"
      >
        <svg
          className="chart-mobile w-full h-full"
          viewBox="0 0 500 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ChartLayers
            variant="m"
            candles={MOB}
            linePath={MOB_LINE}
            gridX={[40, 130, 220, 310, 400, 480]}
            gridY={[80, 240, 400, 560, 720, 820]}
            labels={[
              { x: 10, y: 90, text: '1.2850' },
              { x: 10, y: 410, text: '1.2540' },
              { x: 10, y: 730, text: '1.2210' },
              { x: 55, y: 855, text: 'JAN' },
              { x: 240, y: 855, text: 'MAR' },
              { x: 430, y: 855, text: 'MAY' },
            ]}
            markerX={460}
            markerY={106}
            markerLabelX={385}
          />
        </svg>
      </div>

      {/* ── DESKTOP chart scene (landscape) ── */}
      <div
        ref={chartDeskRef}
        className="chart-scene-desk hidden md:block absolute inset-0 will-change-transform"
      >
        <svg
          className="chart-desktop w-full h-full"
          viewBox="0 0 1400 700"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ChartLayers
            variant="d"
            candles={DESK}
            linePath={DESK_LINE}
            gridX={[60, 260, 460, 660, 860, 1060, 1260, 1340]}
            gridY={[100, 220, 340, 460, 580, 640]}
            labels={[
              { x: 12, y: 226, text: '1.2860' },
              { x: 12, y: 466, text: '1.2540' },
              { x: 12, y: 646, text: '1.2210' },
              { x: 170, y: 675, text: 'JAN' },
              { x: 650, y: 675, text: 'MAR' },
              { x: 1130, y: 675, text: 'MAY' },
            ]}
            markerX={1290}
            markerY={155}
            markerLabelX={1210}
          />
        </svg>
      </div>

      {/* Legibility gradient — subtle, only at the bottom where text lives */}
      <div className="absolute inset-x-0 bottom-0 h-[42%] md:h-[55%] bg-gradient-to-t from-[#F5F1EA] via-[#F5F1EA]/85 to-transparent pointer-events-none" />

      {/* HERO TEXT — moved to TOP (just below nav) on mobile; centered on desktop */}
      <div className="absolute inset-0 flex flex-col justify-start pt-24 md:justify-center md:pt-0 pointer-events-none z-10">
        <div className="w-full px-6 md:px-16 md:max-w-2xl pointer-events-auto text-center md:text-left">
          {/* Eyebrow */}
          <div className="hero-eyebrow inline-flex items-center gap-2 mb-4 md:mb-6">
            <span className="w-6 h-px bg-[#D4AF37]" />
            <span className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#7A6A48] font-medium">
              Sistema di Copy Trading
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-title text-[2rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1F1B14] mb-4 md:mb-6">
            Il tuo conto.
            <br />
            Il tuo capitale.
            <br />
            <span className="text-[#2A2A2A]/55">
              Una{' '}
              <span className="text-[#D4AF37] italic font-semibold">strategia connessa</span>
              <span className="text-[#2A2A2A]/55">.</span>
            </span>
          </h1>

          {/* Sub */}
          <p className="hero-sub text-sm md:text-base text-[#2A2A2A]/60 max-w-md md:max-w-lg mx-auto md:mx-0 mb-6 md:mb-10 leading-relaxed">
            Una strategia definita opera sul tuo conto personale, mentre capitale e controllo restano tuoi.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start">
            <a
              href="#how-it-works"
              className="hero-cta-primary w-full sm:w-auto px-7 py-3.5 bg-[#1F1B14] text-white text-sm font-medium rounded-full hover:bg-[#D4AF37] transition-all duration-300 text-center shadow-[0_8px_24px_rgba(31,27,20,0.15)]"
            >
              Scopri il sistema
            </a>
            <a
              href="#results"
              className="hero-cta-secondary w-full sm:w-auto px-7 py-3.5 bg-transparent border border-[#2A2A2A]/25 text-[#2A2A2A]/75 text-sm font-medium rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-center"
            >
              Consulta i risultati verificati
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
