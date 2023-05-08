import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';


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
