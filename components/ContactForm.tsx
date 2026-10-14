'use client';

import { useState, type FormEvent } from 'react';
import { useI18n } from '@/lib/i18n';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const fieldClass =
  'mt-2 block w-full rounded-[2px] border border-graphite bg-bench px-4 py-3 text-base';

// The site is a static export, so there is no server to post to. The form
// sends straight to Formspree, which forwards each message to the inbox.
const ContactForm = ({ formId }: { formId: string }) => {
  const { t } = useI18n();
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (response.ok) {
        form.reset();
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const message =
    status === 'sent' ? t.contact.form.sent : status === 'error' ? t.contact.form.error : '';

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[2px] border border-rule bg-sheet p-6 md:p-8"
    >
      <div>
        <label htmlFor="contact-name" className="text-[0.9375rem] font-medium">
          {t.contact.form.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={`${fieldClass} min-h-12`}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-[0.9375rem] font-medium">
          {t.contact.form.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={`${fieldClass} min-h-12`}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-[0.9375rem] font-medium">
          {t.contact.form.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot: people never see it, bots fill it, Formspree discards those. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn btn-solid disabled:opacity-60"
        >
          {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-[0.9375rem] font-medium ${
            status === 'error' ? 'text-flag' : 'text-pass'
          }`}
        >
          {message}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
