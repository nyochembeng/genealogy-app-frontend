import {Auth0Lock} from 'auth0-lock';
import config from '../config.json'

const lock = new Auth0Lock(
  config.auth0ClientId, // Replace with your Auth0 client ID
  config.auth0Domain // Replace with your Auth0 domain
);

export const login = () => {
  lock.showSignin();
};

export const logout = () => {
  lock.logout();
  // Clear any stored user data or tokens in your frontend
};

lock.on('authenticated', (authResult) => {
  // Store the access token and profile information (optional)
  localStorage.setItem('accessToken', authResult.token);
  // You can also store the user profile information for later use
  console.log(authResult.profile);
  // Redirect to a protected route or display login success message
});

lock.logout({ returnTo: config.auth0RedirectUri }, (err, result) => {
  if (err) {
    console.error('Error during logout:', err);
    // Handle potential errors during logout (optional)
    return;
  }
  localStorage.removeItem('accessToken');
  alert('You have been logged out.');
});
