import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Maximize2, TrendingUp, X } from 'lucide-react';

const MYFXBOOK_SCREENSHOT = '/images/myfxbook/verifica-myfxbook.png';

const Myfxbook = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isScreenshotOpen, setIsScreenshotOpen] = useState(false);

  useEffect(() => {
    if (!isScreenshotOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsScreenshotOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isScreenshotOpen]);

  return (
    <section
      id="myfxbook"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#F5F3F0] to-[#FAFAF8] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <TrendingUp className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
            <h2 className="text-5xl md:text-7xl font-bold text-[#2A2A2A]">
              Verifica Myfxbook
            </h2>
          </div>
          <p className="text-xl text-[#2A2A2A]/60 max-w-2xl mx-auto">
            Verifica indipendente delle performance e dell’attività di trading
          </p>
        </motion.div>

        {/* Myfxbook container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white/60 backdrop-blur-sm border border-[#2A2A2A]/10 rounded-3xl p-8 md:p-12 shadow-xl"
        >
          {/* Verified Myfxbook screenshot */}
          <button
            type="button"
            onClick={() => setIsScreenshotOpen(true)}
            className="group/screenshot relative block w-full mb-8 overflow-hidden rounded-2xl border border-[#2A2A2A]/10 bg-[#17171d] shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D4AF37]/40"
            aria-label="Apri lo screenshot Myfxbook a schermo intero"
          >
            <img
              src={MYFXBOOK_SCREENSHOT}
              alt="Dashboard Myfxbook verificata con statistiche, grafico dei profitti e calendario delle operazioni"
              className="block h-auto w-full transition-transform duration-500 group-hover/screenshot:scale-[1.01]"
              loading="lazy"
            />
            <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#17171d]/85 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-colors group-hover/screenshot:bg-[#D4AF37]">
              <Maximize2 className="h-4 w-4" />
              Ingrandisci
            </span>
          </button>

          {/* Info grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#FAFAF8] rounded-xl p-6">
              <div className="text-sm text-[#2A2A2A]/60 mb-2">Stato della verifica</div>
              <div className="text-xl font-bold text-[#3D9970]">Verificato in modo indipendente</div>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl p-6">
              <div className="text-sm text-[#2A2A2A]/60 mb-2">Tipo di conto</div>
              <div className="text-xl font-bold text-[#2A2A2A]">Conto di trading reale</div>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl p-6">
              <div className="text-sm text-[#2A2A2A]/60 mb-2">Fonte dei dati</div>
              <div className="text-xl font-bold text-[#2A2A2A]">Myfxbook.com</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#2A2A2A] mb-4">
              Che cos’è Myfxbook?
            </h3>
            <p className="text-[#2A2A2A]/70 leading-relaxed mb-4">
              Myfxbook è una piattaforma indipendente di analisi che monitora e verifica le performance di trading in tempo reale. 
              Si collega direttamente ai conti di trading e mostra dati trasparenti e non modificati, incluse operazioni, profitti e perdite, drawdown e metriche di rischio.
            </p>
            <p className="text-[#2A2A2A]/70 leading-relaxed">
              La verifica permette di mostrare dati autentici, non modificati o alterati manualmente.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.myfxbook.com/members/Forex_cmy/forex-cmy/12115706"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 premium-button px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-white text-lg font-semibold rounded-full hover:shadow-2xl"
          >
            Consulta il conto Myfxbook
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[#2A2A2A]/50 italic">
            Tutti i dati di performance provengono da una verifica indipendente e rappresentano esclusivamente risultati storici.
          </p>
        </motion.div>
      </div>

      {isScreenshotOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot Myfxbook ingrandito"
          onClick={() => setIsScreenshotOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsScreenshotOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-8 md:top-8"
            aria-label="Chiudi immagine"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="max-h-full max-w-[1500px] overflow-auto rounded-xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={MYFXBOOK_SCREENSHOT}
              alt="Dashboard Myfxbook verificata ingrandita"
              className="block h-auto max-w-none w-[1200px] lg:w-[1500px]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Myfxbook;
