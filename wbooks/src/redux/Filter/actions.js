export const APPLY_FILTER = 'FILTER@@APPLY_FILTER';

export function applyFilter(payload) {
  return {type: APPLY_FILTER, payload};
}
