import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'utilities/getVisibleContacts';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Contact } from 'components/Contact';
import { List, ListItem } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    visibleContacts && (
      <List>
        {visibleContacts.map(contact => (
          <ListItem
            key={contact.id}
            sx={{ flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between' }}
          >
            <Contact contact={contact} />
          </ListItem>
        ))}
      </List>
    )
  );
};

export default ContactList;
