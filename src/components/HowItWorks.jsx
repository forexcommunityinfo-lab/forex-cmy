import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, User, Link2, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'Apri il tuo conto di trading',
      description: 'Registrati presso il broker supportato mantenendo il conto intestato a tuo nome.',
      icon: User,
    },
    {
      number: '02',
      title: 'Collega il conto al sistema di copy trading',
      description: 'Collega il conto alla strategia seguendo le istruzioni ricevute.',
      icon: Link2,
    },
    {
      number: '03',
      title: 'Monitora l’attività',
      description: 'Controlla performance e operatività direttamente dalla tua piattaforma.',
      icon: BarChart3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#F5F3F0] to-[#FAFAF8] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#2A2A2A] mb-6">
            Come funziona
          </h2>
          <p className="text-xl text-[#2A2A2A]/60 max-w-2xl mx-auto">
            Tre passaggi essenziali per collegare il tuo conto al sistema
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 relative"
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={itemVariants}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white/50 backdrop-blur-sm border border-[#2A2A2A]/10 rounded-3xl p-8 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C9A961] text-white text-2xl font-bold rounded-2xl mb-6 shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <step.icon className="w-12 h-12 text-[#D4AF37] opacity-80" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#2A2A2A] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#2A2A2A]/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-6 lg:-right-12 w-12 lg:w-24">
                    <ArrowRight className="w-full h-6 text-[#D4AF37]/30" />
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Animated particles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
              style={
                {
                  left: `${15 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }
              }
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;