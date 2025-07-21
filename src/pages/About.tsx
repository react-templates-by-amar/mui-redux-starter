import { Link as RouterLink } from 'react-router-dom';
import { 
  Typography, 
  Button, 
  Box,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const About = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        About This Template
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        This is a modern React template built with:
      </Typography>
      <List sx={{ mb: 3 }}>
        <ListItem disablePadding>
          <ListItemText primary="React 19+ with TypeScript" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="React Router v7 for routing" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Material UI for styling" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Redux Toolkit for state management" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Axios for HTTP requests" />
        </ListItem>
      </List>
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="primary"
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default About;
