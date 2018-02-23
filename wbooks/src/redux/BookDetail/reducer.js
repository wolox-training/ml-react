import {ADD_BOOK, START_LOADING, NOT_FOUND, ERROR, NOT_AVAILABLE, WISH} from './actions'

const initialState = {
  book: {},
  notFound: false,
  fetchingBook: false,
  error: false,
  available: true,
  wish: false
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        book: action.payload,
        fetchingBook: false
      }
      break;
    case START_LOADING:
      return {
        ...initialState,
        fetchingBook: true
      }
      break;
    case NOT_FOUND:
      return {
        ...state,
        notFound: true,
        fetchingBook: false
      }
      break;
    case ERROR:
      return {
        ...state,
        error: true
      }
      break;
    case NOT_AVAILABLE:
      return {
        ...state,
        available: false
      }
      break;
    case WISH:
      return {
        ...state,
        wish: true
      }
    default:
      return state;
  }
}
