import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './styles.css';
import BookCover from '../../../../Components/BookCover'

class Books extends Component {

  componentDidMount() {
    this.props.onFetchBooks();
  };

  render(){
    if (this.props.isLoading) {
      return (
        <div className="loading-container">
          <b className="loading">Se estan buscando los libros</b>
        </div>
      );
    }
     return (
       <div className="grid">
        {this.props.books.map(item =>
          <Link to={`/books/${item.id}`} key={item.id}>
            <div className="book">
              <BookCover imageUrl={item.image_url} defaultCover="default-book-icon" cover="book-icon"/>
              <b className="book-title" >{item.title}</b>
              <p className="book-author" >{item.author}</p>
            </div>
          </Link >)}
       </div>
     );
   };
 }

 Books.propTypes = {
  onFetchBooks: PropTypes.func.isRequired,
  onLoading: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default Books;
