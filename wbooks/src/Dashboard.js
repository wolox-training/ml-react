import React, { Component } from 'react';
import Books from './Books'
import search from './search.svg';
import './App.css';

class Dashboard extends Component{
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
      <div className="dashboard">
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
            onClick={this.handleSubmit} alt="search icon"/>
          </form>
        </div>
        <Books filterType={this.state.filterType} filterText={this.state.searchText}/>
      </div>
    )
  }
}

export default Dashboard;
