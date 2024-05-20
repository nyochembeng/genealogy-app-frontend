import React from "react";
import { Grid, Paper } from "@material-ui/core";
import FamilyProfileSidebar from "../components/FamilyProfileSidebar";
// import FamilyProfileContent from "../components/FamilyProfileContent"; // Your main family profile content component
import Chat from "../components/Chat";

const FamilyProfile = () => {
  const userId = "current_user_id"; // Replace with dynamic user ID
  const familyId = "current_family_id"; // Replace with dynamic family ID

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4} md={3}>
        <Paper style={{ padding: 16 }}>
          <FamilyProfileSidebar />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Paper style={{ padding: 16 }}>
          {/* <FamilyProfileContent /> */}
        </Paper>
      </Grid>
      <h1>Family Profile</h1>
      <Chat userId={userId} familyId={familyId} />
    </Grid>
  );
};

export default FamilyProfile;
