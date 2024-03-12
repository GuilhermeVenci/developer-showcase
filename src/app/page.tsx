import React from 'react';
import { Stack, Typography } from '@mui/material';
import Session from '@/components/Session';
import sessionColors from '@/styles/sessionColors.json';
import FirstSession from '@/components/Sessions/FirstSession';
import AboutSession from '@/components/Sessions/AboutSession';
import ProjectsSession from '@/components/Sessions/ProjectsSession';

export default function Home() {
  return (
    <Stack>
      <Session first centralized bgColor={sessionColors.header[0].bgColor}>
        <FirstSession />
      </Session>

      <Session centralized bgColor={sessionColors.header[1].bgColor}>
        <AboutSession />
      </Session>

      <Session centralized bgColor={sessionColors.header[2].bgColor}>
        <ProjectsSession />
      </Session>

      <Session centralized bgColor="primary.main">
        <Typography variant="h1">Hello World!</Typography>
      </Session>
    </Stack>
  );
}
