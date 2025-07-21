import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightThemeInstance, darkThemeInstance } from './index';
import { useAppSelector } from '../redux/store';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const isDark = useAppSelector((state) => state.theme.isDark);
  
  // Apply theme class on initial render
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-mode', 'light');
    }
  }, []);
  
  // Use pre-defined theme instances based on current theme state
  const theme = isDark ? darkThemeInstance : lightThemeInstance;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
}
