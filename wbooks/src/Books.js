import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Books.css';
import BooksApi from './services/BooksApi';
import BookCover from './BookCover';

class Books extends Component {

  constructor() {
    super();
    this.state = {
      books: [],
      fetchingBooks: false
    };
  };

  componentDidMount() {
    this.setState({fetchingBooks: true});
    BooksApi.getBooks().then((response) => {
      console.log(response);
      this.addBooks(response.data);
    });
  };

  addBooks = (books) => {
    this.setState({ books, fetchingBooks: false});
  };

  filteredBooks = () => {
    if (this.props.filterText === '' || this.props.filterType === '') {
      return this.state.books;
    }
    return (this.state.books).filter(book => {
      return book[this.props.filterType].toUpperCase().includes(this.props.filterText.toUpperCase());
    });
  }

  render(){
    if (this.state.fetchingBooks) {
      return (
        <div className="loading-container">
          <b className="loading">Se estan buscando los libros</b>
        </div>
      )
    }
     return (
       <div className="grid">
        {this.filteredBooks().map(item =>
          <Link to={"/books/" + item.id} key={item.id}>
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
