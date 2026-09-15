import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Language } from './types';

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: <T extends { ar: string; en: string }>(value: T) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('fikra-lang') as Language) || 'ar');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('fikra-lang', lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    setLang,
    toggleLanguage: () => setLang((v: Language) => (v === 'ar' ? 'en' : 'ar')),
    t: <T extends { ar: string; en: string }>(value: T) => value[lang]
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
