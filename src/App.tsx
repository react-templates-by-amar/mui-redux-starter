import { Outlet, Link as RouterLink } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  AppBar, 
  Box, 
  Container, 
  Toolbar, 
  Typography, 
  Link, 
  Stack,
  Divider,
  useTheme
} from '@mui/material';

function App() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="default" elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              <Link component={RouterLink} to="/" color="inherit" underline="none">
                React Template
              </Link>
            </Typography>
            
            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' }, mr: 4 }}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link component={RouterLink} to="/about" color="inherit" underline="hover">
                About
              </Link>
            </Stack>
            
            <ThemeToggle />
          </Toolbar>
        </Container>
      </AppBar>

      <Container component="main" sx={{ py: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>

      <Box component="footer" sx={{ py: 3, mt: 'auto' }}>
        <Divider />
        <Container>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
            © {currentYear} React Template. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
