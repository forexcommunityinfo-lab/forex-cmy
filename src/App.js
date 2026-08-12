import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './styles/animations.css';
import { Toaster } from './components/ui/sonner';
import CookieConsent from './components/CookieConsent';
import PageTracker from './components/PageTracker';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import VideoPresentationPage from './pages/VideoPresentationPage';
import ResultsPage from './pages/ResultsPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePage from './pages/CookiePage';
import PremioAnnualePage from './pages/PremioAnnualePage';
import FreeEbookPage from './pages/FreeEbookPage';

function App() {
  return (
    <BrowserRouter>
      <PageTracker />
      <ScrollToTop />
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/come-funziona" element={<HowItWorksPage />} />
        <Route path="/presentazione-video" element={<VideoPresentationPage />} />
        <Route path="/risultati" element={<ResultsPage />} />
        <Route path="/recensioni" element={<ReviewsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contatti" element={<ContactPage />} />
        <Route path="/riconoscimento-annuale" element={<PremioAnnualePage />} />
        <Route path="/ebook-gratuito" element={<FreeEbookPage />} />
        <Route path="/premio-annuale" element={<Navigate to="/riconoscimento-annuale" replace />} />

        {/* Legal */}
        <Route path="/informativa-privacy" element={<PrivacyPage />} />
        <Route path="/termini-di-servizio" element={<TermsPage />} />
        <Route path="/informativa-cookie" element={<CookiePage />} />
      </Routes>

      <CookieConsent />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
