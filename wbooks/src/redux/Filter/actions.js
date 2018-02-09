export const CHANGE_FILTER = 'FILTER@@CHANGE_FILTER';
export const APPLY_FILTER = 'FILTER@@APPLY_FILTER';

export const filters = {
  TITLE: 'title',
  AUTHOR: 'author'
};

export function changeFilter(payload) {
  return {type: CHANGE_FILTER, payload};
};

export function applyFilter() {
  return {type: APPLY_FILTER};
}
