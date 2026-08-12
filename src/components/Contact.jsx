import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Instagram, Send } from 'lucide-react';
import { submitContactForm } from '../mock';
import { useToast } from '../hooks/use-toast';
import { useSearchParams } from 'react-router-dom';

// Instagram profile — update here to change the username / link globally
const INSTAGRAM_USERNAME = '@forex_cmy';
const INSTAGRAM_URL = 'https://www.instagram.com/forex_cmy/';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const isRecognitionRequest = searchParams.get('richiesta') === 'riconoscimento-annuale';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: 'Consenso richiesto',
        description: 'Per continuare, accetta l’informativa sulla privacy.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactForm({
        ...formData,
        type: isRecognitionRequest ? 'recognition' : 'contact',
        subject: isRecognitionRequest ? 'Richiesta riconoscimento annuale' : 'Richiesta dal portale',
      });
      if (result.success) {
        toast({
          title: 'Messaggio inviato',
          description: 'Riceverai una risposta entro 24-48 ore lavorative.',
        });
        setFormData({ name: '', email: '', message: '', consent: false });
      }
    } catch (error) {
      toast({
        title: 'Errore',
        description: 'Non è stato possibile inviare il messaggio. Riprova tra poco.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#F5F3F0] to-[#FAFAF8] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#2A2A2A] mb-6">
            {isRecognitionRequest ? 'Richiedi il riconoscimento annuale' : 'Parliamone'}
          </h2>
          <p className="text-xl text-[#2A2A2A]/60 max-w-2xl mx-auto">
            {isRecognitionRequest
              ? 'Compila il modulo: la richiesta arriverà direttamente al canale dedicato e sarà valutata individualmente.'
              : 'Hai domande sul servizio o vuoi capire come collegare il tuo conto? Scrivici per ricevere informazioni chiare e pertinenti.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-[#2A2A2A] mb-6">
                Contatti
              </h3>
              <p className="text-[#2A2A2A]/70 leading-relaxed mb-8">
                Puoi contattarci via email, Instagram oppure utilizzare il modulo. Le richieste vengono gestite entro 24-48 ore lavorative.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-semibold text-[#2A2A2A] mb-1">Email</div>
                  <a
                    href="mailto:info@forexcmy.com"
                    className="text-[#D4AF37] hover:underline"
                  >
                    info@forexcmy.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-semibold text-[#2A2A2A] mb-1">Instagram</div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2A2A2A]/70 hover:text-[#D4AF37]"
                  >
                    {INSTAGRAM_USERNAME}
                  </a>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl p-6">
              <div className="font-semibold text-[#2A2A2A] mb-2">
                ⏱️ Tempi di risposta
              </div>
              <p className="text-sm text-[#2A2A2A]/70">
                Di norma rispondiamo entro 24-48 ore lavorative.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-sm border border-[#2A2A2A]/10 rounded-3xl p-8 space-y-6 shadow-xl">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2A2A2A] mb-2">
                  Nome e cognome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#2A2A2A]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-200"
                  placeholder="Nome e cognome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2A2A2A] mb-2">
                  Indirizzo email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#2A2A2A]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2A2A2A] mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white border border-[#2A2A2A]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-200 resize-none"
                  placeholder="Scrivi qui la tua richiesta..."
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-[#D4AF37] border-[#2A2A2A]/20 rounded focus:ring-[#D4AF37]"
                />
                <span className="text-sm text-[#2A2A2A]/60">
                  Chiedo di essere ricontattato in merito alla richiesta e dichiaro di aver letto l’{' '}
                  <a href="/informativa-privacy" className="text-[#D4AF37] underline hover:text-[#B8942F]">
                    informativa sulla privacy
                  </a>.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full premium-button px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-white text-lg font-semibold rounded-full hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia il messaggio'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
