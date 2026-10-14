'use client';

import { useI18n, locales } from '@/lib/i18n';

// Three always-visible buttons: with only three languages a dropdown hides
// information for no gain.
const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useI18n();

  return (
    <div role="group" aria-label={t.nav.language} className="flex items-center">
      {locales.map(({ code, name }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-label={name}
            aria-pressed={active}
            onClick={() => setLocale(code)}
            className={`inline-flex h-11 min-w-10 items-center justify-center px-1 text-[0.8125rem] font-medium md:min-w-11 ${
              active
                ? 'text-ink underline decoration-pass decoration-2 underline-offset-[10px]'
                : 'text-graphite hover:text-ink'
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
