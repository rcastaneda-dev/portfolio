'use client';

import { Download } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { profile } from '@/lib/data/profile';
import CareerStrip from './CareerStrip';

const Hero = () => {
  const { t } = useI18n();
  const sheet = t.hero.sheet;

  // The datasheet reads like a spec sheet: a key and a value per line.
  const rows = [
    { label: sheet.focus, value: sheet.focusValue },
    { label: sheet.frameworks, value: profile.frameworks.join(', ') },
    { label: sheet.pipelines, value: profile.pipelines.join(', ') },
    { label: sheet.industries, value: sheet.industriesValue },
    { label: sheet.basedIn, value: sheet.basedInValue },
  ];

  return (
    <section id="top" className="pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="display">{t.hero.title}</h1>
            <p className="mt-8 max-w-[40ch] font-serif text-[1.375rem] leading-[1.4] md:text-[1.625rem]">
              {t.hero.lede}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-solid">
                {t.hero.emailMe}
              </a>
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className="btn btn-outline"
              >
                <Download size={18} aria-hidden />
                {t.hero.downloadResume}
              </a>
            </div>
          </div>

          <dl className="grid content-start gap-5 rounded-[2px] border border-rule bg-sheet p-6 md:p-8 lg:col-span-5">
            {rows.map(({ label, value }) => (
              <div key={label} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                <dt className="text-[0.9375rem] text-graphite">{label}</dt>
                <dd className="text-[0.9375rem]">{value}</dd>
              </div>
            ))}
            <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
              <dt className="text-[0.9375rem] text-graphite">{sheet.status}</dt>
              <dd className="flex items-start gap-2 text-[0.9375rem]">
                <span
                  aria-hidden
                  className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-pass"
                />
                {sheet.statusValue}
              </dd>
            </div>
          </dl>
        </div>

        <CareerStrip />
      </div>
    </section>
  );
};

export default Hero;
