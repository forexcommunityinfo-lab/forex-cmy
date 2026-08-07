import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Philosophy = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  const statements = [
    'Nessuna scorciatoia.',
    'Nessun rendimento garantito.',
    'Nessun controllo nascosto sul tuo conto.',
    'Solo una strategia definita, risultati trasparenti e decisioni consapevoli.',
  ];

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative py-40 bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="space-y-20">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.4,
                duration: 1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="relative"
            >
              {/* Large statement text */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {statement}
              </h2>

              {/* Subtle accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{
                  delay: index * 0.4 + 0.3,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                className="mt-6 h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-transparent"
                style={{ transformOrigin: 'left center' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;