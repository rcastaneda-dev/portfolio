'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { roles, monthIndex, formatMonth, type RoleId } from '@/lib/data/career';

// The strip's time axis runs from the first month worked to the last.
const START = Math.min(...roles.map((r) => monthIndex(r.start)));
const END = Math.max(...roles.map((r) => monthIndex(r.end))) + 1; // exclusive
const SPAN = END - START;

const percent = (months: number) => `${(months / SPAN) * 100}%`;

// Oldest first, so the draw-in sweeps left to right. Development bars are
// painted last so the two-month overlap at Rulesware stays readable.
const chronological = [...roles].sort((a, b) => monthIndex(a.start) - monthIndex(b.start));
const paintOrder = [...chronological].sort(
  (a, b) => Number(a.kind === 'dev') - Number(b.kind === 'dev'),
);

const ticks = [2014, 2016, 2018, 2020, 2022, 2024].map((year) => ({
  year,
  offset: percent(year * 12 - START),
}));

// Horizontal padding (16px) plus the bar's border, so a label never touches the edge.
const BAR_CHROME = 20;

const CareerStrip = () => {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState<RoleId | null>(null);
  const [stripWidth, setStripWidth] = useState(0);
  const [labelWidths, setLabelWidths] = useState<Record<string, number>>({});
  const stripRef = useRef<HTMLDivElement>(null);

  // A bar shows its company name only when the measured text fits inside it.
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const observer = new ResizeObserver(([entry]) => setStripWidth(entry.contentRect.width));
    observer.observe(strip);

    let cancelled = false;
    document.fonts.ready.then(() => {
      const sample = strip.firstElementChild;
      const ctx = document.createElement('canvas').getContext('2d');
      if (cancelled || !sample || !ctx) return;
      const style = getComputedStyle(sample);
      ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const widths: Record<string, number> = {};
      roles.forEach((r) => {
        widths[r.shortName] = ctx.measureText(r.shortName).width;
      });
      setLabelWidths(widths);
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  const labelFits = (barPx: number, name: string) =>
    name in labelWidths && barPx >= labelWidths[name] + BAR_CHROME;

  const active = roles.find((r) => r.id === activeId);
  const readout = active
    ? `${active.shortName}, ${t.experience.jobs[active.id].title}, ${formatMonth(active.start)} ${t.experience.to} ${formatMonth(active.end)}`
    : t.hero.strip.summary;

  return (
    <div className="mt-16 md:mt-20">
      <div
        ref={stripRef}
        role="group"
        aria-label={t.hero.strip.label}
        className="relative h-10 md:h-12"
        onMouseLeave={() => setActiveId(null)}
      >
        {paintOrder.map((role) => {
          const startOffset = monthIndex(role.start) - START;
          const months = monthIndex(role.end) + 1 - monthIndex(role.start);
          const job = t.experience.jobs[role.id];
          const dimmed = activeId !== null && activeId !== role.id;

          return (
            <a
              key={role.id}
              href={`#exp-${role.id}`}
              aria-label={`${role.shortName}, ${job.title}, ${formatMonth(role.start)} ${t.experience.to} ${formatMonth(role.end)}`}
              onMouseEnter={() => setActiveId(role.id)}
              onFocus={() => setActiveId(role.id)}
              onBlur={() => setActiveId(null)}
              style={
                {
                  left: percent(startOffset),
                  width: percent(months),
                  '--i': chronological.findIndex((r) => r.id === role.id),
                } as React.CSSProperties
              }
              // QA bars carry a bench-colored left edge so back-to-back roles stay distinct.
              className={`strip-bar absolute inset-y-0 flex items-center overflow-hidden whitespace-nowrap rounded-[2px] px-2 text-[0.8125rem] font-medium transition-opacity focus-visible:outline-ink ${
                role.kind === 'qa'
                  ? 'border-l-2 border-bench bg-pass text-white'
                  : 'border-[1.5px] border-ink bg-sheet text-ink'
              } ${dimmed ? 'opacity-35' : ''}`}
            >
              {labelFits((months / SPAN) * stripWidth, role.shortName) && role.shortName}
            </a>
          );
        })}
      </div>

      <div aria-hidden className="relative mt-2 h-6 text-[0.8125rem] tabular-nums text-graphite">
        {ticks.map(({ year, offset }, i) => (
          <span
            key={year}
            style={{ left: offset }}
            className={`absolute top-0 -translate-x-1/2 ${i % 2 === 1 ? 'max-md:hidden' : ''}`}
          >
            {year}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-12">
        <p aria-live="polite" className="min-h-[3rem] max-w-[62ch] text-[0.9375rem] md:min-h-[1.5rem]">
          {readout}
        </p>
        <ul className="flex shrink-0 gap-6 text-[0.8125rem] text-graphite">
          <li className="flex items-center gap-2">
            <span aria-hidden className="h-3 w-5 rounded-[2px] bg-pass" />
            {t.hero.strip.qa}
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden className="h-3 w-5 rounded-[2px] border-[1.5px] border-ink bg-sheet" />
            {t.hero.strip.dev}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareerStrip;
