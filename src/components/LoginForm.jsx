import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import axios from 'axios'; // For API calls

const LoginForm = ({ onSubmit, type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/users/${type}`, { email, password }); // Login or Signup based on type
      onSubmit(response.data); // Pass user data or token to parent component
    } catch (error) {
      console.error(error); // Handle errors appropriately (e.g., display error message)
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          {type === 'register' ? 'Sign Up' : 'Login'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
