import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Che cos’è il copy trading?',
      answer: 'Il copy trading replica automaticamente sul tuo conto le operazioni eseguite da una strategia. Il conto resta intestato a te e mantieni il pieno controllo, mentre l’operatività segue regole prestabilite.'
    },
    {
      question: 'Forex_CMY gestisce direttamente il mio denaro?',
      answer: 'No. Forex_CMY non detiene, gestisce né può accedere ai tuoi fondi. Il capitale resta sul conto personale aperto presso il broker scelto. Il collegamento replica soltanto l’operatività, non la gestione del denaro.'
    },
    {
      question: 'Posso prelevare i fondi in qualsiasi momento?',
      answer: 'Sì. Poiché il conto è intestato a te presso il broker scelto, mantieni sempre il controllo su depositi e prelievi. Puoi interrompere il collegamento al servizio quando desideri.'
    },
    {
      question: 'I rendimenti sono garantiti?',
      answer: 'No. Il trading comporta rischi significativi e nessun rendimento è garantito. Le performance passate non indicano risultati futuri. È opportuno impiegare solo capitale che puoi permetterti di perdere.'
    },
    {
      question: 'Quali rischi comporta?',
      answer: 'Il trading Forex comporta rischi significativi, inclusa la possibile perdita dell’intero capitale. Volatilità, leva finanziaria, slippage e problemi di esecuzione possono influire sui risultati. È essenziale comprendere questi rischi prima di collegarsi a qualsiasi sistema.'
    },
    {
      question: 'Come si attiva il servizio?',
      answer: 'Apri un conto di trading presso un broker supportato, quindi contatta Forex_CMY per ricevere le istruzioni di collegamento. Ti verranno fornite indicazioni operative e supporto tecnico per completare la configurazione.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#FAFAF8] to-[#F5F3F0] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#2A2A2A] mb-6">
            Domande frequenti
          </h2>
          <p className="text-xl text-[#2A2A2A]/60">
            Risposte chiare su servizio, funzionamento e rischi
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white/60 backdrop-blur-sm border border-[#2A2A2A]/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-semibold text-[#2A2A2A] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-[#2A2A2A]/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-[#2A2A2A]/60 mb-4">
            Hai un’altra domanda?
          </p>
          <a
            href="#contact"
            className="inline-block premium-button px-8 py-3 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-white"
          >
            Contattaci
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;