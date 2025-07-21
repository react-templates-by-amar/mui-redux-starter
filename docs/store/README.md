# Redux Toolkit State Management

This project uses Redux Toolkit for state management, providing a standardized way to write Redux logic with less boilerplate code.

## Store Structure

The Redux store is configured in `src/redux/store.ts`:

```typescript
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import counterReducer from '@/redux/slices/counterSlice';
import themeReducer from '@/redux/slices/themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Available Slices

### Theme Slice

The theme slice manages the application's dark/light mode preference:

```typescript
// src/redux/slices/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isDark: boolean;
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: /* initial value based on system preference */,
  },
  reducers: {
    toggle: (state) => {
      state.isDark = !state.isDark;
      // Persist to localStorage and update DOM
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
```

### Counter Slice

A simple counter slice for demonstration purposes:

```typescript
// src/redux/slices/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

## Using Redux in Components

### Using the Redux State

Use the typed selector hook to access the Redux state:

```typescript
import { useAppSelector } from '@/redux/store';

function MyComponent() {
  // Access the theme state
  const isDark = useAppSelector((state) => state.theme.isDark);
  
  // Access the counter state
  const count = useAppSelector((state) => state.counter.count);
  
  return (
    <div>
      <p>Current theme: {isDark ? 'Dark' : 'Light'}</p>
      <p>Counter value: {count}</p>
    </div>
  );
}
```

### Dispatching Actions

Use the typed dispatch hook to dispatch Redux actions:

```typescript
import { useAppDispatch } from '@/redux/store';
import { increment, decrement, reset } from '@/redux/slices/counterSlice';
import { toggle } from '@/redux/slices/themeSlice';

function MyComponent() {
  const dispatch = useAppDispatch();
  
  return (
    <div>
      {/* Counter actions */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      
      {/* Theme actions */}
      <button onClick={() => dispatch(toggle())}>Toggle Theme</button>
    </div>
  );
}
```

## Adding New Slices

To add a new slice to your Redux store:

1. Create a new file in `src/redux/slices` (e.g., `userSlice.ts`)
2. Define your slice using `createSlice` from Redux Toolkit
3. Export the actions and reducer
4. Add the reducer to the store configuration in `store.ts`

## Best Practices

- Use the typed hooks (`useAppSelector` and `useAppDispatch`) instead of plain React-Redux hooks
- Keep reducers pure and free of side effects
- Use the Redux DevTools for debugging (already configured in the store)
- Consider using `createAsyncThunk` for async operations
- For complex state transformations, use the Redux Toolkit's `createReducer` or `builder` pattern
