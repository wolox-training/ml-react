import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBookIcon from './default_book.svg';
import './BookDetail.css';
import BooksApi from './services/BooksApi'
import BookCover from './BookCover'

class BookDetail extends Component {
  constructor() {
    super();
    this.state = {
      book: [],
      notFound: false,
      fetchingBook: false,
      error: false}
  };

  componentDidMount() {
    this.setState({fetchingBook: true})
    BooksApi.getBook(this.props.match.params.id).then((response) => {
      this.setBook(response.data);
    }).catch((error) => {
      if (error.response.status === '400') {
        this.setState({notFound: true, fetchingBook: false});
      } else {
        this.setState({fetchingBook: false, error: true})
      }
    })
  }

  setBook = (book) => {
    this.setState({book, fetchingBook: false})
  }

  render() {
    if (this.state.error) {
      return (
        <div className="body">
          <b className='error-message'>Hubo un problema, vuelva intentar maś tarde</b>
        </div>
      );
    }

    if (this.state.fetchingBook) {
      return (
        <div className="body">
          <b className='loading'>Se está buscando el libro</b>
        </div>
      );
    }
    if (this.state.notFound) {
      return (
        <div className="body">
          <Link className="back" to="/dashboard">&lt; Volver</Link>
          <b className="error-message">This is not the book you were looking for</b>
        </div>
      );
    }
    const book = this.state.book;
    return (
      <div className="body">
        <Link className="back" to={'/dashboard'}>&lt; Volver</Link>
          <div className="book-detail">
            <BookCover imageUrl={book.image_url} defaultCover="default-book-cover" cover="book-cover" />
            <div className="book-info">
              <b className="title">{book.title} </b>
              <p className="author">{book.author} </p>
              <p className="year">{book.year} </p>
              <p className="genre">{book.genre} </p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className="rent-button">Alquilar</button>
            </div>
          </div>
          <div className="separation" />
          <div className="sugestions">
            <b className="section-title">Sugerencias</b>
            <div className="sugestions-list">
              <img className="sugestions-placeholder" src={defaultBookIcon} alt="Book cover"/>
              <img className="sugestions-placeholder" src={defaultBookIcon} alt="Book cover"/>
              <img className="sugestions-placeholder" src={defaultBookIcon} alt="Book cover"/>
              <img className="sugestions-placeholder" src={defaultBookIcon} alt="Book cover"/>
            </div>
          </div>
          <div className="separation" />
          <div className="comments">
            <b className="section-title">Comentarios</b>
            <div className="new-comment">
              <img className="profile-icon" src={defaultBookIcon} alt="Profile Icon"/>
              <div className="write-comment">
                <b className="comment">Agregar comentario</b>
                <form className="comment-container" onSubmit={this.handleSubmit}>
                  <input className="comment-bar" type="text" onChange={this.handleChange} />
                  <button className="comment-button" type="submit" value="Submit"
                  onClick={this.handleSubmit}>Enviar</button>
                </form>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default BookDetail;
