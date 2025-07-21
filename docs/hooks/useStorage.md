# useLocalStorage & useSessionStorage

Hooks for persisting state in the browser's localStorage or sessionStorage.

## Usage

```typescript
import { useLocalStorage, useSessionStorage } from '@/hooks';

function StorageComponent() {
  // localStorage example
  const [username, setUsername, removeUsername] = useLocalStorage('username', 'guest');
  
  // sessionStorage example
  const [theme, setTheme] = useSessionStorage('theme', 'light');

  return (
    <div>
      <div>
        <h3>Local Storage Example</h3>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button onClick={removeUsername}>Clear Username</button>
      </div>
      
      <div>
        <h3>Session Storage Example</h3>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </select>
      </div>
    </div>
  );
}
```

## API

### Parameters

- `key` (string): The key to use in storage
- `initialValue` (any): The initial value (can be a function that returns the initial value)

### Returns

An array with:
1. `value` (any): The current value from storage
2. `setValue` (function): Function to update the stored value
3. `removeValue` (function): Function to remove the value from storage

## Example: Theme Switcher with Material UI and Redux

```typescript
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { toggle } from '@/redux/slices/themeSlice';
import { FormControl, InputLabel, Select, MenuItem, Typography, Box } from '@mui/material';

function ThemeSwitcher() {
  // Our theme slice already handles localStorage persistence
  const isDark = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();
  
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Select Theme</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="theme-select-label">Theme</InputLabel>
        <Select
          labelId="theme-select-label"
          id="theme-select"
          value={isDark ? 'dark' : 'light'}
          label="Theme"
          onChange={(e) => {
            if ((e.target.value === 'dark' && !isDark) ||
                (e.target.value === 'light' && isDark)) {
              dispatch(toggle());
            }
          }}
        >
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>
      
      <Typography>Current theme: {isDark ? 'dark' : 'light'}</Typography>
      <Typography variant="body2" color="text.secondary">
        This preference will be remembered across page refreshes.
      </Typography>
    </Box>
  );
}
```

## Notes

- `useLocalStorage` persists data even after the browser is closed
- `useSessionStorage` only keeps data for the current session (cleared when tab is closed)
- Both hooks handle JSON serialization automatically
- Works with server-side rendering (SSR) - will use the initial value on the server and hydrate on the client
