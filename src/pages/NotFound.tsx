import { Link as RouterLink } from 'react-router-dom';
import { 
  Typography, 
  Button, 
  Box,
  Container
} from '@mui/material';

const NotFound = () => {
  return (
    <Container>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '60vh',
          textAlign: 'center',
          py: 8
        }}
      >
        <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', mb: 2 }}>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'semibold' }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: 'md' }}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button 
          component={RouterLink}
          to="/" 
          variant="contained"
          color="primary"
          size="large"
        >
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
