import React, { Component } from 'react';
import SignUpForm from './Components/SignUpForm';

class LogIn extends Component{

  componentDidMount() {
  }

  render() {
    return (
      <SignUpForm onSubmit={this.props.onSignUp}/>
    )
  }
}

export default LogIn;
