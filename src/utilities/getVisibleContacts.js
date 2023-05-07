export const getVisibleContacts = (contacts, filterValue) => {
  if (contacts.length === 0) return;
  const normalizeFilter = filterValue !== '' ? filterValue.toLowerCase() : '';
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};
