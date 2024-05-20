import React from 'react';
import { Container, Grid, Card, CardMedia } from '@material-ui/core';

const Gallery = ({ photoAlbum }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {photoAlbum.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" image={photo} alt={`Photo ${index + 1}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
