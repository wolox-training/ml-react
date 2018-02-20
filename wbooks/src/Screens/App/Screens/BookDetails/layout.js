import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBookIcon from '../../../../Assets/default_book.svg'
import './styles.css';
import BooksApi from '../../../../services/BooksApi'
import BookCover from '../../Components/BookCover'

class BookDetail extends Component {
  componentDidMount() {
    this.props.onFetchBook(this.props.match.params.id);
  };

  render() {
    if (this.props.error) {
      return (
        <div className="body">
          <Link className="back" to="/dashboard">&lt; Volver</Link>
          <span className="not-found">Ocurrió un error buscando su libro, por favor intente nuevamente más tarde</span>
        </div>
      )
    }
    if (this.props.fetchingBook) {
      return (
        <div className="body">
          <b className='loading'>Se está buscando el libro</b>
        </div>
      );
    }
    if (this.props.notFound) {
      return (
        <div className="body">
          <Link className="back" to="/dashboard">&lt; Volver</Link>
          <b className="not-found">This is not the book you are looking for</b>
        </div>
      );
    }
    return (
      <div className="body">
        <Link className="back" to="/dashboard">&lt; Volver</Link>
          <div className="book-detail">
            <BookCover imageUrl={this.props.book.image_url} defaultCover="default-book-cover" cover="book-cover" />
            <div className="book-info">
              <span className="title">{this.props.book.title} </span>
              <p className="author">{this.props.book.author} </p>
              <p className="year">{this.props.book.year} </p>
              <p className="genre">{this.props.book.genre} </p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className="rent-button">Alquilar</button>
            </div>
          </div>
          <div className="separation" />
          <div className="sugestions">
            <span className="section-title">Sugerencias</span>
            <div className="sugestions-list">
              <img className="sugestions-placeholder" src={defaultBookIcon} alt="Book cover"/>
              <img className="sugestions-placeholder" src={defaultBookIcon} alt="Book cover"/>
              <img className="sugestions-placeholder" src={defaultBookIcon} alt="Book cover"/>
              <img className="sugestions-placeholder" src={defaultBookIcon} alt="Book cover"/>
            </div>
          </div>
          <div className="separation" />
          <div className="comments">
            <span className="section-title">Comentarios</span>
            <div className="new-comment">
              <img className="profile-icon" src={defaultBookIcon} alt="Profile Icon"/>
              <div className="write-comment">
                <span className="comment">Agregar comentario</span>
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
