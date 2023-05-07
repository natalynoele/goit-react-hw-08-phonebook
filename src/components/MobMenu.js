import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

function MobMenu({ open, closeMenu, anchorElNav }) {
  const [selected, setSelected] = useState(false);
  const [link, setLink]=useState('')
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const pages = isLoggedIn ? ['Contacts', 'Logout'] : ['Register', 'Login'];
  const navigate = useNavigate();
 
  const handleCloseNavMenu = event => {
    if (event.target.nodeName !== 'P') return;
    setSelected(true);
    setLink(`/${event.target.firstChild.data.toLowerCase()}`);
    navigate(link);
    closeMenu(event);
  };

  return (
    <>
      {
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
          open={open}
          onClose={e => handleCloseNavMenu(e)}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map(page => (
            <MenuItem
              key={page}
              selected={selected}
              onClick={e => handleCloseNavMenu(e)}            >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      }
    </>
  );
}
export default MobMenu;
