import React from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@material-ui/core';

const Approval = ({ pendingMembers, approveMember }) => {
  return (
    <Container>
      <Typography variant="h4">Approve New Members</Typography>
      <List>
        {pendingMembers.map((member, index) => (
          <ListItem key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={`${member.firstName} ${member.lastName}`} />
            <Button variant="contained" color="primary" onClick={() => approveMember(member._id)}>
              Approve
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Approval;
