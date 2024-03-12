import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';

interface Props {
  children: React.ReactNode;
  bgColor?: string;
  first?: boolean;
  centralized?: boolean;
}

const Session = ({
  children,
  first,
  bgColor,
  centralized,
  ...props
}: Props) => {
  return (
    <Box sx={{ backgroundColor: bgColor || 'white' }} {...props}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          minHeight: '100vh',
          paddingTop: first ? 8 : 0,
          justifyContent: centralized ? 'center' : 'flex-start',
          alignItems: centralized ? 'center' : 'flex-start',
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Session;
