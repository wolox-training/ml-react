import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import text from './Text/reducer';
import books from './Books/reducer';
import filter from './Filter/reducer';
import bookDetail from './BookDetail/reducer';
import logIn from './LogIn/reducer'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

const wBooks = combineReducers({
  text,
  books,
  filter,
  bookDetail,
  logIn,
  form: formReducer
});

export const store = createStore(
  wBooks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
