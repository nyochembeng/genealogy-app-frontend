import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // You can customize this color
    },
    secondary: {
      main: '#f50057', // You can customize this color
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f4f4f4', // Default background color
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '0.0075em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '0.0075em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.0075em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.0075em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.7,
      letterSpacing: '0.0075em',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        padding: '8px 16px',
      },
    },
    MuiPaper: {
      root: {
        padding: '16px',
        margin: '16px 0',
      },
    },
    MuiAppBar: {
      root: {
        marginBottom: '16px',
      },
    },
  },
});

export default theme;
