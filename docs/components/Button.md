# Button Component

A re-exported Material UI Button component with additional customization.

## Import

```tsx
import { Button } from '@/components/ui';
```

## Props

This component accepts all Material UI Button props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `'text' \| 'outlined' \| 'contained'` | `'contained'` | The variant to use |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'error' \| 'info' \| 'warning'` | `'primary'` | The color of the component |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the button |
| `startIcon` | `ReactNode` | `undefined` | Element placed before the children |
| `endIcon` | `ReactNode` | `undefined` | Element placed after the children |
| `sx` | `SxProps` | `undefined` | The system prop that allows defining system overrides as well as additional CSS styles |
| `children` | `React.ReactNode` | - | The content of the button |

*Plus all standard Material UI Button props*

## Variants

- **contained**: Default filled button with color background (primary, secondary, etc.)
- **outlined**: Button with an outline and transparent background
- **text**: Text-only button with no background or border

## Sizes

- **small**: Compact size button
- **medium**: Standard size button
- **large**: Large size button

## Examples

### Basic Usage

```tsx
<Button>Default Button</Button>
```

### Variants

```tsx
<Button variant="contained" color="primary">Primary Button</Button>
<Button variant="outlined" color="secondary">Secondary Outlined</Button>
<Button variant="text">Text Button</Button>
```

### Sizes

```tsx
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
```

### With Icon

```tsx
<Button startIcon={<AddIcon />}>
  Add Item
</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

## Styling

The Button component is based on Material UI. You can customize the appearance by:

1. Using the `sx` prop for one-off styling
   ```tsx
   <Button sx={{ borderRadius: 28, textTransform: 'none' }}>Custom Button</Button>
   ```
2. Modifying the theme in `src/theme/index.ts` to globally customize all buttons
3. Creating a styled component using Material UI's styling system
