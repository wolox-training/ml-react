import React, { Component } from 'react';
import logo from './wbooks_logo.svg';
import notifications from './notifications.svg';
import addBook from './add_book.svg';
import search from './search.svg';
import bookIcon from './default_book.svg'
import './App.css';
import Books from './Books'

class App extends Component {

  constructor() {
    super();
    this.state = {value: ''};
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    this.Books.sortByField({filter: event.target.value});
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-menu">
            <img src={notifications} className="App-menu-item" />
            <img src={addBook} className="App-menu-item" />
            <img src={addBook} className="App-profile-img" />
          </div>
        </header>
        <div className="Nav">
          <select className="filter-bar" placeholder="Seleccionar Filtro"
          value={this.state.value} onChange={this.handleFilter}>
            <option value="author">Autor</option>
            <option value="title">Titulo</option>
          </select>
          <form className="search-container" onSubmit={this.handleSubmit}>
            <input className="search-bar" type="text" placeholder="Buscar..."
            onChange={this.handleChange} />
            <img className="search-icon" type="submit" src={search} value="Submit" />
          </form>
        </div>
        <Books ref={instance => { this.Books = instance; }}/>
      </div>
    );
  }
}

export default App;
