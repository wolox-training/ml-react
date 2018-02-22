import React from 'react';
import defaultBookIcon from '../../../../../Assets/default_book.svg'

const BookCover = (props) => (props.imageUrl === null) ? (
  <img className={props.defaultCover} src={defaultBookIcon} alt="book cover"/>
  ) : (
  <img className={props.cover} src={props.imageUrl} alt="Book cover"/>
  );

export default BookCover;
