import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import text from './Text/reducer';
import books from './Books/reducer';
import filter from './Filter/reducer';
import bookDetail from './BookDetail/reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const wBooks = combineReducers({
  text,
  books,
  filter,
  bookDetail,
  form: formReducer
});

export const store = createStore(
  wBooks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
