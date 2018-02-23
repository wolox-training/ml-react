import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignUpForm = props => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label>
        <Field name='email' type='text' component='input'/>
      </div>
      <div>
        <label htmlFor='password'>Contraseña</label>
        <Field name='password' type='password' component='input'/>
      </div>
      <div>
        <label htmlFor='confirm-password'>Confirmar Contraseña</label>
        <Field name='confirm-password' type='password' component='input'/>
      </div>
      <div>
        <label htmlFor='name'>Nombre</label>
        <Field name='name' type='text' component='input'/>
      </div>
      <div>
        <label htmlFor='last-name'>Apellido</label>
        <Field name='last-name' type='text' component='input'/>
      </div>
      <button type='submit'>Log In</button>
    </form>
  );
}

SignUpForm = reduxForm({
  form: 'signUpForm'
})(SignUpForm);

export default SignUpForm;
