import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import myBooks from './books.json';
import defaultBookIcon from './default_book.svg'
import './Books.css';
import BookCover from './BookCover'

class Books extends Component {

  filteredBooks = () => {
    if (this.props.filterText === '' || this.props.filterType === '') {
      return myBooks;
    }
    return myBooks.filter(book => {
      return book[this.props.filterType].toUpperCase().includes(this.props.filterText.toUpperCase());
    });
  }

  render(){
     return (
       <div className="grid">
        {this.filteredBooks().map(item =>
          <Link to={"/books/${item.id}"} key={item.id}>
            <div className="book">
              <BookCover imageUrl={item.image_url} defaultCover="default-book-icon" cover="book-icon"/>
              <b className="book-title" >{item.title}</b>
              <p className="book-author" >{item.author}</p>
            </div>
          </Link >)}
       </div>
     );
   }
 }

 export default Books;
