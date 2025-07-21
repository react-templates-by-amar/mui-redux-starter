import { CircularProgress } from '@mui/material';
import type { CircularProgressProps } from '@mui/material';

export interface LoadingSpinnerProps extends Omit<CircularProgressProps, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingSpinner = ({ size = 'md', ...props }: LoadingSpinnerProps) => {
  const sizeMap = {
    sm: 16,
    md: 32,
    lg: 48,
  };

  return (
    <CircularProgress
      size={sizeMap[size]}
      {...props}
    />
  );
};

export default LoadingSpinner;
