'use client';

import { useI18n } from '@/lib/i18n';
import { profile } from '@/lib/data/profile';
import ContactForm from './ContactForm';
import Section from './Section';

// Set in `.env.local` and in the Vercel project. When it is missing, the
// section falls back to a plain email button, so a dead form can never ship.
const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const Contact = () => {
  const { t } = useI18n();
  const details = t.contact.details;

  const rows = [
    {
      label: details.email,
      content: (
        <a href={`mailto:${profile.email}`} className="link inline-block py-2">
          {profile.email}
        </a>
      ),
    },
    {
      label: details.linkedin,
      content: (
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link inline-block py-2"
        >
          rcastaneda-dev
          <span className="sr-only"> ({t.projects.newTab})</span>
        </a>
      ),
    },
    {
      label: details.github,
      content: (
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link inline-block py-2"
        >
          rcastaneda-dev
          <span className="sr-only"> ({t.projects.newTab})</span>
        </a>
      ),
    },
    {
      label: details.phone,
      content: (
        <a href={profile.phoneHref} className="link inline-block py-2">
          {profile.phone}
        </a>
      ),
    },
    {
      label: details.location,
      content: <span className="inline-block py-2">{details.locationValue}</span>,
    },
  ];

  return (
    <Section id="contact" title={t.contact.title}>
      <div className={`grid gap-12 ${FORM_ID ? 'lg:grid-cols-2 lg:gap-16' : ''}`}>
        <div>
          <p className="max-w-[40ch] font-serif text-[1.25rem] leading-[1.5]">
            {t.contact.subtitle}
          </p>

          <dl className="mt-8">
            {rows.map(({ label, content }) => (
              <div key={label} className="grid sm:grid-cols-[7rem_1fr] sm:gap-4">
                <dt className="pt-2 text-[0.9375rem] text-graphite">{label}</dt>
                <dd className="text-[0.9375rem]">{content}</dd>
              </div>
            ))}
          </dl>

          {!FORM_ID && (
            <a href={`mailto:${profile.email}`} className="btn btn-solid mt-8">
              {t.hero.emailMe}
            </a>
          )}
        </div>

        {FORM_ID && <ContactForm formId={FORM_ID} />}
      </div>
    </Section>
  );
};

export default Contact;
