import React, { Component } from 'react';
import LogInForm from './Components/LogInForm';

class LogIn extends Component{

  componentDidMount() {
    this.props.onReenter();
  }

  render() {
    return (
      <LogInForm onSubmit={this.props.onLogIn}/>
    )
  }
}

export default LogIn;
