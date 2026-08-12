import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  FileText,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Instagram,
  ArrowRight,
  Award,
  Image as ImageIcon,
} from 'lucide-react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import { rewardConfig } from '../config/rewardConfig';

// Instagram profile — mirrors Footer/Contact config
const INSTAGRAM_URL = 'https://www.instagram.com/forex_cmy/';

const steps = [
  {
    icon: Calendar,
    title: 'Utilizza il servizio per almeno un anno',
    text: 'Il riconoscimento è riservato a chi mantiene un collegamento attivo al sistema per un ciclo completo di 12 mesi.',
  },
  {
    icon: FileText,
    title: 'Conserva lo storico completo del conto',
    text: 'Assicurati di disporre di uno storico verificabile, chiaro e integrale del tuo conto di trading.',
  },
  {
    icon: MessageCircle,
    title: 'Contattaci in privato',
    text: 'Invia la documentazione richiesta tramite i canali privati indicati nella sezione contatti.',
  },
  {
    icon: CheckCircle2,
    title: 'Ricevi le istruzioni dopo la verifica',
    text: 'Una volta convalidata la documentazione, riceverai in privato i dettagli, i tempi e le modalità di consegna.',
  },
];

const requirements = [
  'Almeno 12 mesi di storico verificabile',
  'Storico completo e leggibile',
  'Dati coerenti con il conto utilizzato',
  'Assenza di documenti alterati o incompleti',
  'Verifica manuale da parte di Forex_CMY',
];

const RewardImage = () => {
  const [errored, setErroreed] = useState(false);

  if (errored) {
    return (
      <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#F5EFE0] via-[#EFE4CC] to-[#D9C58A] border border-[#D4AF37]/25 flex flex-col items-center justify-center gap-4 text-[#7A6A48]">
        <div className="w-16 h-16 rounded-full bg-white/60 border border-[#D4AF37]/30 flex items-center justify-center">
          <ImageIcon className="w-7 h-7 text-[#B8942F]" />
        </div>
        <span className="text-xs tracking-[0.28em] uppercase font-semibold">
          Immagine del riconoscimento
        </span>
      </div>
    );
  }

  return (
    <img
      src={rewardConfig.image}
      alt={rewardConfig.alt}
      onError={() => setErroreed(true)}
      className="w-full h-auto object-contain drop-shadow-[0_24px_28px_rgba(31,27,20,0.28)]"
    />
  );
};

const PremioAnnualePage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Riconoscimento annuale"
      title="Riconoscimento Annuale Forex_CMY"
      subtitle="Completa un anno di attività, invia lo storico e richiedi la verifica del riconoscimento."
    />

    {/* ── Sezione: Come funziona (4 step) ── */}
    <section className="relative py-24 md:py-28 bg-gradient-to-b from-[#FAFAF8] to-[#F5F1EA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#D4AF37]" />
            <span className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#7A6A48] font-semibold">
              Come funziona
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1F1B14]">
            Quattro passaggi essenziali
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white/70 backdrop-blur-sm border border-[#2A2A2A]/10 rounded-2xl p-7 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_50px_-25px_rgba(212,175,55,0.35)] transition-all duration-500"
                data-testid={`reward-step-${idx + 1}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs tracking-[0.24em] uppercase font-semibold text-[#7A6A48]/70">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#1F1B14] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#2A2A2A]/65 leading-relaxed">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Sezione: Requisiti ── */}
    <section className="relative py-24 md:py-28 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#D4AF37]" />
            <span className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#7A6A48] font-semibold">
              Requisiti
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1F1B14]">
            Cosa serve per richiedere il riconoscimento
          </h2>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/70 backdrop-blur-sm border border-[#2A2A2A]/10 rounded-3xl p-8 md:p-10 space-y-4"
          data-testid="reward-requirements-list"
        >
          {requirements.map((req, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="mt-1 w-6 h-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              </span>
              <span className="text-[#2A2A2A]/80 leading-relaxed">{req}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>

    {/* ── Sezione: Verifica manuale ── */}
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-[#F5F1EA] to-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1F1B14] text-white rounded-3xl p-10 md:p-12 border border-[#D4AF37]/25 overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex flex-col items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#D4AF37] font-semibold mb-3">
                Verifica manuale
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                Ogni richiesta viene analizzata individualmente
              </h3>
              <p className="text-white/70 leading-relaxed">
                La richiesta viene analizzata manualmente. L'invio dello storico non comporta approvazione automatica. Il riconoscimento viene conferito solo dopo la verifica dei requisiti e della documentazione fornita.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Sezione: Card riconoscimento ── */}
    <section className="relative py-24 md:py-32 bg-[#FAFAF8] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-10 md:gap-14 items-center bg-white/70 backdrop-blur-sm border border-[#D4AF37]/25 rounded-3xl p-6 md:p-10 shadow-[0_30px_80px_-40px_rgba(31,27,20,0.35)]"
          data-testid="reward-card"
        >
          <div className="relative">
            <RewardImage />
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 inline-flex items-center gap-2 px-4 py-2 bg-[#1F1B14] text-[#D4AF37] rounded-full text-[10px] tracking-[0.28em] uppercase font-semibold border border-[#D4AF37]/40 shadow-lg">
              <Award className="w-3.5 h-3.5" />
              Riconoscimento annuale
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1F1B14] mb-4 leading-tight">
              {rewardConfig.title}
            </h2>
            <p className="text-[#2A2A2A]/70 leading-relaxed mb-6">
              {rewardConfig.description}
            </p>

            <div className="flex items-start gap-3 bg-[#D4AF37]/8 border border-[#D4AF37]/25 rounded-2xl p-4 mb-8">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                {rewardConfig.termsNote}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contatti?richiesta=riconoscimento-annuale"
                data-testid="reward-contact-btn"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#1F1B14] text-white text-sm font-medium rounded-full hover:bg-[#D4AF37] transition-all duration-300 shadow-[0_8px_24px_rgba(31,27,20,0.15)]"
              >
                Richiedi informazioni sul riconoscimento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="reward-instagram-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-[#2A2A2A]/25 text-[#2A2A2A]/75 text-sm font-medium rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                Scrivici su Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Nota finale di chiusura ── */}
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#FAFAF8] to-[#F5F1EA]">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base text-[#2A2A2A]/55 leading-relaxed italic"
          data-testid="reward-closing-note"
        >
          Ogni richiesta viene valutata individualmente. Il riconoscimento non è automatico e viene conferito solo dopo la verifica della documentazione richiesta.
        </motion.p>
      </div>
    </section>
  </PageLayout>
);

export default PremioAnnualePage;
