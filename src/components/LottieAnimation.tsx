'use client';
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';

interface Props {
  src: string;
  speed?: number;
  w: string | number;
  h: string | number;
  wm?: string | number;
  hm?: string | number;
  styles?: object;
  stylesMobile?: object;
}

function LottieAnimation({
  src,
  speed,
  w,
  wm,
  h,
  hm,
  styles,
  stylesMobile,
}: Props) {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Box
      sx={{
        ...(matches && !!stylesMobile ? stylesMobile : styles),
      }}
    >
      <Player
        autoplay
        loop
        speed={speed}
        src={src}
        style={{
          height: matches && !!hm ? hm : h,
          width: matches && !!wm ? wm : w,
        }}
      />
    </Box>
  );
}

export default LottieAnimation;
