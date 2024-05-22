import React, { useState, useEffect } from 'react';
import { Grid, Typography, Card, CardContent, Avatar } from '@material-ui/core';
import axios from 'axios';
import MemberDetails from '../components/MemberDetails'; // Import MemberDetails component
import config from '../config.json'

const UserProfilePage = ({ userId }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/users/me`);
        setUserData(response.data);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };

    if (userId) fetchUserData(); // Fetch data if userId is available
  }, [userId]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Avatar alt={userData.firstName + ' ' + userData.lastName} src={userData.profilePic} />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{userData.firstName} {userData.lastName}</Typography>
                <Typography variant="body2">
                  {userData.dateOfBirth && new Date(userData.dateOfBirth).toLocaleDateString()}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {/* Display other user details if needed (e.g., biography, social media) */}
      </Grid>
      <Grid item xs={12} md={6}>
        <MemberDetails memberId={userId} />
      </Grid>
    </Grid>
  );
};

export default UserProfilePage;
