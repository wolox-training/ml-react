import React, { Component } from 'react';
import defaultBookIcon from './default_book.svg'
import './BookDetail.css';

class BookDetail extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="body">
        <div className="book-detail">
          <img className="book-cover" />
          <div className="book-info">
            <b className="title" />
            <p className="detail" />
            <p className="detail" />
            <p className="detail" />
            <p className="description" />
            <button className="rent-button">Alquilar</button>
          </div>
        </div>
        <div className="suggestions">
        </div>
        <div className="comments">
        </div>
      </div>
    )
  }
}
