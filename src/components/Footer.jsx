import React from 'react';
import { Typography, Container } from '@material-ui/core';
import '../styles/footer.scss'; // Assuming you will add some styles here

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} My Genealogy App. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
