import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ eyebrow, title, subtitle, accent }) => (
  <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF6EF] via-[#F5F1EA] to-[#EFE9DE]">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-[#D4AF37] opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="inline-flex items-center gap-2 mb-6"
      >
        <span className="w-6 h-px bg-[#D4AF37]" />
        <span className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#7A6A48] font-semibold">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[#1F1B14] mb-5"
      >
        {title.split(' | ').map((part, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && accent ? (
              <span className="text-[#D4AF37] italic">{part}</span>
            ) : (
              part
            )}
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-[#2A2A2A]/60 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
