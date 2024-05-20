import Auth0Lock from 'auth0-lock';

const lock = new Auth0Lock(
  process.env.AUTH0_DOMAIN, // Replace with your Auth0 domain
  process.env.AUTH0_CLIENT_ID // Replace with your Auth0 client ID
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
  localStorage.setItem('accessToken', authResult.accessToken);
  // You can also store the user profile information for later use
  console.log(authResult.profile);
  // Redirect to a protected route or display login success message
});

lock.on('logout', () => {
  localStorage.removeItem('accessToken');
  // Redirect to login page or display logout message
});


// import axios from 'axios';

// const url = `${process.env.API_URL}/auth`;

// export const login = async (email, password) => {
//   const response = await axios.post(`${url}/login`, { email, password });
//   localStorage.setItem('token', response.data.token);
// };

// export const register = async (email, password) => {
//   const response = await axios.post(`${url}/register`, { email, password });
//   localStorage.setItem('token', response.data.token);
// };

// export const logout = () => {
//   localStorage.removeItem('token');
// };

// export const isAuthenticated = () => {
//   return !!localStorage.getItem('token');
// };
