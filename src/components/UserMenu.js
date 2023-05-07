import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const settings = ['Logout'];

function UserMenu({ anchorElNav }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOutClick = () => {
    dispatch(logOut());   
  };
  const [open, setOpen] = useState(Boolean(anchorElNav));
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleCloseUserMenu = () => {
    setOpen(false);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <Button
        onClick={() => handleLogOutClick()}
        sx={{
          my: 2,
          mr: 4,
          color: 'white',
          display: { md: 'block', sm: 'none', xs: 'none' },
          flexDirection: 'row',
        }}
      >
        Logout
      </Button>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={user.name.toUpperCase()}
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(setting => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center" onClick={handleLogOutClick}>
              {setting}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default UserMenu;
