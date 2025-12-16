'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useI18n, locales, type Locale } from '@/lib/i18n';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 glass-effect rounded-lg text-gray-300 hover:text-primary hover:neon-glow transition-all"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLocale?.flag}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-40 glass-effect rounded-lg overflow-hidden shadow-xl z-50"
            role="listbox"
          >
            {locales.map((loc) => (
              <motion.button
                key={loc.code}
                onClick={() => handleSelect(loc.code)}
                whileHover={{ backgroundColor: 'rgba(0, 217, 255, 0.1)' }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  locale === loc.code
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-300 hover:text-white'
                }`}
                role="option"
                aria-selected={locale === loc.code}
              >
                <span className="text-lg">{loc.flag}</span>
                <span className="text-sm font-medium">{loc.name}</span>
                {locale === loc.code && (
                  <motion.div
                    layoutId="activeLocale"
                    className="ml-auto w-2 h-2 bg-primary rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;

