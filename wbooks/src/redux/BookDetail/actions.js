export const ADD_BOOK = 'BOOKDETAIL@@ADD_BOOK';
export const START_LOADING = 'BOOKDETAIL@@START_LOADING';
export const NOT_FOUND = 'BOOKDETAIL@@NOT_FOUND';
export const ERROR = 'BOOKDETAIL@@ERROR'


export function addBook(payload) {
  return {type: ADD_BOOK, payload};
};

export function startLoading() {
  return {type: START_LOADING};
};

export function notFound() {
  return {type: NOT_FOUND};
};

export function error() {
  return {type: ERROR};
};
