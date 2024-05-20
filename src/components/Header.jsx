import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            My Genealogy App
          </Link>
        </Typography>
        {isAuthenticated ? (
          <>
            <Button color="inherit" component={Link} to="/family-profile">Family Profile</Button>
            <Button color="inherit" component={Link} to="/family-tree">Family Tree</Button>
            <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
            <Button color="inherit" component={Link} to="/history">History</Button>
            <Button color="inherit" component={Link} to="/events">Events</Button>
            <Button color="inherit" component={Link} to="/news-feed">News Feed</Button>
            <Button color="inherit" component={Link} to="/approval">Approval</Button>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              {user?.picture && <img src={user.picture} alt={user.name} style={{ borderRadius: '50%', width: 30, height: 30 }} />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
              <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Sign Out</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={() => loginWithRedirect()}>Sign In</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
