import React from 'react';
import { Container, Typography } from '@material-ui/core';

const FamilyHistory = ({ history, stories }) => {
  return (
    <Container>
      <Typography variant="h4">Family History</Typography>
      <Typography variant="body1">{history}</Typography>
      <Typography variant="h5">Family Stories</Typography>
      {stories.map((story, index) => (
        <Typography key={index} variant="body2">{story}</Typography>
      ))}
    </Container>
  );
};

export default FamilyHistory;
