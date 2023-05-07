import { createTheme } from '@mui/material/styles';
export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#356859',
    },
    secondary: {
      main: '#FD5523',
      contrastText: '#ffcc00',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: '#fffbe6',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ['Montserrat', 'Lekton'].join(','),
  },
  spacing: factor => `${0.25 * factor}rem`,
});
