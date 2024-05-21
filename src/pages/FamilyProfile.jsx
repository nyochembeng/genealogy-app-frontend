import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming you're using axios for API calls
import { Box, Grid, Paper } from "@material-ui/core";
import FamilyProfileSidebar from "../components/FamilyProfileSidebar";
// import FamilyProfileContent from "../components/FamilyProfileContent"; // Your main family profile content component
import Chat from "../components/FamilyChat";
import config from '../config.json'

const FamilyProfile = (memberId, familyId) => {
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${config.apiUrl}/families`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setFamilies(response.data);
    };
    fetchData();
  }, []);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("accessToken"); // Or use getAccessTokenSilently
      try {
        const response = await axios.get(`${config.apiUrl}/member`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUserData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async (searchTerm) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        `${config.apiUrl}/search?term=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      console.log(response.data); // Handle search results (combine and display users and stories)
    } catch (err) {
      console.error(err); // Handle errors
    }
  };

  return (
    <Grid container spacing={3}>
      {userData &&
        families.map((family) => (
          <Box>
            <div>
              <input
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
              />
              {/* Display search results (can be separate components for users and stories) */}
            </div>
            <Grid item xs={12} sm={4} md={3}>
              <Paper style={{ padding: 16 }}>
                <FamilyProfileSidebar />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Paper style={{ padding: 16 }}>
                {/* <FamilyProfileContent /> */}
              </Paper>
              <h1>Family Profile</h1>
              <Chat userId={memberId} familyId={familyId} />
            </Grid>
          </Box>
        ))}
    </Grid>
  );
};

export default FamilyProfile;
