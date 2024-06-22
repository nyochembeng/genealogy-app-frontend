import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    marginTop: 'auto', // Move footer to bottom of viewport
  },
  copyright: {
    color: theme.palette.grey.main,
  },
}));

const Footer = () => {
  const classes = useStyles();

  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" className={classes.copyright}>
        Copyright &copy; {currentYear} My Family Tree. All Rights Reserved.
      </Typography>
      <Typography variant="body2" className={classes.copyright}>
        <Link href="#" color="inherit" underline="none">
          Terms &amp; Conditions
        </Link>
      </Typography>
      <Typography variant="body2" className={classes.copyright}>
        <Link href="#" color="inherit" underline="none">
          Privacy Policy
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
