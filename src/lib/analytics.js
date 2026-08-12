import posthog from 'posthog-js';

const CONSENT_KEY = 'forexcmy_cookie_consent'; // 'accepted' | 'declined' | null
let initialized = false;

export const getConsent = () => {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
};

export const setConsent = (value) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {}
  if (value === 'accepted') initPostHog();
  if (value === 'declined' && initialized) {
    posthog.opt_out_capturing();
  }
};

export const initPostHog = () => {
  if (initialized) return;
  const key = process.env.REACT_APP_POSTHOG_KEY;
  const host = process.env.REACT_APP_POSTHOG_HOST || 'https://app.posthog.com';
  if (!key) return;

  posthog.init(key, {
    api_host: host,
    person_profiles: 'identified_only',
    autocapture: true,
    capture_pageview: false, // handled manually via track() to be route-aware
    disable_session_recording: true,
    loaded: (ph) => {
      if (getConsent() !== 'accepted') ph.opt_out_capturing();
    },
  });
  initialized = true;
};

export const track = (event, properties = {}) => {
  if (!initialized || getConsent() !== 'accepted') return;
  try {
    posthog.capture(event, properties);
  } catch {}
};

// Sends a custom event to the Google Analytics tag loaded in public/index.html.
// Analytics storage is used only after the visitor has accepted cookies.
export const trackGoogleEvent = (event, properties = {}) => {
  if (getConsent() !== 'accepted') return;
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  try {
    window.gtag('event', event, properties);
  } catch {}
};

export const identify = (userId, traits = {}) => {
  if (!initialized || getConsent() !== 'accepted') return;
  try {
    posthog.identify(userId, traits);
  } catch {}
};

export const resetAnalyticsUser = () => {
  if (!initialized) return;
  try {
    posthog.reset();
  } catch {}
};

// Attempt auto-init if consent already given (e.g. returning user)
if (typeof window !== 'undefined' && getConsent() === 'accepted') {
  initPostHog();
}
