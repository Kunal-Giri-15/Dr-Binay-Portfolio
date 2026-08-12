import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { isHindi } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200 px-6 sm:px-8 lg:px-12 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
          <span className="font-bold text-primary text-base">Dr. Pratik Giri</span>
          <span className="hidden sm:inline text-slate-300">·</span>
          <span className="text-slate-500">
            {isHindi ? 'फिजियोथेरेपिस्ट एवं पुनर्वास विशेषज्ञ' : 'Physiotherapist & Rehabilitation Expert'}
          </span>
        </div>
        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Dr. Pratik Giri.{' '}
          {isHindi ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
