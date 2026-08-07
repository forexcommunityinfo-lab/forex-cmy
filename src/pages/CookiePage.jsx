import React from 'react';
import LegalPage from './LegalPage';

const CookiePage = () => (
  <LegalPage
    eyebrow="Legale"
    title="Informativa sui cookie"
    subtitle="Come vengono utilizzati i cookie e le tecnologie simili sul sito Forex_CMY."
    lastUpdated="[DATA ULTIMO AGGIORNAMENTO]"
    sections={[
      {
        title: 'Che cosa sono i cookie',
        body:
          'I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell\'utente, dove vengono memorizzati per essere ritrasmessi al sito stesso alla visita successiva. Servono a garantire il funzionamento del sito e, in alcuni casi, a migliorarne l\'esperienza d\'uso.',
      },
      {
        title: 'Cookie tecnici',
        body:
          'Il sito utilizza cookie tecnici necessari al proprio funzionamento e alla corretta navigazione. Tali cookie non richiedono consenso preventivo, in quanto strettamente indispensabili per la fornitura del servizio richiesto dall\'utente.',
      },
      {
        title: 'Cookie di preferenza',
        body:
          'I cookie di preferenza permettono al sito di ricordare scelte effettuate dall\'utente, come ad esempio la lingua o alcune impostazioni personali. Anche questi cookie hanno finalità funzionali.',
      },
      {
        title: 'Cookie analitici',
        body:
          'Al momento non risultano attivi servizi di analisi statistica sul sito. Qualora venissero introdotti in futuro strumenti analitici (ad esempio per misurare il numero di visite o il comportamento aggregato degli utenti), la presente informativa verrà aggiornata di conseguenza e verrà richiesto il consenso ove necessario.',
      },
      {
        title: 'Cookie di terze parti',
        body:
          'Alcune sezioni del sito possono includere contenuti forniti da servizi esterni (ad esempio video incorporati, widget di Myfxbook, link a piattaforme social). Tali servizi possono utilizzare propri cookie, sui quali Forex_CMY non ha controllo diretto. Per maggiori informazioni si invita l\'utente a consultare le rispettive informative privacy.',
      },
      {
        title: 'Video incorporati',
        body:
          'Eventuali video incorporati sul sito (ad esempio da piattaforme come YouTube o Vimeo) possono impostare cookie tecnici e di terze parti al momento della loro visualizzazione. Tali cookie sono gestiti direttamente dai fornitori di quei servizi.',
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
        body:
          'Qualora vengano introdotti servizi che richiedono consenso, l\'utente potrà revocarlo in qualsiasi momento modificando le proprie preferenze o eliminando i cookie tramite le impostazioni del browser.',
      },
      {
        title: 'Contatti',
        body:
          'Per qualsiasi domanda relativa alla presente informativa sui cookie è possibile scrivere all\'indirizzo [EMAIL DI CONTATTO].',
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
