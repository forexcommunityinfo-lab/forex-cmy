import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../mock';
import { X, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactForm = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.consent) {
      toast({
        title: 'Conferma richiesta',
        description: 'Per continuare, conferma di aver letto l’informativa sulla privacy.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast({
          title: 'Messaggio inviato',
          description: result.message,
        });
        setFormData({ name: '', email: '', subject: '', message: '', consent: false });
        setTimeout(() => onClose(), 1500);
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

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2A2A]/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="bg-[#FAFAF8] rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#FAFAF8] border-b border-[#2A2A2A]/10 px-8 py-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#2A2A2A]">Contattaci</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#2A2A2A]/10 transition-colors duration-200"
          >
            <X className="w-6 h-6 text-[#2A2A2A]" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
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
            <label htmlFor="subject" className="block text-sm font-medium text-[#2A2A2A] mb-2">
              Oggetto *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-[#2A2A2A]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-200"
              placeholder="Richiesta di informazioni sul servizio"
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
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 w-5 h-5 text-[#D4AF37] border-[#2A2A2A]/20 rounded focus:ring-[#D4AF37]"
            />
            <span className="text-sm text-[#2A2A2A]/60">
              Chiedo di essere ricontattato e dichiaro di aver letto l’{' '}
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
    </motion.div>
  );
};

export default ContactForm;
