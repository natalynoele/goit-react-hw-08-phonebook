import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/contactsOperations';
import titleCase from 'utilities/titleCase';
import {
  Backdrop,
  Modal,
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from '@mui/material';

import { useState } from 'react';

export const Contact = ({ contact }) => {
  const [editedContact, setEditedContact] = useState(contact)
  const [open, setOpen]= useState(false)
  const { id, name, number } = editedContact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    setOpen(true)
  }
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEditedContact(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = () => {
    dispatch(editContact(id, {name, number}))
    setOpen(false);
  }
    const handleClose = event => {
      if (event.target.classList.contains('MuiModal-backdrop')) {
        setOpen(false);
      }
    };
  return (
    <>
      <Box
        sx={{
          mr: '1rem',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Typography component="p" sx={{ mr: '1rem', fontWeight: 700 }}>
          {titleCase(name)}
        </Typography>
        <Typography component="p" sx={{ mr: '1rem', fontWeight: 700 }}>
          {number}
        </Typography>
      </Box>
      <Box>
        <Button
          type="button"
          variant="contained"
          onClick={handleDelete}
          sx={{ mr: '0.5rem' }}
        >
          Delete
        </Button>
        <Button type="button" variant="contained" onClick={handleEdit}>
          Edit
        </Button>
      </Box>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      >
        <Modal
          open={open}
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
                Edit
              </Button>
            </Box>
          </>
        </Modal>
      </Backdrop>
    </>
  );
};
