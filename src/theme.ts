import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#217A2B',
    },
    secondary: {
      main: '#93C03D',
    },
    background: {
      default: '#FFFFFF',
      paper: '#f2f2f2',
    },
    text: {
      primary: '#666666',
      secondary: '#888888',
    },
  },
  typography: {
    fontFamily: 'Pretendard, NotoSansKR, sans-serif',
    fontSize: 16,
    body1: {
      lineHeight: 1.45,
    },
    body2: {
      lineHeight: 1.45,
    },
  },
});

export default theme;
