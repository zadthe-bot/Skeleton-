import { useState } from 'react';
import { Language } from '../types';
import { translations } from '../i18n';

export const useLocaleState = () => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('starches_lang') as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('starches_lang', lang);
  };

  const t = translations[language];

  return { language, setLanguage, t };
};
