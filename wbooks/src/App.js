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
    this.state = {
      filterType: '',
      searchText: '',
      searchTextChange: '',
      filterTypeChange: 'author'
    };
  }

  handleFilter = (event) => {
    console.log("It's filtering");
    this.setState({filterTypeChange: event.target.value});
  }

  handleChange = (event) => {
    this.setState({searchTextChange: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      filterType: this.state.filterTypeChange ,
      searchText: this.state.searchTextChange
    })
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
          value={this.state.filterTypeChange} onChange={this.handleFilter}>
            <option value="author">Autor</option>
            <option value="title">Titulo</option>
          </select>
          <form className="search-container" onSubmit={this.handleSubmit}>
            <input className="search-bar" type="text" placeholder="Buscar..."
            onChange={this.handleChange} />
            <img className="search-icon" type="submit" src={search} value="Submit"
            onClick={this.handleSubmit}/>
          </form>
        </div>
        <Books filterType={this.state.filterType} filterText={this.state.searchText}/>
      </div>
    );
  }
}

export default App;
