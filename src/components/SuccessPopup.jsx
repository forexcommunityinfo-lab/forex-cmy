import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const SuccessPopup = ({ open, onClose, eyebrow = 'Invio completato', title, description, buttonLabel = 'Perfetto' }) => {
  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#1F1B14]/70 p-5 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-popup-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[30px] border border-[#D4AF37]/35 bg-[#FAFAF8] px-7 py-9 text-center shadow-[0_32px_100px_rgba(0,0,0,0.3)] md:px-11 md:py-11"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <button onClick={onClose} aria-label="Chiudi" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#2A2A2A]/50 transition hover:bg-[#2A2A2A]/5 hover:text-[#2A2A2A]">
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.12, type: 'spring', stiffness: 300 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10"
            >
              <Check className="h-8 w-8 text-[#B8942F]" strokeWidth={2.5} />
            </motion.div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9A7B28]">{eyebrow}</p>
            <h2 id="success-popup-title" className="mb-4 text-3xl font-bold tracking-tight text-[#1F1B14] md:text-4xl">{title}</h2>
            <p className="mx-auto mb-8 max-w-sm leading-relaxed text-[#2A2A2A]/65">{description}</p>
            <button onClick={onClose} className="rounded-full bg-[#1F1B14] px-9 py-3.5 font-medium text-white transition hover:bg-[#D4AF37]">
              {buttonLabel}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessPopup;
