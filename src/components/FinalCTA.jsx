import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-40 bg-gradient-to-b from-[#1A1A1A] to-[#FAFAF8] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] opacity-10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2A2A2A] mb-8 leading-tight"
        >
          Osserva il sistema con chiarezza.
          <br />
          <span className="text-[#D4AF37]">Poi decidi in autonomia.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-[#2A2A2A]/60 mb-16 max-w-3xl mx-auto"
        >
          Consulta i risultati, approfondisci il funzionamento e contatta Forex_CMY per ricevere le istruzioni di attivazione.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#results"
            className="group premium-button px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-white text-lg font-semibold rounded-full hover:shadow-2xl inline-flex items-center gap-3"
          >
            Vedi i risultati
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group premium-button px-10 py-5 bg-white border-2 border-[#2A2A2A] text-[#2A2A2A] text-lg font-semibold rounded-full hover:bg-[#2A2A2A] hover:text-white hover:shadow-2xl inline-flex items-center gap-3"
          >
            Contatta Forex_CMY
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;