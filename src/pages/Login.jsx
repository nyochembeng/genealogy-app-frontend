import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogin}>
      Log In
    </Button>
  );
};

export default Login;
