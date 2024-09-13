import { createTheme, lighten } from '@mui/material/styles';
import { teal, orange } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },
});

export const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    ...lightTheme.palette.primary,
    primary: {
      main: lighten(lightTheme.palette.primary.main, 0.4),
    },
    secondary: {
      ...lightTheme.palette.secondary,
      main: lighten(lightTheme.palette.secondary.main, 0.4),
    },
    mode: 'dark',
  },
});
