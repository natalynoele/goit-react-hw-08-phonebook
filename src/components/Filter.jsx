import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { getVisibleContacts } from 'utilities/getVisibleContacts';
import { INFO } from 'redux/constants';
import { TextField } from '@mui/material';
// import { Label, Input } from '../contactForm/ContactForm_Style';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const handleFilter = e => {
    if (contacts.length === 0) {
      toast.error(INFO.emptyPhoneBook);
    }
    if (contacts.length > 0 && visibleContacts.length === 0) {
      toast.info(INFO.noMatches);
    }
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <>
     
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />

    </>
  );
};

export default Filter;
