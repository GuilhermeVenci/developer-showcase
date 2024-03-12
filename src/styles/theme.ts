'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#cc147f',
      //main: '#ff5a5f',
    },
    secondary: {
      main: '#26bfb5',
      //main: '#00A699',
    },
    error: {
      main: '#D93900',
    },
    background: {
      default: '#000000',
      //default: '#F7F7F7',
    },
    text: {
      primary: '#111111 !important',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Open Sans", sans-serif',

    body1: {
      fontSize: '1rem',
      lineHeight: 1.5, // Valor padrão para boa legibilidade
      letterSpacing: '0.00938em', // Ajuste sutil para melhorar a clareza
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    h1: {
      fontSize: '6rem',
      lineHeight: 1,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '3rem',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h6: {
      fontSize: '1.15rem',
      lineHeight: 1.5,
    },
  },
  spacing: 8, // O valor padrão do MUI é 8;
  shape: {
    borderRadius: 8,
  },
});

// Aplica a função responsiveFontSizes para tornar as fontes responsivas
theme = responsiveFontSizes(theme, {
  breakpoints: ['xs', 'md', 'lg'], // Os breakpoints que você deseja que a função manipule
  factor: 1.5, // O fator de variação do tamanho da fonte entre os breakpoints;
});

export default theme;
