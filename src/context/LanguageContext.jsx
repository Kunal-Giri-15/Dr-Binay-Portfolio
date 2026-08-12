import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isHindi, setIsHindi] = useState(false);

  const toggleLanguage = () => setIsHindi(prev => !prev);

  return (
    <LanguageContext.Provider value={{ isHindi, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
