import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MobMenu from 'components/MobMenu';
import UserMenu from 'components/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import NavigateDeskMenu from 'components/NavigateDeskMenu';
import AuthDeskMenu from 'components/AuthDeskMenu ';

function ResponsiveAppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openMobMenu, setOpenMobMenu] = useState(false);

  const handleToggleNavMenu = event => {
    setAnchorElNav(event.currentTarget);
    setOpenMobMenu(!openMobMenu);
  };

  const navigateToHome = () => {
      return navigate('/');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
            <ContactPhoneIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              onClick={() => navigateToHome()}
              variant="h6"
              noWrap
              component="span"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              PHONE BOOK
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleToggleNavMenu}
                color="inherit"
                sx={{ zIndex: 9999999 }}
              >
                <MenuIcon />
              </IconButton>
              <MobMenu
                anchorElNav={anchorElNav}
                open={openMobMenu}
                closeMenu={handleToggleNavMenu}
              />
            </Box>
            <ContactPhoneIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            {!isLoggedIn && <AuthDeskMenu />}
            {isLoggedIn && <NavigateDeskMenu />}
          </Box>
          {isLoggedIn && (
            <>
              <UserMenu />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
