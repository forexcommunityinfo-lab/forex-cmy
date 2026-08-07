import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import FAQ from '../components/FAQ';

const FAQPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Domande frequenti"
      title="Tutto quello che devi sapere"
      subtitle="Risposte alle domande più comuni sul servizio, sul processo di copy trading e sui rischi coinvolti."
    />

    <FAQ />

    <PageCTA
      title="Non trovi la risposta che cerchi?"
      description="Contatta direttamente il team: rispondiamo a tutte le richieste entro 24-48 ore lavorative."
      primaryLabel="Contattaci"
      primaryTo="/contatti"
      secondaryLabel="Vedi i risultati"
      secondaryTo="/risultati"
    />
  </PageLayout>
);

export default FAQPage;
