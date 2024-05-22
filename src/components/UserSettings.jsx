import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Snackbar } from '@material-ui/core'; // Import Snackbar for notifications
// import Alert from '@material-ui/lab/Alert'; // Import Alert for Snackbar content
import axios from 'axios';
import config from '../config.json'

const UserSettings = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(''); // State for Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // State for Snackbar severity (success or error)

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
  }, [user]); // Update state when user data changes

  const handleSubmitChanges = async () => {
    try {
      const response = await axios.put(`${config.apiUrl}/auth/user/${user.id}/update`, { firstName, lastName, email });
      // Update local user data or redirect to profile page (depending on implementation)
      setOpenSnackbar(true);
      setSnackbarMessage('Profile successfully updated!');
      setSnackbarSeverity('success');
    } catch (error) {
      console.error(error);
      setOpenSnackbar(true);
      setSnackbarMessage('Error updating profile. Please try again.');
      setSnackbarSeverity('error');
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmitChanges}>
          Save Changes
        </Button>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Close Snackbar after 6 seconds
        onClose={handleSnackbarClose}
      >
        {/* <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert> */}
      </Snackbar>
    </Grid>
  );
};

export default UserSettings;
