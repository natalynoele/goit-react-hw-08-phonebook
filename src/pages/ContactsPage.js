import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import ContactList from 'components/ContactList';
import Spinner from 'components/spinner/Spinner';
import ContactsContainer from 'components/ContactsContainer';
import Filter from 'components/Filter';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import ContactForm from 'components/ContactForm';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    
    if (isLoggedIn) {
      dispatch(fetchContacts());
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
 
  return (
    <>
      <Container component="main" maxWidth="md" sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <ContactForm />
        {isLoading && <Spinner />}
        <ContactsContainer>
          <Filter />
          <ContactList />
        </ContactsContainer>
      </Container>
    </>
  );
};
export default Contacts;
