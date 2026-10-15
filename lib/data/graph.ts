// Geometry for the career branch graph. SVG user space is 1000 × 160 and
// stretches horizontally to its container; labels are HTML, positioned with the
// same percentages, so text never stretches.

import { chronologicalRoles, endMonth, monthIndex, type Role, type RoleId } from './career';

export const VIEW_W = 1000;
export const VIEW_H = 160;
const PAD = 20;
const FORK = 16;
export const LANE_Y = { dev: 32, main: 80, qa: 128 } as const;

export const AXIS_START = monthIndex(chronologicalRoles[0].start);
export const AXIS_END = Math.max(...chronologicalRoles.map((r) => monthIndex(endMonth(r)))) + 1;
const SPAN = AXIS_END - AXIS_START;

/** x in SVG units for an absolute month index. */
export const xUnits = (month: number) => PAD + ((month - AXIS_START) / SPAN) * (VIEW_W - 2 * PAD);

/** x as a percentage of the graph width, for HTML overlays. */
export const xPercent = (month: number) => (xUnits(month) / VIEW_W) * 100;

/** A role's segment on its lane, from its first month to the month after its last. */
export function segmentOf(role: Role): { x0: number; x1: number; y: number } {
  return {
    x0: xUnits(monthIndex(role.start)),
    x1: xUnits(monthIndex(endMonth(role)) + 1),
    y: LANE_Y[role.kind],
  };
}

/**
 * Fork off main at the start, run along the lane, merge back into main at the
 * end. The current role has not merged yet, so its branch stays open.
 */
export function rolePath(role: Role): string {
  const { x0, x1, y } = segmentOf(role);
  const m = LANE_Y.main;
  const path = [
    `M ${x0 - FORK} ${m}`,
    `C ${x0 - FORK / 2} ${m}, ${x0 - FORK / 2} ${y}, ${x0} ${y}`,
    `L ${x1} ${y}`,
  ];
  if (role.end !== null) path.push(`C ${x1 + FORK / 2} ${y}, ${x1 + FORK / 2} ${m}, ${x1 + FORK} ${m}`);
  return path.join(' ');
}

/** Width of a role's segment in CSS pixels, for a graph area `areaPx` wide. */
export function segmentPx(role: Role, areaPx: number): number {
  const { x0, x1 } = segmentOf(role);
  return ((x1 - x0) / VIEW_W) * areaPx;
}

/** Gap between a node's centre and its label's left edge, in CSS pixels. */
export const LABEL_OFFSET = 10;

/**
 * Left edge, in CSS pixels, of each role's label in a graph area `areaPx` wide.
 * A label starts LABEL_OFFSET right of its node; on narrow screens a label that
 * would run into the previous label on the same lane is pushed right instead,
 * and one that would run past the right edge slides left. Labels sit above or
 * below their node, so sliding past it never covers it.
 */
export function labelLefts(
  areaPx: number,
  widthOf: (role: Role) => number,
  gap = 4,
): Record<RoleId, number> {
  const lefts = {} as Record<RoleId, number>;
  (['dev', 'qa'] as const).forEach((lane) => {
    let previousRight = -Infinity;
    chronologicalRoles
      .filter((role) => role.kind === lane)
      .forEach((role) => {
        const nodeX = (segmentOf(role).x0 / VIEW_W) * areaPx;
        const width = widthOf(role);
        const earliest = previousRight + gap;
        const left = Math.max(Math.min(Math.max(nodeX + LABEL_OFFSET, earliest), areaPx - width), earliest);
        lefts[role.id] = left;
        previousRight = left + width;
      });
  });
  return lefts;
}

/** Every other January on the axis, from the first full year to the build year. */
export const yearTicks: { year: number; left: number }[] = [];
for (let year = Math.ceil(AXIS_START / 12); year * 12 < AXIS_END; year += 2) {
  yearTicks.push({ year, left: xPercent(year * 12) });
}
