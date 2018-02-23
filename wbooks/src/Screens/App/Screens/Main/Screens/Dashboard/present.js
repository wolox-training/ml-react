import React from 'react';
import PropTypes from 'prop-types'
import Books from './Screens/Books'
import './styles.css'
import SearchForm from './searchForm'

const Dashboard = ({onClick, onChange, onFilterChange, text, filter}) => (
  <div className="dashboard">
    <SearchForm onSubmit={onClick}/>
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
