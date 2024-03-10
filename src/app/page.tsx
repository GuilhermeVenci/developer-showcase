/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Container, Grid, Stack, Typography } from '@mui/material';
import Session from '@/components/Session';
import styles from './page.module.css';
import sessionColors from '@/styles/sessionColors.json';

export default function Home() {
  return (
    <Stack>
      <Session first bgColor={sessionColors.header[0].bgColor}>
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h1" color="white">
              Hi! I'm Guilherme
            </Typography>
            <Typography
              variant="h1"
              color="secondary.main"
              fontWeight="bold"
              fontSize="5rem"
              gutterBottom
            >
              Web Developer
            </Typography>

            <Typography variant="h6" maxWidth={540} color="white">
              Resolving design problems, building smart user interfaces and
              useful interactions, developing rich web applications and seamless
              web experiences.
            </Typography>
          </Grid>
          <Grid item>
            <Image fill src="/bg-session-1.png" alt="Background Session 1" />
          </Grid>
        </Grid>
      </Session>

      <Session bgColor={sessionColors.header[1].bgColor}>
        <Typography variant="h1">Hello World!</Typography>
      </Session>

      <Session bgColor={sessionColors.header[2].bgColor}>
        <Typography variant="h1">Hello World!</Typography>
      </Session>

      <Session bgColor="primary.main">
        <Typography variant="h1">Hello World!</Typography>
      </Session>
    </Stack>
  );
}
