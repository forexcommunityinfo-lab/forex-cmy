import React from 'react';
import LegalPage from './LegalPage';

const TermsPage = () => (
  <LegalPage
    eyebrow="Legale"
    title="Termini di servizio"
    subtitle="Condizioni generali di utilizzo del sito Forex_CMY e dei contenuti in esso pubblicati."
    lastUpdated="8 agosto 2026"
    sections={[
      {
        title: 'Finalità del sito',
        body:
          'Il sito Forex_CMY è uno spazio informativo relativo a un servizio di copy trading. Il contenuto ha finalità esclusivamente illustrative e informative e non costituisce consulenza finanziaria, sollecitazione all\'investimento o proposta contrattuale.',
      },
      {
        title: 'Natura informativa dei contenuti',
        body:
          'Tutte le informazioni presenti sul sito, incluse eventuali statistiche, screenshot e materiali multimediali, sono fornite a scopo puramente informativo. Non rappresentano garanzie di rendimento né raccomandazioni personalizzate di investimento.',
      },
      {
        title: 'Accesso e uso del servizio',
        body:
          'L\'accesso al sito è libero. L\'utente si impegna a utilizzare i contenuti in modo lecito, rispettando la normativa vigente e i presenti termini. È vietato ogni utilizzo che possa compromettere il funzionamento del sito o violare diritti di terzi.',
      },
      {
        title: 'Responsabilità dell\'utente',
        body:
          'L\'utente è responsabile delle proprie decisioni finanziarie. Prima di intraprendere qualsiasi attività di trading o di collegamento a un sistema di copy trading, l\'utente deve valutare autonomamente la propria situazione economica, la tolleranza al rischio e l\'idoneità del servizio, eventualmente rivolgendosi a un consulente qualificato.',
      },
      {
        title: 'Rischi del trading',
        body:
          'Il trading su strumenti finanziari, incluso il mercato Forex, comporta rischi significativi. È possibile perdere l\'intero capitale investito o parte di esso. Il servizio descritto sul sito non elimina in alcun modo tali rischi.',
      },
      {
        title: 'Nessuna garanzia di risultato',
        body:
          'Forex_CMY non garantisce alcun risultato economico, guadagno o rendita. Non vengono promesse performance minime, rendimenti costanti né guadagni certi. Ogni indicazione presente sul sito ha natura descrittiva o storica.',
      },
      {
        title: 'Performance passate',
        body:
          'Le performance passate, ove presentate, non costituiscono garanzia dei risultati futuri. I dati storici sono forniti a scopo informativo e non devono essere interpretati come previsione di rendimenti futuri.',
      },
      {
        title: 'Piattaforme di terzi',
        body:
          'Il servizio di copy trading opera attraverso piattaforme e broker di terze parti. Forex_CMY non è responsabile del funzionamento, delle politiche o della disponibilità di tali piattaforme. L\'utente accetta i termini delle piattaforme di terzi al momento della loro registrazione.',
      },
      {
        title: 'Link esterni',
        body:
          'Il sito può contenere link a risorse esterne (ad esempio Myfxbook, canali social, video di terze parti). Tali link vengono forniti a scopo di riferimento e Forex_CMY non è responsabile del contenuto o delle informative privacy dei siti collegati.',
      },
      {
        title: 'Proprietà intellettuale',
        body:
          'Tutti i contenuti presenti sul sito — testi, grafiche, immagini, marchi, loghi e materiali multimediali — sono di proprietà di Forex_CMY o dei rispettivi titolari. Ne è vietata la riproduzione o l\'utilizzo senza esplicito consenso scritto.',
      },
      {
        title: 'Disponibilità del servizio',
        body:
          'Forex_CMY si riserva il diritto di modificare, sospendere o interrompere in qualsiasi momento, in tutto o in parte, il sito o i servizi correlati, senza obbligo di preavviso e senza responsabilità nei confronti dell\'utente.',
      },
      {
        title: 'Limitazione di responsabilità',
        body:
          'Nei limiti consentiti dalla legge, Forex_CMY non è responsabile di eventuali danni diretti, indiretti, incidentali o conseguenti derivanti dall\'uso del sito, dall\'impossibilità di utilizzarlo o dall\'affidamento su informazioni pubblicate. L\'utilizzo del sito è sotto la piena responsabilità dell\'utente.',
      },
      {
        title: 'Modifiche al servizio',
        body:
          'I presenti termini possono essere aggiornati in qualsiasi momento. Le modifiche entrano in vigore al momento della pubblicazione della versione aggiornata sul sito. L\'utente è invitato a consultare periodicamente questa pagina.',
      },
      {
        title: 'Interruzione o sospensione',
        body:
          'Forex_CMY può sospendere l\'accesso o le funzionalità del sito nei confronti di utenti che ne violino i termini o che ne facciano un uso improprio, illecito o pregiudizievole.',
      },
      {
        title: 'Legge applicabile',
        body:
          'I presenti termini sono regolati dalla legge italiana. Per le controversie con utenti qualificabili come consumatori resta competente il foro inderogabile previsto dalla normativa a tutela del consumatore. Negli altri casi, la competenza viene determinata secondo le disposizioni di legge applicabili.',
      },
      {
        title: 'Contatti',
        body:
          'Per qualsiasi domanda relativa ai presenti termini è possibile scrivere a info@forexcmy.com.',
      },
    ]}
  />
);

export default TermsPage;
