import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Avatar } from '@material-ui/core';
import axios from 'axios';

const MemberDetails = ({ memberId }) => {
  const [member, setMember] = useState({});

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await axios.get(`/api/users/${memberId}`);
        setMember(response.data);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };

    if (memberId) fetchMemberDetails(); // Fetch details if memberId is available
  }, [memberId]);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar alt={member.firstName + ' ' + member.lastName} src={member.profilePic} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">{member.firstName} {member.lastName}</Typography>
            <Typography variant="body2">
              {member.dateOfBirth && new Date(member.dateOfBirth).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* Display other member details (social media, address, biography, etc.)  */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MemberDetails;
