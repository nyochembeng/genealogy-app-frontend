import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const FamilyEvents = ({ events }) => {
  return (
    <Container>
      <Typography variant="h4">Family Events</Typography>
      <List>
        {events.map((event, index) => (
          <ListItem key={index}>
            <ListItemText primary={event.name} secondary={event.date} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FamilyEvents;
