# Modal Component

A customized dialog component based on Material UI's Dialog component.

## Import

```tsx
import { Modal } from '@/components/ui';
```

## Props

This component extends Material UI Dialog props with additional customizations:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `isOpen` | `boolean` | - | Controls whether the modal is displayed |
| `onClose` | `(event: React.SyntheticEvent, reason: 'backdropClick' \| 'escapeKeyDown') => void` | - | Callback fired when the modal should close |
| `title` | `string` | `undefined` | Optional title to display in the DialogTitle |
| `children` | `React.ReactNode` | - | The content of the modal |
| `maxWidth` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| false` | `'sm'` | Controls the maximum width of the modal |
| `fullWidth` | `boolean` | `true` | If true, the modal stretches to the max width |
| `sx` | `SxProps` | `undefined` | The system prop for additional styling |

## Size Options (maxWidth)

- **xs**: Extra small modal (max-width: 444px)
- **sm**: Small modal (max-width: 600px)
- **md**: Medium modal (max-width: 900px)
- **lg**: Large modal (max-width: 1200px)
- **xl**: Extra large modal (max-width: 1536px)

## Examples

### Basic Usage

```tsx
import { useState } from 'react';
import { Modal } from '@/components/ui';
import { Button, Typography } from '@mui/material';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example Modal">
        <Typography>This is the modal content.</Typography>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal>
    </>
  );
}
```

### Using with useToggle Hook

```tsx
import { useToggle } from '@/hooks';
import { Modal } from '@/components/ui';
import { Button, Typography } from '@mui/material';

function MyComponent() {
  const [isOpen, toggle] = useToggle(false);
  
  return (
    <>
      <Button onClick={toggle}>Open Modal</Button>
      
      <Modal isOpen={isOpen} onClose={toggle} title="Example Modal">
        <Typography>This is the modal content.</Typography>
        <Button onClick={toggle}>Close</Button>
      </Modal>
    </>
  );
}
```

### Different Sizes

```tsx
<Modal isOpen={isOpen} onClose={onClose} maxWidth="xs" title="Small Modal">
  <Typography>This is a small modal.</Typography>
</Modal>

<Modal isOpen={isOpen} onClose={onClose} maxWidth="md" title="Large Modal">
  <Typography>This is a large modal with more content.</Typography>
</Modal>
```

### Custom Styling

```tsx
<Modal 
  isOpen={isOpen} 
  onClose={onClose} 
  sx={{ 
    '& .MuiDialog-paper': { 
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#1a365d' : '#ebf8ff',
      color: (theme) => theme.palette.mode === 'dark' ? '#90cdf4' : '#2c5282'
    } 
  }}
>
  <Typography>This modal has custom background and text colors.</Typography>
</Modal>
```

## Theme Support

The Modal component has built-in support for light and dark themes through Material UI's theming system. It automatically adjusts its appearance based on the current theme mode.

## Implementation Details

- Built on Material UI's Dialog component
- Includes a DialogTitle with a close button
- Uses DialogContent to wrap the modal content
- Provides proper backdrop click handling
- Supports keyboard navigation and accessibility features
- Prevents nested h2 elements to avoid hydration errors
