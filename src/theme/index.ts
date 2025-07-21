import { createTheme, type ThemeOptions } from '@mui/material/styles';

// Define light theme colors
const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0ea5e9', // Using the accent color from your original theme
    },
    secondary: {
      main: '#6366f1',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
    },
    text: {
      primary: '#171712',
      secondary: '#52525b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.375rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
};

// Define dark theme colors
const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#38bdf8', // Using the accent color from your original dark theme
    },
    secondary: {
      main: '#818cf8',
    },
    background: {
      default: '#0d0d12',
      paper: '#1a1a1f',
    },
    text: {
      primary: '#fafafa',
      secondary: '#d4d4d8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.375rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
};

// Create theme instances
export const lightThemeInstance = createTheme(lightTheme);
export const darkThemeInstance = createTheme(darkTheme);
