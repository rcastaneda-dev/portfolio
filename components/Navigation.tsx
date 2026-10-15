'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { profile } from '@/lib/data/profile';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[2px] focus:bg-ink focus:px-4 focus:py-3 focus:text-bench"
      >
        {t.nav.skip}
      </a>

      <header className="sticky top-0 z-50 border-b border-rule bg-bench">
        <div className="wrap flex h-16 items-center justify-between gap-2 md:gap-4">
          <a
            href="#top"
            className="whitespace-nowrap font-display text-base font-semibold md:text-[1.0625rem]"
          >
            {profile.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap py-2 text-[0.9375rem] underline-offset-8 hover:underline hover:decoration-pass hover:decoration-2"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-4">
            {/* Below 360px the name, languages and menu button don't fit in one row. */}
            <LanguageSwitcher className="max-[359px]:hidden" />
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="btn btn-outline hidden min-h-11 px-4 lg:inline-flex"
            >
              {t.nav.resume}
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? t.nav.closeMenu : t.nav.menu}
              className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            >
              {isOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav
            id="mobile-menu"
            aria-label="Primary mobile"
            className="border-t border-rule bg-bench lg:hidden"
          >
            <div className="wrap flex flex-col py-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-12 items-center text-[1.0625rem]"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className="flex min-h-12 items-center text-[1.0625rem] font-medium"
              >
                {t.nav.resume}
              </a>
              {/* The languages move here when the header is too narrow for them. */}
              <div className="flex min-h-12 items-center justify-between min-[360px]:hidden">
                <span aria-hidden className="text-[1.0625rem]">
                  {t.nav.language}
                </span>
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navigation;
