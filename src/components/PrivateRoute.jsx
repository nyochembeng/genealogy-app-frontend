import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/authService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
