import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from '../../../../Assets/wbooks_logo.svg';
import notifications from '../../../../Assets/notifications.svg';
import addBook from '../../../../Assets/add_book.svg';
import './styles.css';
import Dashboard from './Screens/Dashboard';
import BookDetails from './Screens/BookDetails';

const Main = ({onLogOut}) => (
  <div className="App">
    <header className="App-header">
      <Link className="home" to="/dashboard">
        <img src={logo} className="App-logo" alt="logo"/>
      </Link>
      <div className="App-menu">
        <img src={notifications} className="App-menu-item" alt="notif icon"/>
        <img src={addBook} className="App-menu-item" alt="add book icon"/>
        <img src={addBook} className="App-profile-img" alt="profile img" onClick={onLogOut}/>
      </div>
    </header>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route path='/books/:id' component={BookDetails}/>
    </Switch>
  </div>
)

export default Main;
