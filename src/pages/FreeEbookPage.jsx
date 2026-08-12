import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import FreeEbook from '../components/FreeEbook';

const FreeEbookPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Risorsa gratuita"
      title="Trading senza illusioni"
      subtitle="Un manuale pratico per comprendere rischio, drawdown e criteri utili per valutare una strategia con maggiore consapevolezza."
    />
    <FreeEbook />
  </PageLayout>
);

export default FreeEbookPage;
