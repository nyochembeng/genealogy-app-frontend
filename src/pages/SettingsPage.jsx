import React from 'react';
import UserSettings from '../components/UserSettings'; // Import UserSettings component
import { Typography } from '@material-ui/core';

const SettingsPage = ( user ) => {

  return (
    <div>
      <Typography variant="h4">Settings</Typography>
      <UserSettings user={user} />
    </div>
  );
};

export default SettingsPage;
