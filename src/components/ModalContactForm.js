import { useState } from 'react';
import { Backdrop, Modal, Box, Grid, TextField, Button } from '@mui/material';

export default function ModalContactForm({ isOpen, operation, handleSubmit }) {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const [open, setOpen] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleClose = event => {
    if (event.target.classList.contains('MuiModal-backdrop')) {
      setOpen(false);
    }
  };
  const { name, number } = contact;
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
      open={isOpen}
      onClick={handleClose}
    >
      <Modal
        open={isOpen}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
              bgcolor: 'background.default',
              padding: 8,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  value={name}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Number"
                  name="number"
                  value={number}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {operation}
            </Button>
          </Box>
        </>
      </Modal>
    </Backdrop>
  );
}
