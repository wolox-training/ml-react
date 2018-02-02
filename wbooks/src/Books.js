import React, { Component } from 'react';
import myBooks from './books.json';
import defaultBookIcon from './default_book.svg'
import './Books.css';

class Books extends Component {
  constructor(props) {
    super(props);
  }

  filteredBooks = () => {
    if (this.props.filterText == '' || this.props.filterType == '') {
      return myBooks;
    }

    return myBooks.filter(book => {
      console.log((this.props.filterText));
      return book[this.props.filterType].toUpperCase().includes(this.props.filterText.toUpperCase());
    });
  }

  render(){
     return (
       <div className="body">
        {this.filteredBooks().map(item =>
          <div className="book">
          {(item.image_url == null) ? (
            <img className="default-book-icon" src={defaultBookIcon} />
          ) : (
            <img className="book-icon" src={item.image_url} />
          )}
            <b className="book-title" >{item.title}</b>
            <p className="book-author" >{item.author}</p>
          </div>)}
       </div>
     );
   }
 }

 export default Books;
