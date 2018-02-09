import { createStore } from 'redux';
import { combineReducers } from 'redux'
import text from './Text/reducer';
import books from './Books/reducer';
import filter from './Filter/reducer';
import bookDetail from './BookDetail/reducer';

const wBooks = combineReducers({
  text,
  books,
  filter,
  bookDetail
});

export const store = createStore(
  wBooks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
