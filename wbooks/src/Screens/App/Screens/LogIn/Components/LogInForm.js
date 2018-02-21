import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LogInForm = props => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor='email'>Email</label>
      <Field name='email' type='text' component='input'/>
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <Field name='password' type='password' component='input'/>
      </div>
      <button type='submit'>Log In</button>
    </form>
  );
}

LogInForm = reduxForm({
  form: 'logIn'
})(LogInForm);

export default LogInForm;
