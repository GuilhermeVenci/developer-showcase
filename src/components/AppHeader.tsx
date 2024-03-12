'use client';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BrandIcon from './BrandIcon';
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import sessionColors from '@/styles/sessionColors.json';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
  background: string;
}

const drawerWidth = 340;
const navItems = ['Sobre', 'Projetos', 'Contato'];

function ElevationScroll({ children, window, background }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: background,
      transition: 'background-color 0.3s',
      zIndex: 98,
    },
  });
}

export default function AppHeader({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const colorList = sessionColors.header;
  const [currentColors, setCurrentColors] = useState({
    background: 'transparent',
    text: colorList[0].textColor,
    icon: colorList[0].iconColor || theme.palette.secondary.main,
  });
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', zIndex: 99 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    typeof window !== 'undefined' ? () => window.document.body : undefined;

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.floor((window.scrollY + 64) / window.innerHeight);
      setCurrentColors({
        text: colorList[index % colorList.length].textColor,
        icon:
          colorList[index % colorList.length].iconColor ||
          theme.palette.secondary.main,
        background:
          window.scrollY === 0
            ? 'transparent'
            : colorList[index % colorList.length].bgColor,
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Define a cor inicial baseada na posição de scroll atual

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [colorList, theme]);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props} background={currentColors.background}>
        <AppBar component="nav">
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                px: { sm: 3, xs: 0 },
              }}
            >
              <Box display="flex" flexDirection="row">
                <BrandIcon color={currentColors.icon} />
                <Typography
                  variant="h6"
                  fontWeight={300}
                  sx={{ color: currentColors.text }}
                  ml={2}
                >
                  Showcase
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: currentColors.text }}
                >
                  Developer
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: 'flex-end',
                  display: { xs: 'none', sm: 'flex' },
                }}
                columnGap={2}
              >
                {navItems.map((item, index) => (
                  <Button
                    key={item}
                    disableRipple
                    disableElevation
                    variant={
                      navItems.length !== index + 1 ? 'text' : 'contained'
                    }
                    sx={{
                      color:
                        navItems.length !== index + 1
                          ? currentColors.text
                          : 'white',
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: 'flex-end',
                  display: { xs: 'flex', sm: 'none' },
                }}
              >
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: currentColors.icon,
                    display: { sm: 'none' },
                  }}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">{children}</Box>
    </React.Fragment>
  );
}
