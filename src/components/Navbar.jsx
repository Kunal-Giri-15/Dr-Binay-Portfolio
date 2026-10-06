import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isHindi, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { href: '#home',         label: isHindi ? 'होम'           : 'Home' },
    { href: '#about',        label: isHindi ? 'हमारे बारे में' : 'About' },
    { href: '#services',     label: isHindi ? 'सेवाएं'         : 'Services' },
    { href: '#testimonials', label: isHindi ? 'समीक्षाएं'      : 'Testimonials' },
    { href: '#contact',      label: isHindi ? 'संपर्क'         : 'Contact' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/60'
            : 'bg-white/70 backdrop-blur-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-3.5 md:py-4 flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl font-poppins font-bold text-primary leading-tight">
            Dr. Binay Mourya<span className="text-secondary">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="relative group hover:text-primary transition-colors duration-200"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop right side: Language Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle — desktop */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="relative flex items-center h-8 w-[72px] rounded-full border border-slate-200 bg-slate-100 hover:bg-slate-200 transition-colors duration-200 px-1 gap-1 overflow-hidden"
            >
              <span
                className={`absolute inset-y-0.5 w-[32px] rounded-full bg-primary shadow-sm transition-all duration-300 ${isHindi ? 'left-[36px]' : 'left-0.5'}`}
              />
              <span className={`relative z-10 text-[11px] font-bold w-8 text-center transition-colors duration-200 ${!isHindi ? 'text-white' : 'text-slate-500'}`}>EN</span>
              <span className={`relative z-10 text-[11px] font-bold w-8 text-center transition-colors duration-200 ${isHindi ? 'text-white' : 'text-slate-500'}`}>HIN</span>
            </button>

            <a href="#appointment-form">
              <button className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30">
                {isHindi ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}
              </button>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2.5">
            {/* Language Toggle — mobile (replaces Book Appointment button) */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="relative flex items-center h-8 w-[68px] rounded-full border border-slate-200 bg-slate-100 active:bg-slate-200 transition-colors duration-200 px-0.5 overflow-hidden"
            >
              <span
                className={`absolute inset-y-0.5 w-[30px] rounded-full bg-primary shadow-sm transition-all duration-300 ${isHindi ? 'left-[34px]' : 'left-0.5'}`}
              />
              <span className={`relative z-10 text-[10px] font-bold w-[34px] text-center transition-colors duration-200 ${!isHindi ? 'text-white' : 'text-slate-500'}`}>EN</span>
              <span className={`relative z-10 text-[10px] font-bold w-[34px] text-center transition-colors duration-200 ${isHindi ? 'text-white' : 'text-slate-500'}`}>HIN</span>
            </button>

            {/* Animated Hamburger */}
            <button
              className="relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'
                  }`}
              />
              <span
                className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'
                  }`}
              />
              <span
                className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'
                  }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-down Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[62px] left-3 right-3 z-50 md:hidden bg-white rounded-3xl shadow-2xl shadow-slate-900/20 overflow-hidden border border-slate-100"
            >
              {/* Nav Links */}
              <div className="px-4 pt-4 pb-3 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="flex items-center justify-between text-slate-700 font-semibold text-base py-3.5 px-3 rounded-2xl hover:bg-primary/5 hover:text-primary active:bg-primary/10 transition-colors group"
                  >
                    <span>{l.label}</span>
                    <span className="text-slate-300 group-hover:text-primary transition-colors text-lg">›</span>
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="mx-4 h-px bg-slate-100" />

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.3 }}
                className="px-4 py-4"
              >
                <a href="#appointment-form" onClick={handleLinkClick} className="block">
                  <button className="w-full bg-primary text-white py-3.5 rounded-2xl font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all duration-200">
                    📅 {isHindi ? 'अपॉइंटमेंट बुक करें' : 'Book an Appointment'}
                  </button>
                </a>

                {/* Contact quick-info */}
                <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                  📞 <a href="tel:7523809746" className="text-primary hover:underline">75238 09746</a>
                  <span className="mx-2 text-slate-200">|</span>
                  {isHindi ? 'सोम–शनि · सुबह 9 – शाम 5' : 'Mon–Sat · 9 AM – 5 PM'}
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
