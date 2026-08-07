import React from 'react';
import { Mail, Clock, Instagram } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

// Instagram profile — update here to change the username / link globally
const INSTAGRAM_USERNAME = '@forex_cmy';
const INSTAGRAM_URL = 'https://www.instagram.com/forex_cmy/';

const ContactPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Contatti"
      title="Parliamone insieme"
      subtitle="Hai domande sul servizio? Vuoi collegare il tuo account? Compila il modulo o scrivici direttamente via email."
    />

    {/* Quick info strip */}
    <section className="bg-[#FAFAF8] border-y border-[#2A2A2A]/10">
      <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#7A6A48] font-semibold mb-1">Email</div>
            <a href="mailto:info@forexcmy.com" className="text-[#1F1B14] font-medium hover:text-[#D4AF37] transition-colors">
              info@forexcmy.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#7A6A48] font-semibold mb-1">Tempo di risposta</div>
            <div className="text-[#1F1B14] font-medium">Entro 24-48 ore lavorative</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Instagram className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#7A6A48] font-semibold mb-1">Instagram</div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F1B14] font-medium hover:text-[#D4AF37] transition-colors"
            >
              {INSTAGRAM_USERNAME}
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Existing full contact form */}
    <Contact />
  </PageLayout>
);

export default ContactPage;
