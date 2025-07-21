import { Link as RouterLink } from 'react-router-dom';
import { Modal } from '@components/ui';
import { useToggle } from '@/hooks';
import { CounterDemo } from '@/components/CounterDemo';
import { 
  Typography, 
  Button, 
  Stack, 
  Box, 
  Divider
} from '@mui/material';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useToggle(false);

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        React + TypeScript + Material UI Template
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Welcome to this modern React template with TypeScript and Material UI. This template
        includes everything you need to build amazing web applications.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button
          component={RouterLink}
          to="/about"
          variant="contained"
          color="primary"
        >
          Learn More
        </Button>

        <Button
          onClick={() => setIsModalOpen(true)}
          variant="contained"
          color="secondary"
        >
          Open Test Modal
        </Button>
      </Stack>
      
      <Divider sx={{ my: 4 }} />
      
      {/* Redux Counter Demo */}
      <CounterDemo />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Test Modal"
        size="md"
      >
        <Box sx={{ py: 2 }}>
          <Typography paragraph>
            This is a test modal to demonstrate the Modal component functionality.
          </Typography>
          <Typography paragraph>You can add any content here and customize it as needed.</Typography>
          <Box sx={{ mt: 3, pt: 2, borderTop: 1, borderColor: 'divider', display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={() => setIsModalOpen(false)}
              variant="contained"
              color="primary"
            >
              Close Modal
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;
