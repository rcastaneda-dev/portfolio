export type Locale = 'en' | 'es' | 'fr';

export interface LocaleInfo {
  code: Locale;
  /** Native name, used as the accessible label for the language buttons. */
  name: string;
}

export const locales: LocaleInfo[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];
