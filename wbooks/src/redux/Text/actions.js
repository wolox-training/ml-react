export const CHANGE_TEXT = 'TEXT@@CHANGE_TEXT';
export const APPLY_TEXT = 'TEXT@@APPLY_TEXT';

export function changeText(payload) {
  return {type: CHANGE_TEXT, payload};
};

export function applyText() {
  return {type: APPLY_TEXT}
}
