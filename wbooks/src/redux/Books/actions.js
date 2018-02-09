export const ADD_BOOKS = 'BOOKS@@ADD_BOOKS';
export const START_LOADING = 'BOOKS@@START_LOADING';
export const ERROR = "BOOKS@@ERROR";

export function addBooks(payload) {
  return {type: ADD_BOOKS, payload};
};

export function startLoading() {
  return {type: START_LOADING};
};

export function error() {
  return {type: ERROR};
};