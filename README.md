# React + Material UI + Zustand Template

A modern, lightweight React starter template with Material UI for styling and Zustand for state management. This template provides a clean, organized structure to kickstart your React projects with best practices.

## 📚 Documentation

For detailed documentation on available hooks, components, and state management, check out the [Documentation](/docs/README.md).

## Features

- ⚡️ **Vite** — Lightning fast development and build
- 🔄 **React 18** with TypeScript
- 🎨 **Material UI** — Complete design system with ready-to-use components
- 🗃️ **Zustand** — Simple, fast state management
- 🌓 **Dark Mode** — Built-in dark mode support with Material UI themes
- 🌐 **API Client** — Axios setup with interceptors and typed service pattern
- ⚙️ **Environment Config** — Type-safe access to environment variables
- 🔧 **Error Boundary** — Global error handling for graceful failures
- 📁 **Organized Structure** — Clean project structure with separation of concerns
- 📚 **Comprehensive Documentation** — Detailed docs for all hooks and components
- 🧩 **Component Library** — Extended Material UI components to build upon
- 🔌 **Custom Hooks** — Collection of reusable React hooks

## Quick Start

### Using degit (recommended)

```bash
# Clone the template
npx degit react-templates-by-amar/mui-zustand-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

### Manual Clone

```bash
# Clone the repository
git clone https://github.com/react-templates-by-amar/mui-zustand-starter.git


# Remove git history
rm -rf .git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── api/             # API services for making API calls
│   ├── components/      # Feature-specific components
│   │   ├── ui/          # Reusable UI components (Button, Modal, LoadingSpinner, etc.)
│   │   ├── modals/       # Modal components
│   │   └── ...          # Other feature components
│   ├── hooks/           # Custom React hooks
│   ├── store/           # Zustand store definitions
│   ├── theme/           # Material UI theme configuration
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions including HTTP client
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Customization

### Material UI Configuration

Customize your design system by editing `theme/index.ts`. The template includes light and dark theme configurations:

```ts
import { createTheme, type ThemeOptions } from '@mui/material/styles';

// Define light theme colors
const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0ea5e9',
    },
    secondary: {
      main: '#6366f1',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
    },
    // Additional theme configuration...
  },
};

// Define dark theme colors
const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#38bdf8',
    },
    secondary: {
      main: '#818cf8',
    },
    background: {
      default: '#0d0d12',
      paper: '#1a1a1f',
    },
    // Additional theme configuration...
  },
};
```

### State Management

Zustand stores are located in the `src/store` directory. The template includes a basic counter store as an example.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## License

MIT

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
