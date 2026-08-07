import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

// Reusable legal page shell. Content sections passed as { title, body: JSX | string }[]
const LegalPage = ({ eyebrow, title, subtitle, lastUpdated, sections }) => (
  <PageLayout>
    <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

    <section className="relative py-16 md:py-24 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Last updated */}
        <div className="mb-12 pb-6 border-b border-[#2A2A2A]/10 text-sm text-[#2A2A2A]/50">
          Ultimo aggiornamento: <span className="font-medium text-[#2A2A2A]/70">{lastUpdated}</span>
        </div>

        {/* Sections */}
        <div className="space-y-10 md:space-y-12">
          {sections.map((s, i) => (
            <article key={i} className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F1B14] mb-4 tracking-tight">
                {i + 1}. {s.title}
              </h2>
              <div className="prose prose-neutral max-w-none text-[#2A2A2A]/75 leading-relaxed text-base md:text-[17px] space-y-4">
                {typeof s.body === 'string' ? <p>{s.body}</p> : s.body}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LegalPage;
