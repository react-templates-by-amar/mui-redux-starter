import { createSlice } from '@reduxjs/toolkit';

// Helper to get initial dark mode state
const getInitialDarkMode = (): boolean => {
  // Check for localStorage theme value
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme') === 'dark') {
      return true;
    }
    
    // Check system preference if no localStorage value
    if (!('theme' in localStorage)) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    return false;
  }
  return false;
};

// Helper to apply theme to DOM
const applyThemeToDOM = (isDark: boolean): void => {
  if (typeof document !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-mode', 'light');
    }
  }
};

interface ThemeState {
  isDark: boolean;
}

// Initialize the theme
const initialState: ThemeState = {
  isDark: getInitialDarkMode(),
};

// Apply initial theme to DOM
if (typeof window !== 'undefined') {
  applyThemeToDOM(initialState.isDark);
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDark = !state.isDark;
      
      // Save to localStorage
      localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
      
      // Apply changes to DOM
      applyThemeToDOM(state.isDark);
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
