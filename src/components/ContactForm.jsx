import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Backdrop, Button, Box, Grid, TextField, Modal } from '@mui/material';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import titleCase from 'utilities/titleCase';
import { INFO } from 'redux/constants';
import AddContactButton from './AddContactButton';

export default function ContactForm() {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const resetForm = () => {
    setContact({ name: '', number: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const normalizeName = e.target.elements.name.value.toLowerCase();
    if (
      contacts.length > 0 &&
      contacts.find(contact => contact.name.toLowerCase() === normalizeName)
    ) {
      toast.info(`${titleCase(normalizeName)}${INFO.sameName}`);
      resetForm();
      return;
    }
    dispatch(addContact({ name, number }));
    setOpen(false);
    resetForm();
  };
  function isNumeric(value, name) {
    if ('number' === name) {
      let check = /^-?\d+$/.test(value);
      return check ? value : '';
    }
    return value;
  }
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact(prevState => ({ ...prevState, [name]: isNumeric(value, name) }));
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = event => {
    if (event.target.classList.contains('MuiModal-backdrop')) {
      setOpen(false);
    }
  };
  const { name, number } = contact;

  return (
    <>
      <AddContactButton handleClick={handleClick} />
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
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
              sx={{ mt: 3, bgcolor: 'background.default', padding: 8 }}
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
                Add contact
              </Button>
            </Box>
          </>
        </Modal>
      </Backdrop>
    </>
  );
}
