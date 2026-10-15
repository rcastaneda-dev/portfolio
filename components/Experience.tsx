'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { qaRoles, devRoles, formatMonth, versionById, type Role } from '@/lib/data/career';
import { visibleGroups } from '@/lib/data/changelog';
import Section from './Section';

// One release entry: version and branch, dates, then Added / Changed / Fixed.
const RoleRow = ({ role }: { role: Role }) => {
  const { t } = useI18n();
  const job = t.experience.jobs[role.id];
  const mode = t.experience.workMode[role.workMode];
  const place = role.country ? `${role.country}, ${mode.toLowerCase()}` : mode;

  return (
    <li
      id={`exp-${role.id}`}
      className="grid gap-3 border-t border-rule py-8 md:grid-cols-[11rem_1fr] md:gap-10"
    >
      <div className="text-[0.9375rem] tabular-nums text-graphite">
        <p className="flex items-center gap-2">
          <span className="font-display text-[1.125rem] font-semibold text-ink">
            {versionById[role.id]}
          </span>
          <span className="rounded-[2px] border border-rule px-1.5 text-[0.75rem] leading-5">
            {role.kind}
          </span>
        </p>
        <p className="mt-2">
          {formatMonth(role.start)} {t.experience.to} {formatMonth(role.end)}
        </p>
        <p className="mt-1">{place}</p>
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-[1.125rem] font-semibold leading-snug">{job.title}</h3>
        <p className="mt-0.5 text-[0.9375rem] font-medium">{job.company}</p>
        <dl className="mt-4 grid max-w-[68ch] gap-y-3 sm:grid-cols-[6.5rem_1fr] sm:gap-x-4">
          {visibleGroups(job.changes).map((group) => (
            <div key={group} className="contents">
              <dt className="pt-0.5 text-[0.875rem] font-medium text-graphite">
                {t.experience.groups[group]}
              </dt>
              <dd>
                <ul className="space-y-2 font-serif text-[1.0625rem] leading-[1.65]">
                  {job.changes[group].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[0.875rem] text-graphite">{role.stack.join(', ')}</p>
      </div>
    </li>
  );
};

// The first row of each list sits flush under the heading or the button.
const listClass = '[&>li:first-child]:border-t-0 [&>li:first-child]:pt-0';

const Experience = () => {
  const { t } = useI18n();
  const [showDev, setShowDev] = useState(false);
  const pendingScrollId = useRef<string | null>(null);

  // Graph nodes link to `#exp-<id>`. Development roles start collapsed, so
  // open them when the URL hash points at one.
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (!devRoles.some((role) => `exp-${role.id}` === id)) return;
      // A rendered row is scrolled to by the browser; only a collapsed one needs opening.
      if (document.getElementById(id)) return;
      pendingScrollId.current = id;
      setShowDev(true);
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  // The row only exists once the list has rendered, so scroll after the commit.
  useEffect(() => {
    if (!showDev || !pendingScrollId.current) return;
    document.getElementById(pendingScrollId.current)?.scrollIntoView();
    pendingScrollId.current = null;
  }, [showDev]);

  return (
    <Section id="experience" title={t.experience.title}>
      <ol className={listClass}>
        {qaRoles.map((role) => (
          <RoleRow key={role.id} role={role} />
        ))}
      </ol>

      <button
        type="button"
        onClick={() => setShowDev((open) => !open)}
        aria-expanded={showDev}
        aria-controls="dev-roles"
        className="link mt-4 inline-flex min-h-11 items-center font-medium"
      >
        {showDev ? t.experience.hideDev : `${t.experience.showDev} (${devRoles.length})`}
      </button>

      {showDev && (
        <ol id="dev-roles" className="mt-4">
          {devRoles.map((role) => (
            <RoleRow key={role.id} role={role} />
          ))}
        </ol>
      )}
    </Section>
  );
};

export default Experience;
