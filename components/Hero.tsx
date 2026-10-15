'use client';

import type { ReactNode } from 'react';
import { Check, Download, GitPullRequest } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { profile } from '@/lib/data/profile';
import BranchGraph from './BranchGraph';

// Short values read as tags, like topics on a GitHub repository.
const Tags = ({ items }: { items: readonly string[] }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.map((item) => (
      <li key={item} className="rounded-[2px] border border-rule px-2 text-[0.875rem] leading-6">
        {item}
      </li>
    ))}
  </ul>
);

const Hero = () => {
  const { t } = useI18n();
  const sheet = t.hero.sheet;

  // The datasheet reads like the checks box on a pull request: every category
  // is a passing check, and the status sits where the merge box would be.
  const checks: { label: string; content: ReactNode }[] = [
    { label: sheet.focus, content: <Tags items={sheet.focusItems} /> },
    { label: sheet.frameworks, content: <Tags items={profile.frameworks} /> },
    { label: sheet.pipelines, content: <Tags items={profile.pipelines} /> },
    {
      label: sheet.industries,
      content: (
        <ul className="grid list-disc gap-x-8 gap-y-1.5 pl-5 marker:text-graphite sm:grid-cols-2">
          {sheet.industryItems.map(({ name, detail }) => (
            <li key={name}>
              {name}
              {detail && <span className="block text-[0.875rem] text-graphite">{detail}</span>}
            </li>
          ))}
        </ul>
      ),
    },
    { label: sheet.basedIn, content: <p>{sheet.basedInValue}</p> },
    {
      label: sheet.languages,
      content: (
        <ul className="list-disc space-y-1 pl-5 marker:text-graphite">
          {sheet.languageItems.map(({ name, level }) => (
            <li key={name}>
              {name}
              <span className="text-graphite">, {level}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section id="top" className="pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
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

          <div className="self-start rounded-[2px] border border-rule bg-sheet text-[0.9375rem] lg:col-span-6">
            <dl className="grid gap-5 px-5 py-5 md:px-6">
              {checks.map(({ label, content }) => (
                <div key={label}>
                  <dt className="flex items-center gap-3 font-medium">
                    <Check size={16} strokeWidth={2.5} aria-hidden className="shrink-0 text-pass" />
                    {label}
                  </dt>
                  <dd className="mt-2 pl-7">{content}</dd>
                </div>
              ))}
            </dl>

            <div className="flex items-center gap-3 border-t border-rule px-5 py-4 md:px-6">
              <GitPullRequest size={24} aria-hidden className="shrink-0 text-pass" />
              <div>
                <p className="font-semibold">
                  <span className="sr-only">{sheet.status}: </span>
                  {sheet.statusValue}
                </p>
                <p className="text-[0.875rem] text-graphite">{sheet.readyToMerge}</p>
              </div>
            </div>
          </div>
        </div>

        <BranchGraph />
      </div>
    </section>
  );
};

export default Hero;
