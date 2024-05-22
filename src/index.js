import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles'; // Import for Material UI theming
import theme from './theme'; // Import your custom Material UI theme (optional)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}> {/* Wrap App with ThemeProvider (optional) */}
    <App />
  </ThemeProvider>
);
