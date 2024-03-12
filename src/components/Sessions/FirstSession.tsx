import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import LottieAnimation from '@/components/LottieAnimation';

const animateTitle = {
  transform: 'translateY(0%)',
  '@keyframes jump': {
    '0%': {
      transform: 'translateY(5%)',
    },
    '65%': {
      transform: 'translateY(0%)',
    },
    '100%': {
      transform: 'translateY(5%)',
    },
  },
  animation: 'jump 1s infinite',
};

function FirstSession() {
  return (
    <>
      <LottieAnimation
        src="/animations/bg-initial-animation.json"
        speed={1.5}
        w="100vw"
        wm="100vh"
        h="100vh"
        styles={{
          zIndex: 2,
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <Grid
        container
        flexDirection={{ sm: 'row', xs: 'column-reverse' }}
        justifyContent={{ sm: 'flex-start', xs: 'flex-end' }}
        alignItems="center"
        sx={{
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Grid
          item
          sm={7}
          xs={12}
          px={{ sm: 0, xs: 2 }}
          pb={{ sm: 4, xs: 2 }}
          sx={{
            zIndex: 90,
            display: 'flex', // Isso faz o Grid item se tornar um container flexível
            flexDirection: 'column', // Organiza os filhos do item em coluna
            flex: 1, // Faz com que o item expanda para preencher o espaço disponível
            textAlign: { sm: 'left', xs: 'center' },
            justifyContent: { sm: 'flex-start', xs: 'center' },
            alignItems: { sm: 'flex-start', xs: 'center' },
          }}
        >
          <Typography
            sx={{
              typography: {
                xs: 'h3',
                sm: 'h5',
              },
            }}
            variantMapping={{ h3: 'h1', h5: 'h1' }}
            color="white"
            gutterBottom
          >
            {/* Hi! I'm Guilherme */}
            Olá! eu sou Guilherme
          </Typography>
          <Typography
            variant="h2"
            variantMapping={{ h2: 'h1' }}
            color="primary.main"
            fontWeight="bold"
            sx={{
              marginLeft: { sm: -0.5, xs: 0 },
              ...animateTitle,
            }}
          >
            {/* Front-end Developer */}
            Desenvolvedor
          </Typography>
          <Typography
            variant="h1"
            color="primary.main"
            fontWeight="bold"
            gutterBottom
            sx={{
              marginLeft: { sm: -0.5, xs: 0 },
              ...animateTitle,
            }}
          >
            Front-end
          </Typography>

          <Typography
            variant="h6"
            maxWidth={420}
            color="white"
            px={{ sm: 0, xs: 1 }}
            pb={4}
          >
            {/*
          Resolving design problems, building smart user interfaces and
          useful interactions, developing rich web applications and seamless
          web experiences.
          */}
            Ajudo meus clientes resolvendo problemas de design, construindo
            interfaces de usuário inteligentes e desenvolvendo aplicações web
            com uma ótima experiência web.
          </Typography>

          <Button variant="outlined" size="large">
            Fale comigo
          </Button>
        </Grid>
        <Grid item minHeight={{ sm: '50vh', xs: '100%' }}>
          <LottieAnimation
            src="/animations/initial-animation.json"
            speed={0.5}
            w="100vh"
            h="80vh"
            wm="100%"
            hm="100%"
            styles={{
              zIndex: 2,
              position: 'absolute',
              top: 32,
              right: 0,
            }}
            stylesMobile={{
              zIndex: 2,
              position: 'relative',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default FirstSession;
