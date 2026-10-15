// Changelog groups for each role, in the order they render.

export type ChangeGroup = 'added' | 'changed' | 'fixed';
export type Changes = Record<ChangeGroup, string[]>;

export const CHANGE_GROUPS: ChangeGroup[] = ['added', 'changed', 'fixed'];

/** Groups with at least one entry. Empty groups are never rendered. */
export function visibleGroups(changes: Changes): ChangeGroup[] {
  return CHANGE_GROUPS.filter((group) => changes[group].length > 0);
}
