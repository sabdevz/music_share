import { purple, teal } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: purple,
  },
});

export default theme;
