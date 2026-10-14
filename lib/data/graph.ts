// Geometry for the career branch graph. SVG user space is 1000 × 160 and
// stretches horizontally to its container; labels are HTML, positioned with the
// same percentages, so text never stretches.

import { chronologicalRoles, monthIndex, type Role } from './career';

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

export const yearTicks = [2014, 2016, 2018, 2020, 2022, 2024].map((year) => ({
  year,
  left: xPercent(year * 12),
}));
