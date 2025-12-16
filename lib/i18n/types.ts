export type Locale = 'en' | 'es' | 'fr';

export interface LocaleInfo {
  code: Locale;
  name: string;
  flag: string;
}

export const locales: LocaleInfo[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

