import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/family-background.jpg'; // Replace with your image path

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.getContrastText(theme.palette.primary.main), // Set text color based on background
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.hero}>
      <Grid item xs={12}>
        <Typography variant="h2" className={classes.title}>
          Explore Your Family History
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Connect with your roots and discover your ancestors' stories.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/login">
          Login
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/signup">
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
