import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { getMembers } from './services/memberService';
import { isAuthenticated } from './services/authService';
import Login from './pages/Login';
import Register from './pages/Register';
import FamilyTreePage from './pages/FamilyTreePage';
import PrivateRoute from './components/PrivateRoute';
import './styles/main.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const App = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      if (isAuthenticated()) {
        const data = await getMembers();
        setMembers(data);
      }
    };

    fetchMembers();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/family-tree" component={FamilyTreePage} members={members} />
        <Redirect from="/" to="/family-tree" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
