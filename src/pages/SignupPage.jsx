import React from 'react';
import LoginForm from '../components/LoginForm'; // Import LoginForm component
import { Typography } from '@material-ui/core';
import { Navigate } from 'react-router-dom';

const SignupPage = () => {
  const handleSignup = (userData) => {
    // Implement logic to handle successful signup (e.g., redirect to profile or login)
    <Navigate to="/login" />
  };

  return (
    <div>
      <Typography variant="h4">Sign Up</Typography>
      <LoginForm onSubmit={handleSignup} type="register" />
    </div>
  );
};

export default SignupPage;
