import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to the Dashboard
      </Typography>

      <Button variant="contained" color="primary">
        Add Visitor
      </Button>
    </Container>
  );
};

export default Dashboard;
