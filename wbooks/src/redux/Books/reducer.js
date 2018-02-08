import {ADD_BOOKS, START_LOADING, OPEN_BOOK} from './actions'

const initialState = {
  books: [],
  fetchingBooks: false,
  openBook: ""
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
    case OPEN_BOOK:
      return {
        ...state,
        openBook: action.payload
      };
      break;
    default:
    return state;
  }
};
