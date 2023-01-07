import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin', 'korean'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#ffffff',
            backgroundColor: '#3D3F48',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input': {
            color: '#ffffff',
            fontWeight: 600,
          },
          '& .MuiInputBase-root': {
            '&:hover': {
              '& fieldset': {
                borderColor: 'rgb(178, 178, 178)',
              },
            },
          },
          '& fieldset': {
            borderRadius: 0,
            border: `1px solid #ffffff`,
            boxSizing: 'border-box',
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          margin: '0 auto',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          marginRight: 4,
          marginBottom: 8,
          color: '#ffffff',
          // backgroundColor: 'rgba(255,255,255,0.1)',
          '&.MuiChip-colorDefault': {
            backgroundColor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.4)',
            },
          },
          '&.MuiChip-colorPrimary': {
            backgroundColor: '#141721',
          },
          '& .MuiChip-deleteIcon': {
            color: '#ffffff',
            '&:hover': {
              color: 'rgba(255,255,255,0.7)',
            },
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: { display: 'flex', alignItems: 'center' },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&.Mui-selected': {
            backgroundColor: 'rgba(255,255,255,0.1)',
            fontWeight: 700,
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.4) !important',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: 40,
      fontWeight: 600,
      color: '#ffffff',
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
      color: '#ffffff',
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      color: '#ffffff',
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
      color: '#ffffff',
    },
    h5: {
      fontSize: 14,
      fontWeight: 400,
      color: '#878F98',
    },
    p: {
      fontSize: 16,
      fontWeight: 400,
      color: '#929598',
    },
    span: {
      fontSize: 16,
      fontWeight: 400,
      color: '#EAECEF',
    },
    label: {
      fontSize: 14,
      fontWeight: 400,
      color: '#868E9B',
      border: '1px solid #3D3F48',
      padding: '1px 4px',
    },
  },
});

export default theme;
