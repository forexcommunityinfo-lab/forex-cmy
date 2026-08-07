import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, TrendingDown, Calendar, Activity } from 'lucide-react';
import { mockStats } from '../mock';

const Results = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    {
      label: 'Rendimento totale',
      value: mockStats.totalReturn,
      icon: TrendingUp,
      color: 'text-[#3D9970]',
    },
    {
      label: 'Drawdown massimo',
      value: mockStats.maxDrawdown,
      icon: TrendingDown,
      color: 'text-[#C74445]',
    },
    {
      label: 'Attivo dal',
      value: mockStats.activeSince,
      icon: Calendar,
      color: 'text-[#D4AF37]',
    },
    {
      label: 'Numero di operazioni',
      value: mockStats.numberOfTrades,
      icon: Activity,
      color: 'text-[#2A2A2A]',
    },
  ];

  return (
    <section
      id="results"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#FAFAF8] to-[#F5F3F0] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3D9970] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#2A2A2A] mb-6">
            Risultati verificati
          </h2>
          <p className="text-xl text-[#2A2A2A]/60 max-w-2xl mx-auto">
            Dati di performance sottoposti a verifica indipendente
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="bg-white/60 backdrop-blur-sm border border-[#2A2A2A]/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} strokeWidth={1.5} />
              <div className="text-3xl font-bold text-[#2A2A2A] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#2A2A2A]/60 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Myfxbook system summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="rounded-3xl border border-[#2A2A2A]/10 bg-white/60 p-4 shadow-xl backdrop-blur-sm md:p-8"
        >
          <img
            src="/images/myfxbook/riepilogo-sistema-myfxbook.png"
            alt="Riepilogo Myfxbook del sistema Forex CMY con rendimento e drawdown"
            className="mx-auto block h-auto w-full max-w-4xl rounded-xl"
            loading="lazy"
          />
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#2A2A2A]/50 italic max-w-3xl mx-auto">
            Le performance passate non garantiscono risultati futuri. Il trading comporta rischi e potrebbe non essere adatto a tutti gli investitori.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
