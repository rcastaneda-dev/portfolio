// Geometry for the career branch graph. SVG user space is 1000 × 160 and
// stretches horizontally to its container; labels are HTML, positioned with the
// same percentages, so text never stretches.

import { chronologicalRoles, monthIndex, type Role, type RoleId } from './career';

export const VIEW_W = 1000;
export const VIEW_H = 160;
const PAD = 20;
const FORK = 16;
export const LANE_Y = { dev: 32, main: 80, qa: 128 } as const;

export const AXIS_START = monthIndex(chronologicalRoles[0].start);
export const AXIS_END = Math.max(...chronologicalRoles.map((r) => monthIndex(r.end))) + 1;
const SPAN = AXIS_END - AXIS_START;

/** x in SVG units for an absolute month index. */
export const xUnits = (month: number) => PAD + ((month - AXIS_START) / SPAN) * (VIEW_W - 2 * PAD);

/** x as a percentage of the graph width, for HTML overlays. */
export const xPercent = (month: number) => (xUnits(month) / VIEW_W) * 100;

/** A role's segment on its lane, from its first month to the month after its last. */
export function segmentOf(role: Role): { x0: number; x1: number; y: number } {
  return {
    x0: xUnits(monthIndex(role.start)),
    x1: xUnits(monthIndex(role.end) + 1),
    y: LANE_Y[role.kind],
  };
}

/** Fork off main at the start, run along the lane, merge back into main at the end. */
export function rolePath(role: Role): string {
  const { x0, x1, y } = segmentOf(role);
  const m = LANE_Y.main;
  return [
    `M ${x0 - FORK} ${m}`,
    `C ${x0 - FORK / 2} ${m}, ${x0 - FORK / 2} ${y}, ${x0} ${y}`,
    `L ${x1} ${y}`,
    `C ${x1 + FORK / 2} ${y}, ${x1 + FORK / 2} ${m}, ${x1 + FORK} ${m}`,
  ].join(' ');
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
 * would run into the previous label on the same lane is pushed right instead.
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
        const left = Math.max(nodeX + LABEL_OFFSET, previousRight + gap);
        lefts[role.id] = left;
        previousRight = left + widthOf(role);
      });
  });
  return lefts;
}

export const yearTicks = [2014, 2016, 2018, 2020, 2022, 2024].map((year) => ({
  year,
  left: xPercent(year * 12),
}));
