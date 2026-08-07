import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const text = 'Strategia trasparente · Risultati verificati · Controllo indipendente · Rischio consapevole · ';
  const repeatedText = text.repeat(10);

  return (
    <section className="relative py-20 bg-[#2A2A2A] overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          <span className="text-6xl md:text-8xl font-bold text-white/10 pr-8">
            {repeatedText}
          </span>
          <span className="text-6xl md:text-8xl font-bold text-white/10 pr-8">
            {repeatedText}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;