import React from 'react';
import { Container, Typography, Card, CardContent } from '@material-ui/core';

const NewsFeed = ({ stories }) => {
  return (
    <Container>
      <Typography variant="h4">Family News Feed</Typography>
      {stories.map((story, index) => (
        <Card key={index} style={{ marginTop: 20 }}>
          <CardContent>
            <Typography variant="h6">{story.title}</Typography>
            <Typography variant="body2">{story.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default NewsFeed;
