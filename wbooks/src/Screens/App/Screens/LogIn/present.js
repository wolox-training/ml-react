import React, { Component } from 'react';
import LogInForm from './Components/LogInForm';
import { Link } from 'react-router-dom';

class LogIn extends Component{

  componentDidMount() {
    this.props.onReenter();
  }

  render() {
    return (
      <div>
        <LogInForm onSubmit={this.props.onLogIn}/>
        <Link to="/signup"><button>SignUp</button></Link>
      </div>
    )
  }
}

export default LogIn;
