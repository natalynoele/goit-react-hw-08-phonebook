import { useEffect, useState } from 'react';
import { Backdrop,  Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

function AuthDeskMenu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const pages = ['Contacts', 'Register', 'Login'];
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState(null);
  
    useEffect(() => {
      if (isLoggedIn) setOpen(!isLoggedIn);
    }, [isLoggedIn]);    

  const handleClose = event => {
    if (event.target.classList.contains('MuiModal-backdrop')) {
      setOpen(false);
    }
  };
  
  const handleOpen = ({target}) => {   
    setOpen(true);
    const link = target.firstChild.data.toLowerCase();
    link === 'register' ? setComponent(<SignUp/>) : setComponent(<SignIn/>)
  };
  return (
    <>     
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map(page => (
            <Button
              key={page}
              onClick={handleOpen}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>     

      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Modal open={open} sx={{ display: 'flex', alignItems: 'center' }}>
          <>{component}</>
        </Modal>
      </Backdrop>
    </>
  );
}
export default AuthDeskMenu;
