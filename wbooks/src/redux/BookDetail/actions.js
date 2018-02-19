import BooksApi from '../../services/BooksApi'

export const ADD_BOOK = 'BOOKDETAIL@@ADD_BOOK';
export const START_LOADING = 'BOOKDETAIL@@START_LOADING';
export const NOT_FOUND = 'BOOKDETAIL@@NOT_FOUND';
export const ERROR = 'BOOKDETAIL@@ERROR'


export function addBook(payload) {
  return {type: ADD_BOOK, payload};
};

export function fetchBook() {
  return (dispatch) => {
    dispatch(startLoading());
    BooksApi.getBook(bookId).then(
      response => dispatch(addBook(response.data)),
      error => {if (error.response.status == '400') {
        dispatch(notFound())
      } else {
        dispatch(error())
      }
    });
  }
}

export function startLoading() {
  return {type: START_LOADING};
};

export function notFound() {
  return {type: NOT_FOUND};
};

export function error() {
  return {type: ERROR};
};
