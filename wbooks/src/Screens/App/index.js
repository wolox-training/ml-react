import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogIn from './Screens/LogIn'
import Main from './Screens/Main'
import PrivateRoute from './Components/PrivateRoute'
import PublicRoute from './Components/PublicRoute'

class App extends Component {
  render() {
    return (
      <Switch>
        <PublicRoute exact path="/login" component={LogIn}/>
        <PrivateRoute path='/' component={Main} />
      </Switch>
    );
  }
}

export default App;
