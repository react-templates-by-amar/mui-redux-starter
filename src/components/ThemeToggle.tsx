import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { toggle } from '@/redux/slices/themeSlice';

export function ThemeToggle() {
  // Use the typed selector to get the theme state
  const isDark = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton onClick={handleToggle} color="inherit" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
}

