export const FILTER_TITLE = 'FILTER@@FILTER_TITLE';
export const FILTER_AUTHOR = 'FILTER@@FILTER_AUTHOR';
export const APPLY_FILTER = 'FILTER@@APPLY_FILTER';

export const filters = {
  TITLE: 'title',
  AUTHOR: 'author'
};

export function filterTitle() {
  return {type: FILTER_TITLE};
};

export function filterAuthor() {
  return {type: FILTER_AUTHOR};
};

export function applyFilter() {
  return {type: APPLY_FILTER};
}
