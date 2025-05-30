// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',       // azul padrão (pode mudar)
      dark: '#115293',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',       // rosa padrão (pode mudar)
    },
    background: {
      default: '#f8f9fa',    // cor de fundo da página
      paper: '#dcdcdc',
      dark: '#142d31',      // cor dos cards (Paper)
    },
    text: {
      primary: '#000',
      secondary: '#666',
      dark: '#ebebeb'
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
