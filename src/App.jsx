import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <LanguageProvider>
      <div className="font-inter bg-slate-50 relative pb-20 md:pb-0">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <StatsSection />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}

export default App;
