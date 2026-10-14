'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { chronologicalRoles, formatMonth, versionById, type RoleId } from '@/lib/data/career';
import { LANE_Y, VIEW_H, VIEW_W, rolePath, segmentOf, segmentPx, yearTicks } from '@/lib/data/graph';

// Gap between a node and its label, and the room a label keeps before the next node.
const LABEL_OFFSET = 10;
const LABEL_MARGIN = 8;
const NAME_GAP = 8;

const BranchGraph = () => {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState<RoleId | null>(null);
  const [areaWidth, setAreaWidth] = useState(0);
  const [measure, setMeasure] = useState<((text: string) => number) | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  // Company names show beside the version tag only when the measured text fits
  // inside the role's segment; tags always show.
  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;

    const observer = new ResizeObserver(([entry]) => setAreaWidth(entry.contentRect.width));
    observer.observe(area);

    let cancelled = false;
    document.fonts.ready.then(() => {
      const sample = area.querySelector<HTMLElement>('[data-graph-label]');
      const ctx = document.createElement('canvas').getContext('2d');
      if (cancelled || !sample || !ctx) return;
      const style = getComputedStyle(sample);
      ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      setMeasure(() => (text: string) => ctx.measureText(text).width);
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  const describe = (id: RoleId) => {
    const role = chronologicalRoles.find((r) => r.id === id);
    if (!role) return '';
    return `${versionById[id]}, ${role.shortName}, ${t.experience.jobs[id].title}, ${formatMonth(role.start)} ${t.experience.to} ${formatMonth(role.end)}`;
  };

  return (
    <div className="mt-16 rounded-[2px] bg-panel p-4 text-panel-ink md:mt-20 md:p-6">
      <div className="flex">
        <div aria-hidden className="relative w-10 shrink-0 text-[0.75rem] text-panel-muted md:w-12" style={{ height: VIEW_H }}>
          {(['dev', 'main', 'qa'] as const).map((lane) => (
            <span key={lane} className="absolute left-0 -translate-y-1/2" style={{ top: LANE_Y[lane] }}>
              {lane}
            </span>
          ))}
        </div>

        <div className="min-w-0 flex-1">
          <div
            ref={areaRef}
            role="group"
            aria-label={t.hero.graph.label}
            className="graph-draw relative"
            style={{ height: VIEW_H }}
            onMouseLeave={() => setActiveId(null)}
          >
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              preserveAspectRatio="none"
            >
              <line x1={0} y1={LANE_Y.main} x2={VIEW_W} y2={LANE_Y.main} stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} vectorEffect="non-scaling-stroke" />
              {(['dev', 'qa'] as const).map((lane) => (
                <line key={lane} x1={0} y1={LANE_Y[lane]} x2={VIEW_W} y2={LANE_Y[lane]} stroke="currentColor" strokeOpacity={0.12} strokeDasharray="2 6" vectorEffect="non-scaling-stroke" />
              ))}
              {chronologicalRoles.map((role) => (
                <path
                  key={role.id}
                  d={rolePath(role)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  strokeOpacity={activeId && activeId !== role.id ? 0.3 : 1}
                  className={role.kind === 'qa' ? 'text-pass-dark' : 'text-panel-muted'}
                />
              ))}
            </svg>

            {chronologicalRoles.map((role) => {
              const { x0, y } = segmentOf(role);
              const left = `${(x0 / VIEW_W) * 100}%`;
              const tag = versionById[role.id];
              const showName =
                measure !== null &&
                LABEL_OFFSET + measure(tag) + NAME_GAP + measure(role.shortName) + LABEL_MARGIN <= segmentPx(role, areaWidth);
              const dimmed = activeId !== null && activeId !== role.id;

              return (
                <div key={role.id}>
                  <span
                    data-graph-label
                    aria-hidden
                    className={`pointer-events-none absolute whitespace-nowrap text-[0.6875rem] font-medium transition-opacity md:text-[0.75rem] ${dimmed ? 'opacity-40' : ''}`}
                    style={{ left: `calc(${left} + ${LABEL_OFFSET}px)`, top: role.kind === 'dev' ? y - 22 : y + 8 }}
                  >
                    {tag}
                    {showName && <span className="ml-2 font-normal text-panel-muted">{role.shortName}</span>}
                  </span>
                  <a
                    href={`#exp-${role.id}`}
                    aria-label={describe(role.id)}
                    onMouseEnter={() => setActiveId(role.id)}
                    onFocus={() => setActiveId(role.id)}
                    onBlur={() => setActiveId(null)}
                    className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline-pass-dark"
                    style={{ left, top: y }}
                  >
                    <span
                      className={`h-3 w-3 rounded-full transition-opacity ${
                        role.kind === 'qa' ? 'bg-pass-dark' : 'border-2 border-panel-muted bg-panel'
                      } ${activeId === role.id ? 'ring-2 ring-panel-ink ring-offset-2 ring-offset-panel' : ''} ${dimmed ? 'opacity-40' : ''}`}
                    />
                  </a>
                </div>
              );
            })}
          </div>

          <div aria-hidden className="relative mt-2 h-5 text-[0.75rem] tabular-nums text-panel-muted">
            {yearTicks.map(({ year, left }, i) => (
              <span
                key={year}
                className={`absolute top-0 -translate-x-1/2 ${i % 2 === 1 ? 'max-md:hidden' : ''}`}
                style={{ left: `${left}%` }}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p aria-live="polite" className="mt-4 min-h-[3rem] max-w-[62ch] text-[0.9375rem] md:min-h-[1.5rem]">
        {activeId ? describe(activeId) : t.hero.graph.summary}
      </p>
    </div>
  );
};

export default BranchGraph;
