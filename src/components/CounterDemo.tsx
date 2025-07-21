import { Button, Typography, Box, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { increment, decrement, reset } from '@/redux/slices/counterSlice';

export function CounterDemo() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Redux Counter Demo
      </Typography>
      <Typography variant="h2" sx={{ my: 3 }}>
        {count}
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </Stack>
    </Box>
  );
}
