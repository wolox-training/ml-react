import React from 'react';
import search from '../../../../Assets/search.svg';
import PropTypes from 'prop-types'
import Books from './Screens/Books'
import './styles.css'

const Dashboard = ({onClick, onChange, onFilterChange, text, filter}) => (
  <div className="dashboard">
    <div className="Nav">
      <select className="filter-bar" placeholder="Seleccionar Filtro"
      value={filter} onChange={event => onFilterChange(event.target.value)}>
        <option value="author">Autor</option>
        <option value="title">Titulo</option>
      </select>
      <form className="search-container" onSubmit={onClick}>
        <input className="search-bar" type="text" placeholder="Buscar..."
        onChange={event => onChange(event.target.value)} />
        <img className="search-icon" type="submit" src={search} value="Submit"
        onClick={onClick} alt="search icon"/>
      </form>
    </div>
    <Books />
  </div>
);

Dashboard.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Dashboard;
