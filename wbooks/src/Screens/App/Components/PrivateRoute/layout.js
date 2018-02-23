import React from 'react'
import {Route, Redirect,} from 'react-router-dom'

function PrivateRoute ({logged, component: Component, auth, ...rest }) {
  return <Route {...rest} render={(props) => (
      logged ? <Component {...props}/> : <Redirect to='/login' />
    )}
  />
}

export default PrivateRoute;
