import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PageCTA = ({ title, description, primaryLabel, primaryTo, secondaryLabel, secondaryTo }) => (
  <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#F5F1EA] to-[#FAFAF8]">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1B14] mb-6"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#2A2A2A]/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        {primaryTo && (
          <Link
            to={primaryTo}
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#1F1B14] text-white text-sm font-medium rounded-full hover:bg-[#D4AF37] transition-all duration-300 shadow-[0_8px_24px_rgba(31,27,20,0.15)]"
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
        {secondaryTo && (
          <Link
            to={secondaryTo}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-transparent border border-[#2A2A2A]/25 text-[#2A2A2A]/75 text-sm font-medium rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          >
            {secondaryLabel}
          </Link>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageCTA;
