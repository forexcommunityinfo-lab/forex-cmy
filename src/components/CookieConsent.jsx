import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
          <button
            type="button"
            onClick={() => choose('declined')}
            aria-label="Chiudi e continua senza strumenti analitici"
            className="absolute top-3 right-3 w-8 h-8 inline-flex items-center justify-center rounded-full text-[#2A2A2A]/60 hover:bg-[#2A2A2A]/10 hover:text-[#2A2A2A] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-[#2A2A2A]/75 leading-relaxed mb-4">
            Utilizziamo tecnologie tecniche necessarie e, soltanto previo consenso, PostHog per analizzare visite e interazioni. Puoi accettare, rifiutare o modificare la scelta in qualsiasi momento.{' '}
            <a href="/informativa-cookie" className="text-[#D4AF37] underline hover:text-[#B8942F]">
              Informativa cookie
            </a>
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => choose('accepted')}
              className="px-5 py-2 bg-[#1F1B14] border border-[#1F1B14] text-white text-sm font-medium rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-colors"
            >
              Accetta
            </button>
            <button
              onClick={() => choose('declined')}
              className="px-5 py-2 bg-transparent border border-[#1F1B14] text-[#1F1B14] text-sm font-medium rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
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
