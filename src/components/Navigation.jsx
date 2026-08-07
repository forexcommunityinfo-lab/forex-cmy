import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Menu: dedicated routes for main sections; homepage anchors for eBook gratuito only
  const menuItems = [
    { label: 'Home', to: '/', type: 'route' },
    { label: 'Come funziona', to: '/come-funziona', type: 'route' },
    { label: 'Video', to: '/presentazione-video', type: 'route' },
    { label: 'Risultati', to: '/risultati', type: 'route' },
    { label: 'Recensioni', to: '/recensioni', type: 'route' },
    { label: 'Riconoscimento annuale', to: '/riconoscimento-annuale', type: 'route' },
    { label: 'eBook gratuito', to: '/#ebook', type: 'anchor' },
    { label: 'FAQ', to: '/faq', type: 'route' },
    { label: 'Contatti', to: '/contatti', type: 'route' },
  ];

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    if (to.startsWith('/#')) return false;
    return location.pathname === to;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAFAF8]/80 backdrop-blur-xl border-b border-[#2A2A2A]/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-[#2A2A2A] hover:text-[#D4AF37] transition-colors duration-300"
            >
              Forex_CMY
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(item.to)
                      ? 'text-[#D4AF37]'
                      : 'text-[#2A2A2A]/70 hover:text-[#D4AF37]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 text-[#2A2A2A]"
              aria-label="Apri o chiudi il menu"
            >
              <span
                className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 lg:hidden bg-[#FAFAF8] pt-24 px-6"
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col space-y-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-medium transition-colors duration-300 ${
                isActive(item.to) ? 'text-[#D4AF37]' : 'text-[#2A2A2A] hover:text-[#D4AF37]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
