export const ADD_BOOKS = 'BOOKS@@ADD_BOOKS';
export const START_LOADING = 'BOOKS@@START_LOADING';
export const OPEN_BOOK = "BOOK@@OPEN_BOOK";

export function addBooks(payload) {
  return {type: ADD_BOOKS, payload};
}

export function startLoading() {
  return {type: START_LOADING}
}

export function openBook(payload) {
  return {type: OPEN_BOOK, payload}
}
