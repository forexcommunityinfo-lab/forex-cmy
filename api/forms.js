const ALLOWED_TYPES = new Set(['contact', 'recognition', 'ebook', 'newsletter']);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, maxLength) =>
  String(value || '').replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, maxLength);

const labels = {
  contact: 'Nuovo messaggio dal portale',
  recognition: 'Nuova richiesta — Riconoscimento annuale',
  ebook: 'Nuovo download — eBook gratuito',
  newsletter: 'Nuova iscrizione — Newsletter',
};

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Metodo non consentito.' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  } catch {
    return res.status(400).json({ success: false, message: 'Dati non validi.' });
  }

  const type = clean(body.type, 30);
  const email = clean(body.email, 254).toLowerCase();
  const name = clean(body.name, 120);
  const subject = clean(body.subject, 160);
  const message = clean(body.message, 5000);

  if (body.website) return res.status(200).json({ success: true, message: 'Richiesta ricevuta.' });
  if (!ALLOWED_TYPES.has(type) || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ success: false, message: 'Controlla i dati inseriti.' });
  }
  if ((type === 'contact' || type === 'recognition') && (!name || !message)) {
    return res.status(400).json({ success: false, message: 'Nome e messaggio sono obbligatori.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'info@forexcmy.com';
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error('Missing RESEND_API_KEY or RESEND_FROM_EMAIL');
    return res.status(503).json({ success: false, message: 'Servizio momentaneamente non disponibile.' });
  }

  const lines = [labels[type], '', `Categoria: ${type}`, name && `Nome: ${name}`, `Email: ${email}`,
    subject && `Oggetto indicato: ${subject}`, message && '', message && 'Messaggio:', message, '',
    `Data: ${new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })}`]
    .filter((line) => line !== false && line !== undefined);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: [to], reply_to: email,
        subject: `[Forex CMY] ${labels[type]}`,
        text: lines.join('\n'),
      }),
    });
    if (!response.ok) {
      console.error('Resend error:', response.status, await response.text());
      return res.status(502).json({ success: false, message: 'Invio non riuscito. Riprova tra poco.' });
    }
    return res.status(200).json({
      success: true,
      message: type === 'newsletter' ? 'Iscrizione completata con successo.' : 'Richiesta inviata con successo.',
    });
  } catch (error) {
    console.error('Forms API error:', error);
    return res.status(500).json({ success: false, message: 'Invio non riuscito. Riprova tra poco.' });
  }
};
