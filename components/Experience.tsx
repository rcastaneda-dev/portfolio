'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { qaRoles, devRoles, formatPlace, formatSpan, versionById, type Role } from '@/lib/data/career';
import { visibleGroups, type ChangeGroup, type Changes } from '@/lib/data/changelog';
import Section from './Section';

// Commit dots: filled for additions, a dark ring for changes, a green ring for fixes.
const dotClass: Record<ChangeGroup, string> = {
  added: 'bg-pass',
  changed: 'border-2 border-ink bg-bench',
  fixed: 'border-2 border-pass bg-bench',
};

// A role's changes read as a short commit log: each group label sits on the
// branch line like a git ref, and every entry is a commit on it.
const CommitLog = ({ changes, labels }: { changes: Changes; labels: Record<ChangeGroup, string> }) => {
  const groups = visibleGroups(changes);
  const lastGroup = groups[groups.length - 1];

  return (
    <div className="relative mt-4 max-w-[68ch]">
      <span aria-hidden className="absolute bottom-0 left-[5px] top-0 w-0.5 bg-ink/30" />
      <dl className="relative space-y-4">
        {groups.map((group) => (
          <div key={group} className="space-y-2">
            <dt className="flex">
              <span className="rounded-[2px] border border-rule bg-bench px-1.5 text-[0.75rem] font-medium leading-5 text-graphite">
                {labels[group]}
              </span>
            </dt>
            <dd>
              <ul className="space-y-2 font-serif text-[1.0625rem] leading-[1.65]">
                {changes[group].map((item, index) => (
                  <li key={item} className="relative pl-7">
                    <span aria-hidden className={`absolute left-0 top-2 h-3 w-3 rounded-full ${dotClass[group]}`} />
                    {/* The branch line ends at the last commit. */}
                    {group === lastGroup && index === changes[group].length - 1 && (
                      <span aria-hidden className="absolute bottom-0 left-0 top-5 w-3 bg-bench" />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

// One release entry: version and branch, dates, then Added / Changed / Fixed.
const RoleRow = ({ role }: { role: Role }) => {
  const { t } = useI18n();
  const job = t.experience.jobs[role.id];
  const place = formatPlace(role, t.experience.workMode[role.workMode]);

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
        <p className="mt-2">{formatSpan(role, t.experience.to, t.experience.present)}</p>
        <p className="mt-1">{place}</p>
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-[1.125rem] font-semibold leading-snug">{job.title}</h3>
        <p className="mt-0.5 text-[0.9375rem] font-medium">{job.company}</p>
        <CommitLog changes={job.changes} labels={t.experience.groups} />

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
