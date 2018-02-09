export const ADD_BOOKS = 'BOOKS@@ADD_BOOKS';
export const START_LOADING = 'BOOKS@@START_LOADING';
export const ERROR = "BOOKS@@ERROR";

export function startLoading() {
  return {type: START_LOADING};
};

export function error() {
  return {type: ERROR};
};

export function fetchBooks() {
  return (dispatch) => {
    BooksApi.getBooks().then(
      response => dispatch(addBooks(response.data)),
      error => dispatch(error())
    )
  }
}
