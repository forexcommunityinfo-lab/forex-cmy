import React from 'react';
import LegalPage from './LegalPage';

const PrivacyPage = () => (
  <LegalPage
    eyebrow="Legale"
    title="Informativa sulla privacy"
    subtitle="Come raccogliamo, utilizziamo e proteggiamo i dati personali degli utenti del sito Forex_CMY."
    lastUpdated="8 agosto 2026"
    sections={[
      {
        title: 'Titolare del trattamento',
        body: (
          <>
            <p>
              Il titolare del trattamento dei dati personali raccolti tramite questo sito è:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Forex_CMY</li>
              <li>Email: info@forexcmy.com</li>
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
              <li>dati tecnici connessi alla navigazione, che possono includere indirizzo IP, tipo di browser, sistema operativo, pagine visitate e orari di accesso;</li>
              <li>preferenza espressa nel banner relativo agli strumenti analitici;</li>
              <li>dati raccolti tramite cookie tecnici, come descritto nell'informativa sui cookie.</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Modalità di raccolta',
        body:
          'I dati vengono forniti direttamente dall\'utente tramite i moduli presenti sul sito oppure generati dai sistemi tecnici necessari alla navigazione. Nella configurazione attuale, i dati inseriti nei moduli dimostrativi vengono memorizzati localmente nel browser dell\'utente e non sono trasmessi automaticamente a Forex_CMY. Eventuali strumenti analitici vengono attivati soltanto dopo il consenso.',
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
          'Il trattamento si basa sul consenso per comunicazioni informative e analisi statistiche non necessarie; sull\'esecuzione di misure adottate su richiesta dell\'interessato per rispondere ai contatti; sull\'adempimento di obblighi di legge; e sul legittimo interesse di Forex_CMY alla sicurezza e al corretto funzionamento tecnico del sito.',
      },
      {
        title: 'Conservazione dei dati',
        body:
          'Le richieste di contatto eventualmente ricevute vengono conservate per il tempo necessario a gestirle e, salvo necessità legali o difensive, per non oltre 12 mesi dalla chiusura della richiesta. I dati utilizzati per comunicazioni informative vengono conservati fino alla revoca del consenso. I dati salvati localmente nel browser restano sul dispositivo dell\'utente finché non vengono eliminati tramite le impostazioni del browser.',
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
              <li>eventuali servizi di invio email e newsletter, se attivati;</li>
              <li>PostHog, esclusivamente previo consenso e se configurato, per statistiche di utilizzo;</li>
              <li>piattaforme esterne raggiungibili tramite link, come Myfxbook e Instagram.</li>
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
              L'utente può chiedere l'accesso ai propri dati personali, la rettifica, la cancellazione, la limitazione, la portabilità e, quando previsto, opporsi al trattamento o revocare il consenso senza pregiudicare la liceità del trattamento precedente.
            </p>
            <p>
              Per esercitare tali diritti è possibile scrivere all'indirizzo email indicato al punto 1.
            </p>
            <p>
              L'utente può inoltre proporre reclamo al Garante per la protezione dei dati personali tramite i canali disponibili sul sito www.garanteprivacy.it.
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
