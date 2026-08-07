import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getConsent, setConsent } from '../lib/analytics';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  const choose = (value) => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[60] bg-[#FAF6EF]/95 backdrop-blur-md border border-[#D4AF37]/25 rounded-2xl shadow-2xl p-5"
        >
          <p className="text-sm text-[#2A2A2A]/75 leading-relaxed mb-4">
            Utilizziamo cookie tecnici e, previo consenso, strumenti di analisi anonima per migliorare il servizio. Puoi accettare o rifiutare in qualsiasi momento.{' '}
            <a href="/informativa-cookie" className="text-[#D4AF37] underline hover:text-[#B8942F]">
              Informativa cookie
            </a>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => choose('accepted')}
              className="px-5 py-2 bg-[#1F1B14] text-white text-sm font-medium rounded-full hover:bg-[#D4AF37] transition-colors"
            >
              Accetta
            </button>
            <button
              onClick={() => choose('declined')}
              className="px-5 py-2 bg-transparent border border-[#2A2A2A]/25 text-[#2A2A2A]/75 text-sm font-medium rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              Rifiuta
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
