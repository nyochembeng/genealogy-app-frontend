import { createTheme, palette } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Default blue
    },
    secondary: {
      main: '#ffc107', // Default orange
    },
  },
  typography: {
    fontFamily: 'Roboto', // Set your preferred font family
  },
});

export default theme;
