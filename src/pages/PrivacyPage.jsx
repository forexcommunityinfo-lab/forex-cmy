import React from 'react';
import LegalPage from './LegalPage';

const PrivacyPage = () => (
  <LegalPage
    eyebrow="Legale"
    title="Informativa sulla privacy"
    subtitle="Come raccogliamo, utilizziamo e proteggiamo i dati personali degli utenti del sito Forex_CMY."
    lastUpdated="[DATA ULTIMO AGGIORNAMENTO]"
    sections={[
      {
        title: 'Titolare del trattamento',
        body: (
          <>
            <p>
              Il titolare del trattamento dei dati personali raccolti tramite questo sito è:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>[NOME E COGNOME / RAGIONE SOCIALE]</li>
              <li>[INDIRIZZO]</li>
              <li>[EMAIL DI CONTATTO]</li>
              <li>[PARTITA IVA, SE APPLICABILE]</li>
            </ul>
            <p>
              Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile scrivere all'indirizzo email indicato sopra.
            </p>
          </>
        ),
      },
      {
        title: 'Dati raccolti',
        body: (
          <>
            <p>Il sito può raccogliere le seguenti categorie di dati:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>dati forniti volontariamente tramite il modulo di contatto (nome, indirizzo email, contenuto del messaggio);</li>
              <li>indirizzo email fornito volontariamente per l'iscrizione alla newsletter o per il download dell'eBook gratuito;</li>
              <li>dati tecnici raccolti automaticamente durante la navigazione (indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orari di accesso);</li>
              <li>dati raccolti tramite cookie tecnici, come descritto nell'informativa sui cookie.</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Modalità di raccolta',
        body:
          'I dati vengono raccolti direttamente dall\'utente al momento della compilazione dei moduli disponibili sul sito, oppure automaticamente tramite i sistemi tecnici che gestiscono la navigazione. Non vengono utilizzati sistemi di raccolta occulti.',
      },
      {
        title: 'Finalità del trattamento',
        body: (
          <>
            <p>I dati raccolti vengono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>rispondere alle richieste inviate tramite il modulo di contatto;</li>
              <li>inviare comunicazioni informative relative al servizio, previo consenso;</li>
              <li>fornire il materiale informativo richiesto (es. eBook);</li>
              <li>garantire il corretto funzionamento tecnico del sito e la sicurezza della navigazione;</li>
              <li>adempiere a eventuali obblighi di legge.</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Base giuridica',
        body:
          'Il trattamento è basato sul consenso dell\'utente per l\'invio di comunicazioni informative, sull\'esecuzione di una richiesta dell\'interessato per le comunicazioni relative ai moduli compilati, e sul legittimo interesse del titolare per la sicurezza e il corretto funzionamento del sito.',
      },
      {
        title: 'Conservazione dei dati',
        body:
          'I dati personali vengono conservati esclusivamente per il tempo necessario a raggiungere le finalità per le quali sono stati raccolti. In assenza di ulteriori richieste o consensi, i dati vengono cancellati dopo un periodo ragionevole di conservazione.',
      },
      {
        title: 'Destinatari e fornitori esterni',
        body: (
          <>
            <p>
              I dati possono essere trattati da fornitori tecnici esterni che supportano il funzionamento del sito, ad esempio:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>servizi di hosting e infrastruttura;</li>
              <li>servizi di invio email e newsletter;</li>
              <li>piattaforme esterne collegate al sito (ad es. Myfxbook, video incorporati, link a social media).</li>
            </ul>
            <p>
              Tali fornitori operano in qualità di responsabili del trattamento o autonomi titolari, secondo le rispettive informative privacy.
            </p>
          </>
        ),
      },
      {
        title: 'Trasferimenti internazionali',
        body:
          'Qualora alcuni fornitori tecnici siano situati al di fuori dello Spazio Economico Europeo, i trasferimenti avvengono nel rispetto delle garanzie previste dalla normativa applicabile in materia di protezione dei dati.',
      },
      {
        title: 'Diritti dell\'utente',
        body: (
          <>
            <p>
              L'utente ha il diritto di accedere ai propri dati personali, richiederne la rettifica o la cancellazione, opporsi al trattamento, richiedere la limitazione del trattamento e la portabilità dei dati, nei limiti previsti dalla normativa applicabile.
            </p>
            <p>
              Per esercitare tali diritti è possibile scrivere all'indirizzo email indicato al punto 1.
            </p>
          </>
        ),
      },
      {
        title: 'Sicurezza',
        body:
          'Vengono adottate misure tecniche e organizzative ragionevoli per proteggere i dati personali da accessi non autorizzati, perdita, alterazione o distruzione. Tuttavia nessun sistema può garantire una sicurezza assoluta.',
      },
      {
        title: 'Minori',
        body:
          'Il sito non è rivolto a minori di 18 anni. Non vengono raccolti consapevolmente dati personali di soggetti minori.',
      },
      {
        title: 'Contatti',
        body:
          'Per qualsiasi domanda o richiesta relativa alla presente informativa è possibile scrivere all\'indirizzo email indicato nella sezione "Titolare del trattamento".',
      },
      {
        title: 'Modifiche all\'informativa',
        body:
          'La presente informativa può essere aggiornata in qualsiasi momento per riflettere cambiamenti nel servizio o nella normativa. La data dell\'ultimo aggiornamento è indicata in cima alla pagina.',
      },
    ]}
  />
);

export default PrivacyPage;
