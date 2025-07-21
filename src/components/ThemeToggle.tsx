import { useThemeStore } from '@/store/useThemeStore';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export function ThemeToggle() {
  const { isDark, toggle } = useThemeStore();

  return (
    <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton onClick={toggle} color="inherit" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
}

