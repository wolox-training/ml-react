import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './wbooks_logo.svg';
import notifications from './notifications.svg';
import addBook from './add_book.svg';
import './App.css';
import Dashboard from './Dashboard'
import BookDetail from './BookDetail'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-menu">
            <img src={notifications} className="App-menu-item" alt="notif icon"/>
            <img src={addBook} className="App-menu-item" alt="add book icon"/>
            <img src={addBook} className="App-profile-img" alt="profile img"/>
          </div>
        </header>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route path='/books/:id' component={BookDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
