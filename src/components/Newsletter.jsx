import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { subscribeNewsletter } from '../mock';
import { useToast } from '../hooks/use-toast';

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await subscribeNewsletter(email);
      if (result.success) {
        toast({
          title: 'Iscrizione completata',
          description: result.message,
        });
        setEmail('');
      } else {
        toast({
          title: 'Indirizzo già registrato',
          description: result.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Errore',
        description: 'Non è stato possibile completare l’iscrizione. Riprova tra poco.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FAFAF8] to-[#F5F3F0] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Mail className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A2A2A] mb-4">
            Resta aggiornato
          </h2>
          <p className="text-lg text-[#2A2A2A]/60 mb-8 max-w-2xl mx-auto">
            Ricevi aggiornamenti su performance, analisi e sviluppi del sistema. Nessun contenuto superfluo, solo informazioni pertinenti.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Inserisci il tuo indirizzo email"
              required
              className="flex-1 px-6 py-4 bg-white border border-[#2A2A2A]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-200"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="premium-button px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-white font-semibold rounded-full hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti'}
            </button>
          </form>
          <p className="mt-4 text-sm text-[#2A2A2A]/55 max-w-xl mx-auto">
            Selezionando “Iscriviti” acconsenti a ricevere gli aggiornamenti descritti sopra. Puoi revocare il consenso in qualsiasi momento. Consulta l’{' '}
            <a href="/informativa-privacy" className="text-[#D4AF37] underline hover:text-[#B8942F]">
              informativa sulla privacy
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
