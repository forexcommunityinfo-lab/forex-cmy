import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import VideoPresentation from '../components/VideoPresentation';

const VideoPresentationPage = () => {
  const learningPoints = [
    'Come funziona il Copy Trading',
    'Come viene collegato il conto personale',
    'Cosa resta sotto il controllo dell\u2019utente',
    'Come vengono presentati risultati e rischi',
    'Come richiedere maggiori informazioni',
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow="Presentazione"
        title="Scopri il sistema Forex_CMY"
        subtitle="Una panoramica completa del funzionamento del servizio, del processo di connessione e dell'approccio alla gestione del rischio."
      />

      {/* Reuse existing video component */}
      <VideoPresentation />

      {/* Supporting content — what the viewer will learn */}
      <section className="relative py-24 bg-gradient-to-b from-[#F5F1EA] to-[#FAFAF8] overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#D4AF37] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#D4AF37]" />
              <span className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#7A6A48] font-semibold">
                Cosa scoprirai
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1F1B14] mb-4">
              Un percorso chiaro e trasparente
            </h2>
            <p className="text-lg text-[#2A2A2A]/60 max-w-2xl mx-auto leading-relaxed">
              Il video di presentazione affronta tutti gli aspetti operativi del sistema, senza promesse di rendimento e senza affermazioni fuorvianti.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {learningPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white/60 backdrop-blur-sm border border-[#2A2A2A]/10 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-8 h-8 bg-[#D4AF37]/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.5} />
                </div>
                <p className="text-[#1F1B14] font-medium leading-relaxed pt-1">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Risk disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-2xl"
          >
            <p className="text-sm md:text-base text-[#7A6A48] text-center leading-relaxed">
              <strong className="font-semibold">Avviso:</strong> Il trading forex comporta rischi significativi. Le performance passate non garantiscono i risultati futuri. Il video ha finalit&agrave; esclusivamente informative.
            </p>
          </motion.div>
        </div>
      </section>

      <PageCTA
        title="Pronto a saperne di più?"
        description="Esplora il funzionamento del sistema o contatta direttamente il team per ricevere le informazioni di attivazione."
        primaryLabel="Scopri come funziona"
        primaryTo="/come-funziona"
        secondaryLabel="Contattaci"
        secondaryTo="/contatti"
      />
    </PageLayout>
  );
};

export default VideoPresentationPage;
