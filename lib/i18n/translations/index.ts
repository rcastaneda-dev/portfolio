import { en, type Translations } from './en';
import { es } from './es';
import { fr } from './fr';
import type { Locale } from '../types';

export const translations: Record<Locale, Translations> = {
  en,
  es,
  fr,
};

export type { Translations };

