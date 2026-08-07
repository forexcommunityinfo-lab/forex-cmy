import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { mockTestimonials } from '../mock';

const Reviews = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const testimonials = mockTestimonials;

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#FAFAF8] to-[#F5F3F0] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#2A2A2A] mb-6">
            Cosa dicono i nostri utenti
          </h2>
          <p className="text-xl text-[#2A2A2A]/60 max-w-2xl mx-auto">
            Le esperienze di chi utilizza il sistema ogni giorno
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              className="bg-white/60 backdrop-blur-sm border border-[#2A2A2A]/10 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-[#D4AF37] opacity-50" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#D4AF37]"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#2A2A2A]/70 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#C9A961] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name.charAt(0) || 'U'}
                </div>
                <div>
                  <div className="font-bold text-[#2A2A2A]">{testimonial.name}</div>
                  <div className="text-sm text-[#2A2A2A]/60">{testimonial.role} · {testimonial.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
