import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import {ButtonNavbar} from './Button.component';
import ImageListItem from '@mui/material/ImageListItem';
// /images/logo/lowkeypro-text-kanan.png
import logoItem from '../../public/images/logo/lowkeypro-logo-tanpa-text.png';
import logoTextKanan from '../../public/images/logo/lowkeypro-text-kanan.png';
import Link from 'next/link';

import Image from 'next/image';
import { height } from '@mui/system';

const pages = [
  {name: "Home", route: "/", target: "_self"}, 
  {name: "Game List", route: "/game-list", target: "_self"}, 
  {name: "Top Score", route: "/top-score", target: "_self"}, 
  {name: "How to Play?", route: "/how-to-play", target: "_blank"},
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navbarStyle = {
    background: "white",
    color: "black",
    opacity: 0.8,
    width: "100%"
  }
 
  return (
    <AppBar position="static" style={navbarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImageListItem 
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} 
          >
          <Link href="/">
			      <a>
              <Image
              src={logoItem} alt="" 
              width="30" 
              height="56"
              />
            </a>
          </Link>
          </ImageListItem>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                  // style={{  color: 'black' }}
                  >

                    <a href={page.route} target={page.target}
                    style={{  textDecoration: 'none', color: 'black' }}
                    >
                      {page.name}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
              <Stack spacing={1} direction="row">
                <ButtonNavbar />
              </Stack> 
            </Menu> 
          </Box>

          {/* Untuk tampilan Website */}
          <ImageListItem 
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
             <Image
              src={logoTextKanan} alt="" 
              width="110" 
              height="76"
            />
          </ImageListItem>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <a href={page.route} target={page.target}
                    style={{  textDecoration: 'none', color: 'black' }}
                >
                {page.name}
                </a>
              </Button>
            ))}
            
          </Box>
          <Stack spacing={1} direction="row" sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <ButtonNavbar />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
