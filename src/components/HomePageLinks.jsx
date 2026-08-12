import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Award,
  BarChart3,
  CircleHelp,
  MessageSquareText,
  PlayCircle,
  Settings2,
  BookOpen,
} from 'lucide-react';

const pageLinks = [
  {
    title: 'Come funziona',
    description: 'Scopri come viene collegato il conto e quali passaggi sono necessari.',
    to: '/come-funziona',
    icon: Settings2,
  },
  {
    title: 'Presentazione video',
    description: 'Guarda la spiegazione completa del progetto, del processo e dei rischi.',
    to: '/presentazione-video',
    icon: PlayCircle,
  },
  {
    title: 'Risultati verificati',
    description: 'Consulta dati, andamento e collegamento al monitoraggio Myfxbook.',
    to: '/risultati',
    icon: BarChart3,
  },
  {
    title: 'Recensioni',
    description: 'Leggi le esperienze condivise dagli utenti del sistema.',
    to: '/recensioni',
    icon: MessageSquareText,
  },
  {
    title: 'Domande frequenti',
    description: 'Trova risposte rapide sui dubbi più comuni prima di iniziare.',
    to: '/faq',
    icon: CircleHelp,
  },
  {
    title: 'eBook gratuito',
    description: 'Scarica il manuale pratico su rischio, drawdown e valutazione consapevole di una strategia.',
    to: '/ebook-gratuito',
    icon: BookOpen,
  },
  {
    title: 'Riconoscimento annuale',
    description: 'Approfondisci requisiti e modalità del riconoscimento Forex_CMY.',
    to: '/riconoscimento-annuale',
    icon: Award,
  },
];

const HomePageLinks = () => (
  <section className="relative overflow-hidden bg-[#FAFAF8] pb-24 pt-8 md:pb-32 md:pt-10">
    <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.06] blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
      <div className="mb-14 max-w-3xl md:mb-20">
        <div className="mb-5 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7A6A48]">
            Esplora Forex_CMY
          </span>
        </div>
        <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1F1B14] md:text-6xl">
          Tutto ciò che serve,
          <br />
          <span className="text-[#1F1B14]/45">senza perdere tempo.</span>
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-[#2A2A2A]/60">
          La home ti porta subito alle informazioni importanti. Scegli cosa approfondire e consulta la pagina dedicata.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pageLinks.map(({ title, description, to, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="group relative min-h-[260px] overflow-hidden rounded-[28px] border border-[#2A2A2A]/10 bg-white/75 p-7 shadow-[0_18px_55px_-42px_rgba(31,27,20,0.45)] transition duration-300 hover:-translate-y-1.5 hover:border-[#D4AF37]/45 hover:shadow-[0_24px_65px_-38px_rgba(31,27,20,0.4)] md:p-8"
          >
            <div className="mb-12 flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#B8942F] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
            </div>

            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#1F1B14]">{title}</h3>
            <p className="max-w-sm pr-8 text-sm leading-relaxed text-[#2A2A2A]/60">{description}</p>

            <ArrowUpRight className="absolute bottom-7 right-7 h-5 w-5 text-[#D4AF37] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[28px] bg-[#1F1B14] px-7 py-8 text-white md:flex-row md:px-10">
        <div>
          <h3 className="mb-2 text-2xl font-bold">Vuoi parlarne direttamente?</h3>
          <p className="text-sm leading-relaxed text-white/55">Scrivici per ricevere informazioni chiare sul collegamento e sul funzionamento.</p>
        </div>
        <Link
          to="/contatti"
          className="inline-flex w-full flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C9A961] md:w-auto"
        >
          Contattaci
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default HomePageLinks;
