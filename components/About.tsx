'use client';

import { useI18n } from '@/lib/i18n';
import Section from './Section';

const About = () => {
  const { t } = useI18n();
  const { capabilities } = t.about;
  const rows = [
    capabilities.automation,
    capabilities.ai,
    capabilities.fullstack,
    capabilities.crossfunctional,
  ];

  return (
    <Section id="about" title={t.about.title}>
      <p className="max-w-[46ch] font-serif text-[1.375rem] leading-[1.45] md:text-[1.625rem]">
        {t.about.lede}
      </p>

      <div className="mt-8 space-y-5">
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="prose-serif">
            {paragraph}
          </p>
        ))}
      </div>

      <dl className="mt-14 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {rows.map(({ title, description }) => (
          <div key={title}>
            <dt className="font-display text-[1.125rem] font-semibold">{title}</dt>
            <dd className="mt-1 text-graphite">{description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default About;
