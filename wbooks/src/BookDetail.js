import React, { Component } from 'react';
import myBooks from './books.json';
import { Link } from 'react-router-dom';
import defaultBookIcon from './default_book.svg';
import './BookDetail.css';

class BookDetail extends Component {
  render() {
    const book = myBooks.find(book => book.id === this.props.match.params.id);
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
            <img className="profile-icon" src={defaultBookIcon} />
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
