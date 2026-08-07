import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import Reviews from '../components/Reviews';

const ReviewsPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Recensioni"
      title="Feedback degli utenti"
      subtitle="Opinioni di utenti che hanno collegato il proprio account al sistema di copy trading. I risultati individuali possono variare."
    />

    <Reviews />

    <PageCTA
      title="Vuoi saperne di più?"
      description="Esplora i risultati verificati o contatta il team per ricevere informazioni dettagliate sul servizio."
      primaryLabel="Vedi i risultati"
      primaryTo="/risultati"
      secondaryLabel="Contattaci"
      secondaryTo="/contatti"
    />
  </PageLayout>
);

export default ReviewsPage;
