import React, { useEffect, useState} from "react";
import axios from 'axios'; // Assuming you're using axios for API calls
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Paper } from "@material-ui/core";
import ProfileSidebar from "../components/ProfileSidebar";
import config from '../config.json'

const Profile = () => {
  const { member, isAuthenticated, isLoading } = useAuth0();
  // const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.get(`${config.apiUrl}/members/:memberId`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setUserData(response.data); // User data
    } catch (err) {
      console.error(err); // Handle errors
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getUserData();
    }
  }, [isAuthenticated]);
  

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    userData && (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper style={{ padding: 16 }}>
            <ProfileSidebar />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Paper style={{ padding: 16 }}>
            <div>
              <img src={member.picture} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.email}</p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    )
  );
};

export default Profile;
