'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, CalendarDays, MapPin, MousePointer2, Pointer, Tag } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { chronologicalRoles, formatPlace, formatSpan, versionById, type Role, type RoleId } from '@/lib/data/career';
import { LABEL_OFFSET, LANE_Y, VIEW_H, VIEW_W, labelLefts, rolePath, segmentOf, segmentPx, yearTicks } from '@/lib/data/graph';

// The room a label keeps before the end of its segment, and the gap before the company name.
const LABEL_MARGIN = 8;
const NAME_GAP = 8;

// The hover card may spill into the lane labels and the panel padding on its
// left, and into the panel padding on its right, but never past the panel.
const CARD_WIDTH = 288;
const CARD_SPILL_LEFT = 56;
const CARD_SPILL_RIGHT = 16;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

// A GitHub-style hovercard for one release: tag, role, company, then dates,
// industry and place. Screen readers get the same facts from the node's label.
const HoverCard = ({ role, areaWidth }: { role: Role; areaWidth: number }) => {
  const { t } = useI18n();
  const job = t.experience.jobs[role.id];
  const { x0, y } = segmentOf(role);
  const nodeX = (x0 / VIEW_W) * areaWidth;
  const width = Math.min(CARD_WIDTH, areaWidth + CARD_SPILL_LEFT + CARD_SPILL_RIGHT);
  const left = clamp(nodeX - 24, -CARD_SPILL_LEFT, areaWidth + CARD_SPILL_RIGHT - width);
  const details = [
    { icon: CalendarDays, text: formatSpan(role, t.experience.to, t.experience.present) },
    { icon: Building2, text: job.industry },
    { icon: MapPin, text: formatPlace(role, t.experience.workMode[role.workMode]) },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-20 rounded-md border border-rule bg-sheet p-4 text-ink"
      style={{ left, top: y + 20, width }}
    >
      <span
        className="absolute -top-[7px] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-rule bg-sheet"
        style={{ left: clamp(nodeX - left, 16, width - 16) }}
      />
      <div className="flex items-center gap-2 text-[0.875rem]">
        <Tag size={16} className="shrink-0 text-graphite" />
        <span className="font-display font-semibold">{versionById[role.id]}</span>
        <span className="rounded-[2px] border border-rule px-1.5 text-[0.75rem] leading-5 text-graphite">
          {role.kind}
        </span>
        {role.end === null && (
          <span className="ml-auto rounded-full border border-pass px-2 text-[0.75rem] font-medium leading-5 text-pass">
            {t.hero.graph.latest}
          </span>
        )}
      </div>
      <p className="mt-2 font-display font-semibold leading-snug">{job.title}</p>
      <p className="text-[0.875rem] text-graphite">{job.company}</p>
      <ul className="mt-3 space-y-1.5 border-t border-rule pt-3 text-[0.875rem] text-graphite">
        {details.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2">
            <Icon size={14} className="shrink-0" />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

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
    const job = t.experience.jobs[id];
    return `${versionById[id]}, ${role.shortName}, ${job.title}, ${formatSpan(role, t.experience.to, t.experience.present)}, ${job.industry}`;
  };

  // Re-clicking a node whose hash is already in the URL fires no hashchange.
  // A rendered row only needs scrolling; a collapsed development role is
  // reopened by announcing the hash again (Experience listens for hashchange).
  const revisit = (event: React.MouseEvent, id: RoleId) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (window.location.hash !== `#exp-${id}`) return;
    event.preventDefault();
    const row = document.getElementById(`exp-${id}`);
    if (row) row.scrollIntoView();
    else window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  // Names show only where the measured label fits inside the role's segment.
  const showName = (role: (typeof chronologicalRoles)[number]) =>
    measure !== null &&
    LABEL_OFFSET + measure(versionById[role.id]) + NAME_GAP + measure(role.shortName) + LABEL_MARGIN <=
      segmentPx(role, areaWidth);
  // Once fonts are measured, labels are laid out so neighbours on a lane never overlap.
  const activeRole = chronologicalRoles.find((role) => role.id === activeId);
  const lefts =
    measure !== null && areaWidth > 0
      ? labelLefts(areaWidth, (role) =>
          measure(versionById[role.id]) + (showName(role) ? NAME_GAP + measure(role.shortName) : 0),
        )
      : null;

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
            aria-describedby="graph-summary"
            className="graph-draw relative"
            style={{ height: VIEW_H }}
            onPointerLeave={(event) => event.pointerType === 'mouse' && setActiveId(null)}
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
              const nameShown = showName(role);
              const dimmed = activeId !== null && activeId !== role.id;

              return (
                <div key={role.id}>
                  <span
                    data-graph-label
                    aria-hidden
                    className={`pointer-events-none absolute whitespace-nowrap text-[0.6875rem] font-medium transition-opacity md:text-[0.75rem] ${dimmed ? 'opacity-70' : ''}`}
                    style={{
                      left: lefts ? `${lefts[role.id]}px` : `calc(${left} + ${LABEL_OFFSET}px)`,
                      top: role.kind === 'dev' ? y - 22 : y + 8,
                    }}
                  >
                    {tag}
                    {nameShown && <span className="ml-2 font-normal text-panel-muted">{role.shortName}</span>}
                  </span>
                  <a
                    href={`#exp-${role.id}`}
                    aria-label={describe(role.id)}
                    onClick={(event) => revisit(event, role.id)}
                    // A tap opens the role instead, so only a mouse or keyboard shows the card.
                    onPointerEnter={(event) => event.pointerType === 'mouse' && setActiveId(role.id)}
                    onFocus={(event) => event.currentTarget.matches(':focus-visible') && setActiveId(role.id)}
                    onBlur={() => setActiveId(null)}
                    className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline-pass-dark"
                    style={{ left, top: y }}
                  >
                    <span
                      className={`h-3 w-3 rounded-full transition-opacity ${
                        role.kind === 'qa' ? 'bg-pass-dark' : 'border-2 border-panel-muted bg-panel'
                      } ${activeId === role.id ? 'ring-2 ring-panel-ink ring-offset-2 ring-offset-panel' : ''} ${dimmed ? 'opacity-70' : ''}`}
                    />
                  </a>
                </div>
              );
            })}

            {activeRole && areaWidth > 0 && <HoverCard role={activeRole} areaWidth={areaWidth} />}
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

      <p id="graph-summary" className="sr-only">
        {t.hero.graph.summary}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.875rem] text-panel-muted">
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-3 w-3 rounded-full bg-pass-dark" />
          {t.hero.graph.qaRole}
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-3 w-3 rounded-full border-2 border-panel-muted bg-panel" />
          {t.hero.graph.devRole}
        </span>
        <span className="flex items-center gap-2 [@media(hover:none)]:hidden md:ml-auto">
          <MousePointer2 size={14} aria-hidden />
          {t.hero.graph.hint}
        </span>
        <span className="hidden items-center gap-2 [@media(hover:none)]:flex md:ml-auto">
          <Pointer size={14} aria-hidden />
          {t.hero.graph.tapHint}
        </span>
      </div>
    </div>
  );
};

export default BranchGraph;
