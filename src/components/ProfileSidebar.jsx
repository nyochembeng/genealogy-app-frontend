import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';

const ProfileSidebar = () => {
  return (
    <div style={{ width: 250 }}>
      <List>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/profile/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/profile/password">
          <ListItemIcon><LockIcon /></ListItemIcon>
          <ListItemText primary="Change Password" />
        </ListItem>
      </List>
    </div>
  );
};

export default ProfileSidebar;
