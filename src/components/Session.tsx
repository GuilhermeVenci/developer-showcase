import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';

interface Props {
  children: React.ReactNode;
  bgColor?: string;
  first?: boolean;
}

const Session = ({ children, first, bgColor, ...props }: Props) => {
  return (
    <Box sx={{ backgroundColor: bgColor || 'white' }} {...props}>
      <Container
        maxWidth="lg"
        sx={{
          // minHeight: first ? 'calc(100vh - 64px)' : '100vh',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Session;
