import Image from 'next/image';
import styles from './page.module.css';
import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container component="main" sx={{ backgroundColor: 'white' }}>
      <Typography variant="h1">Hello World!</Typography>
    </Container>
  );
}
