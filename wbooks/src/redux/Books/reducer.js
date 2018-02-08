import {ADD_BOOKS, START_LOADING, ERROR} from './actions'

const initialState = {
  books: [],
  fetchingBooks: false,
  error: false
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        ...state,
        books: action.payload,
        fetchingBooks: false
      };
      break;
    case START_LOADING:
      return {
        ...state,
        fetchingBooks: true
      };
      break;
    default:
    return state;
  }
};
