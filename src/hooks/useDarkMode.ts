import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const darkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    console.log('Initial dark mode state:', darkMode);
    return darkMode;
  });

  useEffect(() => {
    if (isDark) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-mode', 'light');
    }
  }, [isDark]);

  const toggle = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggle };
}
