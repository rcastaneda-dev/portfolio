'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Locale } from './types';
import { translations, type Translations } from './translations';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'portfolio-locale';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved locale from localStorage on mount
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    let initial: Locale = 'en';
    if (savedLocale && ['en', 'es', 'fr'].includes(savedLocale)) {
      initial = savedLocale;
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (['en', 'es', 'fr'].includes(browserLang)) {
        initial = browserLang as Locale;
      }
    }
    setLocaleState(initial);
    // Keep <html lang> in step with the content on first load, not only after a switch.
    document.documentElement.lang = initial;
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    // Update HTML lang attribute
    document.documentElement.lang = newLocale;
  };

  // Prevent hydration mismatch by returning default locale until mounted
  const value: I18nContextType = {
    locale: mounted ? locale : 'en',
    setLocale,
    t: translations[mounted ? locale : 'en'],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

