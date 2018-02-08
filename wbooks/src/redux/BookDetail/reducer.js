import {ADD_BOOK, START_LOADING, NOT_FOUND, ERROR} from './actions'

const initialState = {
  book: {},
  notFound: false,
  fetchingBook: false,
  error: false
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
    default:
      return state;
  }
}
