import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import Results from '../components/Results';
import Myfxbook from '../components/Myfxbook';

const ResultsPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Risultati verificati"
      title="Performance trasparenti e indipendenti"
      subtitle="Tutti i dati mostrati sono verificati da fonti terze indipendenti. Le performance passate non garantiscono i risultati futuri."
    />

    {/* Prominent disclaimer strip */}
    <section className="bg-[#D4AF37]/10 border-y border-[#D4AF37]/20">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <p className="text-sm md:text-base text-[#7A6A48] text-center leading-relaxed">
          <strong className="font-semibold">Avviso importante:</strong> Le performance passate non garantiscono i risultati futuri. Il trading comporta rischi significativi e potrebbe non essere adatto a tutti gli investitori.
        </p>
      </div>
    </section>

    <Results />
    <Myfxbook />

    <PageCTA
      title="Comprendere il sistema prima di aderire"
      description="Scopri come funziona il processo di copy trading e come collegare il tuo account personale."
      primaryLabel="Come funziona"
      primaryTo="/come-funziona"
      secondaryLabel="Contattaci"
      secondaryTo="/contatti"
    />
  </PageLayout>
);

export default ResultsPage;
