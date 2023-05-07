import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectError } from 'redux/contacts/contactsSelectors';

const ContactsContainer = ({ children }) => {
  const isError = useSelector(selectError);

  return isError ? (
    toast.error(isError)
  ) : (
      <>
        <Typography component='h2' sx={{color: 'primary.main', fontSize:'2em', fontWeight: 700 }}>Contacts</Typography>     
      {children}
    </>
  );
};

export default ContactsContainer;
