import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Check } from 'lucide-react';
import { subscribeNewsletter } from '../mock';
import { useToast } from '../hooks/use-toast';

const EBOOK_URL = '/downloads/trading-senza-illusioni-forex-cmy.pdf';

const FreeEbook = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const downloadEbook = () => {
    const link = document.createElement('a');
    link.href = EBOOK_URL;
    link.download = 'Trading-senza-illusioni-Forex-CMY.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      const result = await subscribeNewsletter(formData.email);
      if (result.success) {
        downloadEbook();
        toast({
          title: 'Download avviato',
          description: 'L’eBook “Trading senza illusioni” è pronto per il download.',
        });
        setFormData({ email: '', consent: false });
      } else {
        downloadEbook();
        toast({
          title: 'Indirizzo già registrato',
          description: 'Bentornato! Il download dell’eBook è stato avviato nuovamente.',
        });
      }
    } catch (error) {
      toast({
        title: 'Errore',
        description: 'Non è stato possibile elaborare la richiesta. Riprova tra poco.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="ebook"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#F5F3F0] to-[#FAFAF8] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: eBook mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* 3D Book mockup */}
            <div className="group relative mx-auto max-w-md">
              <div className="absolute inset-[12%] rounded-full bg-[#D4AF37]/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
              <img
                src="/images/ebook/trading-senza-illusioni-3d.png"
                alt="Libro Trading senza illusioni, manuale pratico per approcciarsi ai mercati con consapevolezza di Forex CMY"
                className="relative z-10 mx-auto block h-auto w-full drop-shadow-[0_32px_30px_rgba(42,42,42,0.25)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]"
                loading="lazy"
              />
              {/* Shadow */}
              <div className="absolute bottom-7 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-[#2A2A2A]/20 blur-2xl" />
            </div>
          </motion.div>

          {/* Right: Content and form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#2A2A2A] mb-6">
              eBook gratuito
            </h2>
            <p className="text-xl text-[#2A2A2A]/70 mb-8 leading-relaxed">
              Un manuale pratico per comprendere i fondamenti del trading, valutare il rischio e affrontare i mercati con maggiore consapevolezza. Impara a leggere il drawdown e a scegliere una strategia coerente con i tuoi obiettivi e la tua tolleranza al rischio.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                'Comprendere i fondamenti del trading',
                'Valutare e gestire il rischio con criteri chiari',
                'Comprendere e affrontare correttamente il drawdown',
                'Scegliere una strategia adatta al proprio profilo'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-[#3D9970] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#2A2A2A]/70">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Inserisci il tuo indirizzo email"
                required
                className="w-full px-6 py-4 bg-white border border-[#2A2A2A]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-200"
              />
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-5 h-5 text-[#D4AF37] border-[#2A2A2A]/20 rounded focus:ring-[#D4AF37]"
                />
                <span className="text-sm text-[#2A2A2A]/60">
                  Acconsento a ricevere l’eBook gratuito e aggiornamenti occasionali, secondo l’{' '}
                  <a href="/informativa-privacy" className="text-[#D4AF37] underline hover:text-[#B8942F]">
                    informativa sulla privacy
                  </a>. Posso revocare il consenso in qualsiasi momento.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full premium-button px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-white text-lg font-semibold rounded-full hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
              >
                {isSubmitting ? 'Elaborazione in corso...' : 'Scarica l’eBook gratuito'}
                <Download className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreeEbook;
