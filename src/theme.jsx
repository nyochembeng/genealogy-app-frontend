import { blue, orange } from '@material-ui/core/colors';
import { createTheme, palette } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500], // Default blue
    },
    secondary: {
      main: orange[500], // Default orange
    },
  },
  typography: {
    fontFamily: 'Roboto', // Set your preferred font family
  },
});

export default theme;
