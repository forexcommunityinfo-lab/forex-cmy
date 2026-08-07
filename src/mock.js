// Mock data and localStorage functions for demo

export const mockStats = {
  totalReturn: '+217.13%',
  maxDrawdown: '65.49%',
  activeSince: 'Maggio 2026',
  numberOfTrades: '+4316',
  winRate: '[INSERIRE DATO]',
  averageReturn: '[INSERIRE DATO]'
};

export const mockTestimonials = [
  {
    id: 1,
    name: 'Martina R.',
    role: 'Commessa',
    date: '12 giugno 2026',
    content: 'All’inizio ho avuto bisogno di qualche spiegazione in più per collegare tutto, però una volta configurato è diventato semplice da seguire. Controllo i risultati ogni tanto senza stare sempre davanti al telefono.',
    rating: 4
  },
  {
    id: 2,
    name: 'Luca P.',
    role: 'Operaio metalmeccanico',
    date: '28 maggio 2026',
    content: 'Mi sono avvicinato con parecchia prudenza e con una cifra contenuta. Ci sono state settimane migliori e altre meno, quindi non è tutto sempre in salita, ma per ora il servizio mi sembra trasparente.',
    rating: 4
  },
  {
    id: 3,
    name: 'Elena M.',
    role: 'Impiegata amministrativa',
    date: '7 luglio 2026',
    content: 'La parte iniziale mi sembrava un po’ tecnica, ma l’assistenza mi ha aiutata nei vari passaggi. Apprezzo soprattutto la possibilità di controllare i dati tramite Myfxbook. È ancora presto per dare un giudizio definitivo, ma l’esperienza finora è positiva.',
    rating: 4
  },
  {
    id: 4,
    name: 'Davide C.',
    role: 'Elettricista',
    date: '19 giugno 2026',
    content: 'Utilizzo il servizio da qualche mese. Non guardo il conto tutti i giorni e preferisco ragionare sul medio periodo. Ho visto anche qualche fase negativa, cosa che mi aspettavo, ma nel complesso il funzionamento è stato coerente con quanto spiegato.',
    rating: 4
  }
];

// Newsletter subscription (localStorage for demo)
export const subscribeNewsletter = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      
      if (subscribers.includes(email)) {
        resolve({ success: false, message: 'Questo indirizzo email risulta già iscritto.' });
        return;
      }
      
      subscribers.push(email);
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      resolve({ success: true, message: 'Iscrizione completata con successo.' });
    }, 800);
  });
};

// Contact form submission (localStorage for demo)
export const submitContactForm = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const contacts = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      
      const submission = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      
      contacts.push(submission);
      localStorage.setItem('contact_submissions', JSON.stringify(contacts));
      resolve({ success: true, message: 'Messaggio inviato con successo.' });
    }, 1000);
  });
};

// Get all submissions (for demo purposes)
export const getStoredData = () => {
  return {
    newsletters: JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]'),
    contacts: JSON.parse(localStorage.getItem('contact_submissions') || '[]')
  };
};
