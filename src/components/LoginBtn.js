import { Button, Backdrop } from '@mui/material';
import { useState } from 'react';
import Modal from '@mui/base/Modal';
import ContactForm from './ContactForm';

export default function AddContactModal() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Button variant="contained" children="Add contact to the Phone Book" onClick={handleClick} />
      {showModal && (
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <Modal open={open} sx={{ display: 'flex', alignItems: 'center' }}>
            <><ContactForm/></>
          </Modal>
        </Backdrop>
      )}
    </>
  );
}
