import BooksApi from '../../services/BooksApi'
import AcountApi from '../../services/AcountApi'
import moment from 'moment'

export const ADD_BOOK = 'BOOKDETAIL@@ADD_BOOK';
export const START_LOADING = 'BOOKDETAIL@@START_LOADING';
export const NOT_FOUND = 'BOOKDETAIL@@NOT_FOUND';
export const ERROR = 'BOOKDETAIL@@ERROR';
export const NOT_AVAILABLE = 'BOOKDETAIL@@NOT_AVAILABLE';
export const WISH = 'BOOKDETAIL@@WISH';


export function addBook(payload) {
  return {type: ADD_BOOK, payload};
};

export function fetchBook(bookId) {
  return (dispatch) => {
    dispatch(startLoading());
    BooksApi.getBook(bookId).then(
      response => {
        BooksApi.getBookRents(bookId).then(
          response => {
            if(isAvailable(response.data))  {
              dispatch(notAvailable())
              AcountApi.getWishes().then(
                response => {
                  dispatch(wish(isWished(response.data, bookId)))
                }
              )
            }
          })
        dispatch(addBook(response.data))
      },
      error => {
        if (error.response.status === '400') {
          dispatch(notFound())
      } else {
          dispatch(errorAction())
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

export function errorAction() {
  return {type: ERROR};
};

export function notAvailable(payload) {
  return {type: NOT_AVAILABLE, payload};
}

export function addWish(bookId) {
  return dispatch => {
    AcountApi.addToWishlist(bookId).then(
      response => dispatch(wish(true))
    )
  }
}

export function wish(payload) {
  return {type: WISH, payload};
}

function isAvailable(bookInfo) {
  return !bookInfo.filter((rent) => moment(rent.to) > moment()).length
}

function isWished(wishlist, bookId) {
  return wishlist.filter((wish) => wish.book.id === bookId).length
}
