import React from 'react';
import LegalPage from './LegalPage';
import { setConsent } from '../lib/analytics';

const CookiePage = () => (
  <LegalPage
    eyebrow="Legale"
    title="Informativa sui cookie"
    subtitle="Come vengono utilizzati i cookie e le tecnologie simili sul sito Forex_CMY."
    lastUpdated="8 agosto 2026"
    sections={[
      {
        title: 'Che cosa sono i cookie',
        body:
          'I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell\'utente, dove vengono memorizzati per essere ritrasmessi al sito stesso alla visita successiva. Servono a garantire il funzionamento del sito e, in alcuni casi, a migliorarne l\'esperienza d\'uso.',
      },
      {
        title: 'Cookie tecnici',
        body:
          'Il sito utilizza tecnologie tecniche necessarie al proprio funzionamento. Nel browser viene inoltre salvata la scelta effettuata nel banner, con la chiave forexcmy_cookie_consent, per ricordare se gli strumenti analitici sono stati accettati o rifiutati. Queste tecnologie non richiedono consenso preventivo quando sono strettamente necessarie.',
      },
      {
        title: 'Cookie di preferenza',
        body:
          'Il sito può utilizzare la memoria locale del browser per conservare preferenze tecniche e, nella configurazione dimostrativa, i dati inseriti nei moduli. Tali informazioni restano sul dispositivo e possono essere eliminate dalle impostazioni del browser.',
      },
      {
        title: 'Cookie analitici',
        body:
          'Il sito è predisposto per utilizzare PostHog allo scopo di misurare visite e interazioni. PostHog viene inizializzato soltanto se è configurata una chiave valida e dopo che l\'utente ha selezionato “Accetta” nel banner. In caso di rifiuto, il tracciamento analitico resta disattivato.',
      },
      {
        title: 'Cookie di terze parti',
        body:
          'Il sito contiene link verso servizi esterni, tra cui Myfxbook e Instagram. Il semplice collegamento non installa cookie di tali soggetti; quando l\'utente apre il sito esterno si applicano le informative e le tecnologie di quel fornitore.',
      },
      {
        title: 'Video incorporati',
        body:
          'Il video di presentazione è ospitato direttamente sul sito e riprodotto tramite il lettore HTML5 del browser. Non è incorporato da YouTube o Vimeo e la sua riproduzione non comporta, di per sé, l\'installazione di cookie di tali piattaforme.',
      },
      {
        title: 'Link ai social media',
        body:
          'Il sito può contenere link ai profili social ufficiali (ad esempio Instagram). Il semplice link non installa cookie di terze parti; tuttavia, se l\'utente accede al social attraverso il link, si applicano le informative del social network di riferimento.',
      },
      {
        title: 'Durata dei cookie',
        body:
          'I cookie possono essere di sessione — cancellati automaticamente alla chiusura del browser — o persistenti, memorizzati per un periodo di tempo definito. La durata specifica dipende dalla tipologia di cookie e dal fornitore.',
      },
      {
        title: 'Gestione dei cookie',
        body:
          'L\'utente può in qualsiasi momento gestire, limitare o disabilitare i cookie tramite le impostazioni del proprio browser. La disattivazione dei cookie tecnici può comportare il malfunzionamento di alcune sezioni del sito.',
      },
      {
        title: 'Impostazioni del browser',
        body:
          'Le principali indicazioni per la gestione dei cookie sono disponibili nelle guide ufficiali dei browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge e altri). Per informazioni dettagliate si consiglia di consultare la documentazione ufficiale del browser in uso.',
      },
      {
        title: 'Revoca del consenso',
        body: (
          <>
            <p>Puoi modificare in qualsiasi momento la scelta relativa agli strumenti analitici:</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="button" onClick={() => setConsent('accepted')} className="px-5 py-2 rounded-full bg-[#1F1B14] text-white text-sm hover:bg-[#D4AF37] transition-colors">
                Accetta strumenti analitici
              </button>
              <button type="button" onClick={() => setConsent('declined')} className="px-5 py-2 rounded-full border border-[#2A2A2A]/25 text-[#2A2A2A] text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                Revoca o rifiuta
              </button>
            </div>
          </>
        ),
      },
      {
        title: 'Contatti',
        body:
          'Per qualsiasi domanda relativa alla presente informativa sui cookie è possibile scrivere a info@forexcmy.com.',
      },
      {
        title: 'Aggiornamenti dell\'informativa',
        body:
          'La presente informativa può essere aggiornata in qualsiasi momento per riflettere modifiche tecniche o normative. La data dell\'ultimo aggiornamento è indicata in cima alla pagina.',
      },
    ]}
  />
);

export default CookiePage;
