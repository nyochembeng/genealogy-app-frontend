import React from 'react';
import LoginForm from '../components/LoginForm'; // Import LoginForm component
import { Typography } from '@material-ui/core';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const handleLogin = (userData) => {
    // Implement logic to handle successful login (e.g., store user data, redirect to profile)
    <Navigate to="/profile" />
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <LoginForm onSubmit={handleLogin} type="login" />
    </div>
  );
};

export default LoginPage;
