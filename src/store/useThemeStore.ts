import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDark: boolean;
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: 
        typeof window !== 'undefined' 
          ? localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && 
              window.matchMedia('(prefers-color-scheme: dark)').matches)
          : false,
      toggle: () => 
        set((state) => {
          const newIsDark = !state.isDark;
          
          if (newIsDark) {
            document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('data-mode', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('data-mode', 'light');
          }
          
          return { isDark: newIsDark };
        }),
    }),
    {
      name: 'theme-storage',
    }
  )
);
