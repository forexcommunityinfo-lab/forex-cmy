import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import HowItWorks from '../components/HowItWorks';

const HowItWorksPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Come funziona"
      title="Il processo di copy trading"
      subtitle="Tre passaggi essenziali per collegare il tuo account personale a una strategia definita, mantenendo controllo e visibilità totali."
    />

    <HowItWorks />

    {/* Additional explainer for account connection */}
    <section className="relative py-24 bg-gradient-to-b from-[#FAFAF8] to-[#F5F1EA]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F1B14] mb-8 text-center">
          Il tuo account resta tuo
        </h2>
        <div className="space-y-6 text-[#2A2A2A]/70 text-lg leading-relaxed">
          <p>
            L'account di trading viene aperto direttamente a tuo nome presso il broker supportato. In nessun momento il capitale passa attraverso Forex_CMY: i fondi restano sotto la tua completa custodia e disponibilità.
          </p>
          <p>
            Il sistema di copy trading si limita a replicare l'attività di trading della strategia sul tuo account. Puoi disconnettere il collegamento in qualsiasi momento e mantenere la piena autonomia sui depositi e sui prelievi.
          </p>
          <p>
            La configurazione iniziale richiede solo l'inserimento di credenziali dedicate al collegamento; nessuna informazione sensibile viene condivisa con terze parti.
          </p>
        </div>
      </div>
    </section>

    <PageCTA
      title="Pronto a vedere il sistema in azione?"
      description="Esplora i risultati verificati o contatta direttamente il team per ricevere le istruzioni di attivazione."
      primaryLabel="Vedi i risultati"
      primaryTo="/risultati"
      secondaryLabel="Contattaci"
      secondaryTo="/contatti"
    />
  </PageLayout>
);

export default HowItWorksPage;
