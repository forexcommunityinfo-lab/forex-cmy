import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VIDEO_URL = '/videos/presentazione-forex-cmy.mp4';

const VideoPresentation = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="video"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#F5F3F0] to-[#2A2A2A] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#2A2A2A] mb-6">
            Comprendi il progetto prima di aderire.
          </h2>
          <p className="text-xl text-[#2A2A2A]/60 max-w-2xl mx-auto">
            Una presentazione completa del funzionamento, dei passaggi richiesti e dei rischi da valutare.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative group"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#111] shadow-2xl hover:shadow-3xl transition-all duration-500">
            <video
              className="absolute inset-0 w-full h-full object-contain bg-black"
              controls
              controlsList="nodownload"
              preload="metadata"
              playsInline
              aria-label="Video completo di presentazione del sistema Forex_CMY"
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Il tuo browser non supporta la riproduzione dei video HTML5.
            </video>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#C9A961]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPresentation;
