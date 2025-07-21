# LoadingSpinner Component

A wrapper around Material UI's CircularProgress component for indicating loading states.

## Import

```tsx
import { LoadingSpinner } from '@/components/ui';
```

## Props

This component accepts all Material UI CircularProgress props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `size` | `number` or `string` | `40` | The size of the circle in pixels |
| `color` | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning' \| 'inherit'` | `'primary'` | The color of the component |
| `thickness` | `number` | `3.6` | The thickness of the circle |
| `variant` | `'determinate' \| 'indeterminate'` | `'indeterminate'` | The variant to use |
| `sx` | `SxProps` | `undefined` | The system prop for additional styling |
| `disableShrink` | `boolean` | `false` | If true, the shrink animation is disabled |

## Examples

### Basic Usage

```tsx
<LoadingSpinner />
```

### Different Sizes

```tsx
<LoadingSpinner size={24} />
<LoadingSpinner size={40} />
<LoadingSpinner size={60} />
```

### Custom Color

```tsx
<LoadingSpinner color="secondary" />
```

### With Text

```tsx
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
  <LoadingSpinner />
  <Typography>Loading data...</Typography>
</Box>
```

### In a Button

```tsx
<Button disabled startIcon={<LoadingSpinner size={20} />}>
  Processing...
</Button>
```

## Accessibility

The LoadingSpinner component inherits Material UI's CircularProgress accessibility features, including proper ARIA attributes for screen readers.

## Implementation Details

- Uses Material UI's CircularProgress component
- Configurable through all CircularProgress props
- Animations handled by Material UI's animation system
- Integrated with the application's theme for consistent styling
