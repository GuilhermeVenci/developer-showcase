'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5A5F',
    },
    secondary: {
      main: '#00A699',
    },
    error: {
      main: '#D93900',
    },
    background: {
      default: '#F7F7F7',
    },
    text: {
      primary: '#484848',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Open Sans", sans-serif',
    // Exemplo de ajuste de line-height e letter-spacing
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5, // Valor padrão para boa legibilidade
      letterSpacing: '0.00938em', // Ajuste sutil para melhorar a clareza
    },
    button: {
      textTransform: 'none', // Airbnb tende a evitar maiúsculas em botões
      fontWeight: 600,
    },
    h1: {
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
  },
  spacing: 8, // O valor padrão do MUI é 8; ajuste conforme necessário
  shape: {
    borderRadius: 8,
  },
  //shadows: ['none', '0 4px 6px rgba(0,0,0,0.1)'],
});

export default theme;