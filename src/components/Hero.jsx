import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SyncArchitecture = () => (
  <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="core-gold">
        <stop offset="0" stopColor="#F0D77C" stopOpacity="0.95" />
        <stop offset="0.38" stopColor="#D4AF37" stopOpacity="0.55" />
        <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="core-green">
        <stop offset="0" stopColor="#72AA8D" stopOpacity="0.8" />
        <stop offset="0.42" stopColor="#3D7D63" stopOpacity="0.35" />
        <stop offset="1" stopColor="#3D7D63" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="sync-stroke" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#7A6A48" stopOpacity="0.16" />
        <stop offset="0.48" stopColor="#B8942F" stopOpacity="0.55" />
        <stop offset="1" stopColor="#3D7D63" stopOpacity="0.3" />
      </linearGradient>
      <filter id="architecture-blur" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="9" />
      </filter>
    </defs>

    <g className="architecture-grid" fill="none" stroke="#554F45" strokeOpacity="0.07">
      <path d="M 40 190 H 1400 M 40 450 H 1400 M 40 710 H 1400" />
      <path d="M 225 70 V 830 M 720 70 V 830 M 1215 70 V 830" />
      <circle cx="720" cy="450" r="360" strokeDasharray="2 14" />
    </g>

    <g className="top-telemetry">
      <path d="M 330 156 H 1110" fill="none" stroke="#6D6559" strokeOpacity="0.14" />
      <circle cx="510" cy="156" r="4" fill="#A98938" />
      <circle cx="720" cy="156" r="4" fill="#1F1B14" fillOpacity="0.5" />
      <circle cx="930" cy="156" r="4" fill="#3D7D63" />
      <g fill="#514A3F" fontFamily="ui-monospace, Menlo, monospace" fontSize="9" fontWeight="700" letterSpacing="3">
        <text x="510" y="132" textAnchor="middle">STRATEGIA</text>
        <text x="720" y="132" textAnchor="middle">CONNESSIONE</text>
        <text x="930" y="132" textAnchor="middle">CONTROLLO</text>
      </g>
      <g fill="#FAF7F0" fillOpacity="0.68" stroke="#7A6A48" strokeOpacity="0.12">
        <rect x="438" y="174" width="144" height="38" rx="19" />
        <rect x="648" y="174" width="144" height="38" rx="19" />
        <rect x="858" y="174" width="144" height="38" rx="19" />
      </g>
      <g fill="#746B5D" fontFamily="ui-monospace, Menlo, monospace" fontSize="8" letterSpacing="2">
        <text x="510" y="198" textAnchor="middle">DEFINITA</text>
        <text x="720" y="198" textAnchor="middle">SINCRONIZZATA</text>
        <text x="930" y="198" textAnchor="middle">PERSONALE</text>
      </g>
    </g>

    {/* Strategy engine */}
    <g transform="translate(110 0)">
    <g className="system strategy-system">
      <circle cx="310" cy="450" r="178" fill="#FAF7F0" fillOpacity="0.22" stroke="#7A6A48" strokeOpacity="0.16" />
      <circle className="system-ring ring-a" cx="310" cy="450" r="138" fill="none" stroke="#A98938" strokeOpacity="0.38" strokeWidth="1.5" strokeDasharray="4 10" />
      <circle className="system-ring ring-b" cx="310" cy="450" r="96" fill="none" stroke="#1F1B14" strokeOpacity="0.18" />
      <circle cx="310" cy="450" r="74" fill="url(#core-gold)" filter="url(#architecture-blur)" />
      <g className="core-geometry" fill="none" stroke="#A98938" strokeWidth="2">
        <path d="M 310 394 L 358 422 V 478 L 310 506 L 262 478 V 422 Z" />
        <path d="M 310 414 L 340 432 V 468 L 310 486 L 280 468 V 432 Z" strokeOpacity="0.48" />
      </g>
      <circle className="core-dot" cx="310" cy="450" r="7" fill="#D4AF37" />
    </g>
    </g>

    {/* Synchronisation bridge */}
    <g className="sync-bridge">
      <path className="bridge-path" id="flow-path" d="M 472 450 C 585 450, 610 382, 720 382 S 850 450, 968 450" fill="none" stroke="url(#sync-stroke)" strokeWidth="2" />
      <path className="bridge-path" d="M 472 470 C 610 470, 610 520, 720 520 S 845 470, 968 470" fill="none" stroke="#1F1B14" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="5 10" />
      <g className="bridge-core">
        <circle cx="720" cy="450" r="48" fill="#FAF7F0" fillOpacity="0.78" stroke="#B8942F" strokeOpacity="0.3" />
        <circle cx="720" cy="450" r="32" fill="none" stroke="#1F1B14" strokeOpacity="0.16" strokeDasharray="3 7" />
        <path d="M 701 450 H 739 M 730 441 L 739 450 L 730 459" fill="none" stroke="#A98938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {[0, 0.9, 1.8].map((delay) => (
        <circle key={delay} className="data-packet" r="4.5" fill="#B8942F">
          <animateMotion dur="3.2s" begin={`${delay}s`} repeatCount="indefinite" path="M 472 450 C 585 450, 610 382, 720 382 S 850 450, 968 450" />
        </circle>
      ))}
    </g>

    {/* Personal account / protected capital */}
    <g transform="translate(-110 0)">
    <g className="system account-system">
      <circle cx="1130" cy="450" r="214" fill="#FAF7F0" fillOpacity="0.32" stroke="#3D7D63" strokeOpacity="0.18" />
      <circle className="system-ring ring-c" cx="1130" cy="450" r="174" fill="none" stroke="#3D7D63" strokeOpacity="0.28" strokeWidth="1.5" />
      <circle className="system-ring ring-d" cx="1130" cy="450" r="126" fill="none" stroke="#1F1B14" strokeOpacity="0.14" strokeDasharray="5 12" />
      <circle cx="1130" cy="450" r="92" fill="url(#core-green)" filter="url(#architecture-blur)" />
      <g className="account-vault">
        <rect x="1066" y="386" width="128" height="128" rx="28" fill="#F8F4EC" fillOpacity="0.65" stroke="#3D7D63" strokeOpacity="0.42" />
        <circle cx="1130" cy="450" r="34" fill="none" stroke="#3D7D63" strokeOpacity="0.56" strokeWidth="2" />
        <circle cx="1130" cy="450" r="8" fill="#3D7D63" />
        <path d="M 1130 458 V 477" stroke="#3D7D63" strokeWidth="5" strokeLinecap="round" />
      </g>
      <g className="capital-markers" fill="#3D7D63">
        <circle cx="1130" cy="276" r="4" /><circle cx="1304" cy="450" r="4" /><circle cx="1130" cy="624" r="4" /><circle cx="956" cy="450" r="4" />
      </g>
    </g>
    </g>
  </svg>
);

const MobileMinimalChart = () => (
  <svg className="h-full w-full" viewBox="0 0 390 844" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="mobile-market-area" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#D4AF37" stopOpacity="0.18" />
        <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
      </linearGradient>
    </defs>
    <g className="mobile-market-grid" stroke="#514A3F" strokeOpacity="0.08" strokeWidth="1">
      {[170, 290, 410, 530, 650, 770].map((y) => <line key={y} x1="18" y1={y} x2="372" y2={y} />)}
      {[42, 110, 178, 246, 314, 372].map((x) => <line key={x} x1={x} y1="140" x2={x} y2="790" />)}
    </g>
    <path className="mobile-market-area" d="M 18 710 C 72 690 88 735 130 660 S 195 625 222 548 S 278 500 306 405 S 342 335 372 280 L 372 790 L 18 790 Z" fill="url(#mobile-market-area)" />
    {[
      [40, 665, 722, 636, 748, '#FAFAF8', '#D4AF37'],
      [82, 682, 724, 650, 752, '#1F1B14', '#D4AF37'],
      [124, 615, 690, 584, 718, '#D4AF37', '#1F1B14'],
      [166, 592, 638, 558, 672, '#FAFAF8', '#D4AF37'],
      [208, 520, 604, 482, 636, '#D4AF37', '#1F1B14'],
      [250, 486, 534, 448, 570, '#1F1B14', '#D4AF37'],
      [292, 388, 500, 352, 538, '#D4AF37', '#1F1B14'],
      [334, 330, 408, 292, 442, '#FAFAF8', '#D4AF37'],
      [366, 246, 342, 214, 378, '#1F1B14', '#D4AF37'],
    ].map(([x, top, bottom, wickTop, wickBottom, fill, stroke], index) => (
      <g key={index} className="mobile-market-candle">
        <line className="mobile-market-wick" x1={x} y1={wickTop} x2={x} y2={wickBottom} stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <rect className="mobile-market-body" x={x - 12} y={top} width="24" height={bottom - top} rx="3" fill={fill} stroke={stroke} strokeWidth="2" />
      </g>
    ))}
  </svg>
);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const scope = gsap.context(() => {
      gsap.set('.architecture-grid', { opacity: 0 });
      gsap.set('.top-telemetry', { opacity: 0, y: -12 });
      gsap.set('.system', { opacity: 0, scale: 0.88, transformOrigin: 'center center' });
      gsap.set('.system-ring', { strokeDasharray: 1100, strokeDashoffset: 1100 });
      gsap.set('.core-geometry, .account-vault, .bridge-core', { opacity: 0, scale: 0.75, transformOrigin: 'center center' });
      gsap.set('.bridge-path', { strokeDasharray: 900, strokeDashoffset: 900 });
      gsap.set('.capital-markers, .sync-bridge text, .system text, .data-packet', { opacity: 0 });
      gsap.set('.hero-copy > *', { opacity: 0, y: 24 });
      gsap.set('.mobile-brand-wordmark', { opacity: 0, y: -10 });
      gsap.set('.mobile-market-grid, .mobile-market-area', { opacity: 0 });
      gsap.set('.mobile-market-wick, .mobile-market-body', { scaleY: 0, transformOrigin: 'bottom center', transformBox: 'fill-box' });

      gsap.timeline({ delay: 0.12 })
        .to('.architecture-grid', { opacity: 1, duration: 0.65 }, 0)
        .to('.top-telemetry', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.2)
        .to('.strategy-system', { opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(1.35)' }, 0.15)
        .to('.strategy-system .system-ring', { strokeDashoffset: 0, duration: 1.15, stagger: 0.08, ease: 'power2.inOut' }, 0.25)
        .to('.core-geometry', { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.7)' }, 0.62)
        .to('.bridge-path', { strokeDashoffset: 0, duration: 1.25, ease: 'power2.inOut' }, 0.72)
        .to('.bridge-core', { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.7)' }, 1.05)
        .to('.account-system', { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.35)' }, 1.1)
        .to('.account-system .system-ring', { strokeDashoffset: 0, duration: 1.15, stagger: 0.08, ease: 'power2.inOut' }, 1.18)
        .to('.account-vault', { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.7)' }, 1.48)
        .to('.capital-markers, .sync-bridge text, .system text, .data-packet', { opacity: 1, duration: 0.55, stagger: 0.035 }, 1.58)
        .to('.mobile-brand-wordmark', { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0.38)
        .to('.hero-copy > *', { opacity: 1, y: 0, duration: 0.58, stagger: 0.1, ease: 'power3.out' }, 1.25)
        .to('.mobile-market-grid', { opacity: 1, duration: 0.55 }, 0.1)
        .to('.mobile-market-wick', { scaleY: 1, duration: 0.3, stagger: 0.09, ease: 'power2.out' }, 0.3)
        .to('.mobile-market-body', { scaleY: 1, duration: 0.42, stagger: 0.09, ease: 'back.out(1.4)' }, 0.4)
        .to('.mobile-market-area', { opacity: 1, duration: 0.7 }, 1.05);


      gsap.to('.architecture-scene', {
        scale: 1.075,
        yPercent: -1,
        transformOrigin: '50% 50%',
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });
    }, heroRef);

    return () => scope.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-[#F5F1EA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_48%,rgba(61,125,99,0.09),transparent_28%),radial-gradient(circle_at_22%_48%,rgba(212,175,55,0.12),transparent_30%),linear-gradient(145deg,#FAF7F0_0%,#F5F1EA_55%,#ECE3D2_100%)]" />
      <div className="architecture-scene absolute inset-0 hidden opacity-[0.72] will-change-transform md:block"><SyncArchitecture /></div>
      <div className="absolute inset-0 opacity-[0.68] md:hidden"><MobileMinimalChart /></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_50%,rgba(250,247,240,0.9)_0%,rgba(250,247,240,0.68)_27%,rgba(245,241,234,0.08)_62%)] pointer-events-none" />

      <div className="mobile-brand-wordmark absolute inset-x-0 top-24 z-10 text-center md:hidden">
        <p className="text-[1.85rem] font-bold tracking-[0.11em] text-[#1F1B14]">FOREX CMY</p>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#B8942F]">Successo condiviso</p>
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center px-5 pb-8 pt-20 md:px-16 md:pb-0 md:pt-24">
        <div className="hero-copy mx-auto w-full max-w-4xl text-center">
          <h1 className="mb-4 text-[2rem] font-bold leading-[1.05] tracking-tight text-[#1F1B14] sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">Il tuo conto.<br />Il tuo capitale.<br /><span className="text-[#2A2A2A]/55">Una <span className="italic font-semibold text-[#D4AF37]">strategia connessa</span>.</span></h1>
          <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-[#2A2A2A]/60 md:mb-10 md:text-base">Una strategia definita opera sul tuo conto personale, mentre capitale e controllo restano tuoi.</p>
          <div className="flex w-full flex-col justify-center gap-3 sm:flex-row md:w-auto">
            <a href="/come-funziona" className="w-full rounded-full bg-[#1F1B14] px-7 py-3.5 text-center text-sm font-medium text-white shadow-[0_8px_24px_rgba(31,27,20,0.15)] transition-all duration-300 hover:bg-[#D4AF37] sm:w-auto">Scopri il sistema</a>
            <a href="/risultati" className="w-full rounded-full border border-[#2A2A2A]/25 bg-[#FAF7F0]/60 px-7 py-3.5 text-center text-sm font-medium text-[#2A2A2A]/75 backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] sm:w-auto">Consulta i risultati verificati</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
