import React from React;
import defaultBookIcon from './default_book.svg';

const BookCover = (props) => (props.imageUrl === null) ? (
  <img className="default-book-cover" src={defaultBookIcon} alt="book cover"/>
  ) : (
  <img className="book-cover" src={props.imageUrl} alt="Book cover"/>
  );

export default BookCover
