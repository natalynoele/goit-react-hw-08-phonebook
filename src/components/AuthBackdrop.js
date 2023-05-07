import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import { Modal } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function AuthBackdrop({children}) {
  const [open, setOpen] = useState(false);
  const handleClose = event => {
    if (event.target.classList.contains('MuiModal-backdrop')) {
      setOpen(false);
    }
  };

  

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    
    />
  );
}
