import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/landingPage.scss';

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container className="landing-page">
      <header className="landing-header">
        <img src="../assets/genealogy-app-logo.png" alt="Family Tree Logo" className="logo" />
        <Typography variant="h2">Welcome to the Family Tree App</Typography>
        <Typography variant="h6">Connect with your family, share stories, and explore your heritage.</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          Login / Sign Up
        </Button>
      </header>
      <div className="landing-content">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Family" className="landing-image" />
        <Typography variant="body1">
          Discover your family's history, connect with relatives, and keep memories alive.
        </Typography>
      </div>
    </Container>
  );
};

export default LandingPage;
