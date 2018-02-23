import React from 'react';
import PropTypes from 'prop-types'
import Books from './Screens/Books'
import './styles.css'
import SearchForm from './searchForm'

const Dashboard = ({onClick}) => (
  <div className="dashboard">
    <SearchForm onSubmit={onClick}/>
    <Books />
  </div>
);

Dashboard.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Dashboard;
