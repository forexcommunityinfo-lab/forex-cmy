import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram } from 'lucide-react';
import ContactForm from './ContactForm';

// Instagram profile — update here to change the username / link globally
const INSTAGRAM_USERNAME = '@forex_cmy';
const INSTAGRAM_URL = 'https://www.instagram.com/forex_cmy/';

const Footer = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="relative bg-[#2A2A2A] text-white pt-20 pb-12 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Forex_CMY</h3>
              <p className="text-white/60 leading-relaxed">
                Un servizio di copy trading trasparente, pensato per chi attribuisce valore al controllo, alla chiarezza e a decisioni consapevoli.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigazione</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/come-funziona" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200">
                    Come funziona
                  </Link>
                </li>
                <li>
                  <Link to="/risultati" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200">
                    Risultati
                  </Link>
                </li>
                <li>
                  <Link to="/recensioni" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200">
                    Recensioni
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Risorse</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/riconoscimento-annuale" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200">
                    Riconoscimento annuale
                  </Link>
                </li>
                <li>
                  <Link to="/ebook-gratuito" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200">
                    eBook gratuito
                  </Link>
                </li>
                <li>
                  <Link to="/presentazione-video" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200">
                    Presentazione video
                  </Link>
                </li>
                <li>
                  <Link to="/termini-di-servizio" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200">
                    Informativa sui rischi
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contatti</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] mt-1" />
                  <a
                    href="mailto:info@forexcmy.com"
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    info@forexcmy.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-[#D4AF37] mt-1" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {INSTAGRAM_USERNAME}
                  </a>
                </div>
                <Link
                  to="/contatti"
                  className="inline-block premium-button px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-white font-medium rounded-full hover:shadow-xl"
                >
                  Contattaci
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} Forex_CMY. Tutti i diritti riservati.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/informativa-privacy" className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                  Informativa sulla privacy
                </Link>
                <Link to="/termini-di-servizio" className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                  Termini di servizio
                </Link>
                <Link to="/informativa-cookie" className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                  Informativa sui cookie
                </Link>
              </div>
            </div>
          </div>

          {/* Risk Warning */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/30 text-xs leading-relaxed max-w-4xl mx-auto text-center">
              <strong>Avvertenza sui rischi:</strong> Il trading valutario a margine comporta un elevato livello di rischio e potrebbe non essere adatto a tutti gli investitori.
              Le performance passate non sono indicative dei risultati futuri. L’elevata leva finanziaria può operare sia a favore sia contro l’investitore.
              Prima di operare sul mercato valutario, valuta attentamente obiettivi, livello di esperienza e propensione al rischio.
              È possibile perdere una parte o la totalità del capitale iniziale; non impiegare denaro che non puoi permetterti di perdere.
            </p>
          </div>
        </div>
      </footer>

      <ContactForm isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default Footer;
