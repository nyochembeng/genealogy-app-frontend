import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@material-ui/core';

const MemberCard = ({ member }) => {
  const { firstName, lastName, profilePic } = member;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar alt={firstName + ' ' + lastName} src={profilePic} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">{firstName} {lastName}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
