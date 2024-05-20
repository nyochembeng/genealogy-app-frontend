import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import TreeIcon from '@material-ui/icons/AccountTree';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import HistoryIcon from '@material-ui/icons/History';
import EventIcon from '@material-ui/icons/Event';
import FeedIcon from '@material-ui/icons/RssFeed';
import ApprovalIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';

const FamilyProfileSidebar = () => {
  return (
    <div style={{ width: 250 }}>
      <List>
        <ListItem button component={Link} to="/family-profile">
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Family Profile" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/family-tree">
          <ListItemIcon><TreeIcon /></ListItemIcon>
          <ListItemText primary="Family Tree" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/gallery">
          <ListItemIcon><PhotoAlbumIcon /></ListItemIcon>
          <ListItemText primary="Gallery" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/history">
          <ListItemIcon><HistoryIcon /></ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/events">
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/news-feed">
          <ListItemIcon><FeedIcon /></ListItemIcon>
          <ListItemText primary="News Feed" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/approval">
          <ListItemIcon><ApprovalIcon /></ListItemIcon>
          <ListItemText primary="Approval" />
        </ListItem>
      </List>
    </div>
  );
};

export default FamilyProfileSidebar;
